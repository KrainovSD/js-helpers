import type { BodyInit as NodeBodyInit, Response as NodeResponse } from "node-fetch";
import { IS_BROWSER, IS_JEST, IS_NODE } from "../../constants";
import type { ActiveMiddleware, MiddlewaresOptions, RequestInterface } from "../../types";
import { downloadFile } from "../browser";
import { isArray, isObject } from "../typings";
import { createURLWithParams, wait } from "../utils";
import { generateMiddlewares } from "./middlewares";

type ResponseErrorOptions = {
  message: string;
  status: number;
  description?: string;
};

export class ResponseError extends Error {
  status: number;

  description?: string;

  constructor({ message, status, description }: ResponseErrorOptions) {
    super(message);
    this.status = status;
    this.description = description;
  }
}

export function generateRequestsInstance(
  activeMiddlewares?: ActiveMiddleware,
  middlewareOptions?: MiddlewaresOptions,
) {
  const executeMiddlewares = generateMiddlewares(activeMiddlewares || [], middlewareOptions || {});

  async function handleRequest<T, Incoming = unknown, Body = unknown, Outcoming = unknown>(
    request: RequestInterface<T, Incoming, Body, Outcoming>,
    responseWithStatus?: boolean,
  ): Promise<{ data: T; status: number } | T> {
    if (request.delay) {
      await wait(request.delay);
    }
    if (request.mock) {
      const transformedResult = request.transformIncomingData
        ? request.transformIncomingData(request.mock)
        : (request.mock as T);

      return responseWithStatus ? { data: transformedResult, status: 200 } : transformedResult;
    }

    await executeMiddlewares(request);

    const { method, body, path, params, headers } = request;
    const trimedPath = path.replace(/^\//, "").replace(/\/$/, "");
    const fullPath =
      trimedPath.includes("http") || trimedPath.includes("https")
        ? trimedPath
        : `${window.location.origin}/${trimedPath}`;

    const url = createURLWithParams({ baseURL: fullPath, params });
    let preparedBody = body;

    if (body && !(preparedBody instanceof FormData)) {
      if (request.transformOutcomingData) {
        preparedBody = request.transformOutcomingData(body as Body);
      }

      if (isObject(body) || isArray(body)) preparedBody = JSON.stringify(preparedBody) as Outcoming;
    }

    let response: Response | NodeResponse | undefined;

    if (IS_BROWSER || IS_JEST) {
      response = await fetch(url, {
        method,
        body: preparedBody as BodyInit,
        headers: {
          ...(body instanceof FormData
            ? {}
            : { "Content-Type": "application/json; charset=UTF-8" }),
          ...headers,
        },
        signal: request.signal,
      });
    }
    if (IS_NODE && !IS_JEST) {
      const nodeFetch = (await import("node-fetch")).default;
      response = await nodeFetch(url, {
        method,
        body: preparedBody as NodeBodyInit,
        headers: {
          ...(body instanceof FormData
            ? {}
            : { "Content-Type": "application/json; charset=UTF-8" }),
          ...headers,
        },
        signal: request.signal,
      });
    }

    if (!response) {
      throw new Error("hasn't response");
    }

    if (!response.ok) {
      throw new ResponseError({
        status: response.status,
        message: `HTTP error! Status: ${response.status}`,
      });
    }

    if (request.downloadFile) {
      const data = await response.blob();
      const mimeType = response.headers.get("content-type");
      const fileName = response.headers.get("content-disposition");

      if (!mimeType || !fileName) throw new Error("Download Error! Empty info!");

      if (IS_BROWSER)
        downloadFile({
          data,
          fileName,
          mimeType,
        });

      return responseWithStatus
        ? {
            data: data as T,
            status: response.status,
          }
        : (data as T);
    }

    if (request.withoutResponse)
      return responseWithStatus ? { data: true as T, status: response.status } : (true as T);

    const result = (await response.json()) as Incoming;
    const transformedResult = request.transformIncomingData
      ? request.transformIncomingData(result)
      : (result as unknown as T);

    return responseWithStatus
      ? { data: transformedResult, status: response.status }
      : transformedResult;
  }

  async function requestApi<T, Incoming = unknown, Body = unknown, Outcoming = unknown>(
    request: RequestInterface<T, Incoming, Body, Outcoming>,
  ): Promise<T> {
    return handleRequest(request, false) as Promise<T>;
  }

  async function requestApiWithStatus<T, Incoming = unknown, Body = unknown, Outcoming = unknown>(
    request: RequestInterface<T, Incoming, Body, Outcoming>,
  ): Promise<{ data: T; status: number }> {
    return handleRequest(request, true) as Promise<{ data: T; status: number }>;
  }

  return {
    requestApi,
    requestApiWithStatus,
  };
}
