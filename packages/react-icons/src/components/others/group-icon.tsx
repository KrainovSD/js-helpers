import type { IconProps } from "../../types";

export function Group(props: IconProps): React.JSX.Element {
  const { size = 14, sizeX = size, sizeY = size, color = "#FFFFFF", ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={sizeX}
      height={sizeY}
      viewBox="0 0 16 16"
      fill="none"
      {...rest}
    >
      <path
        d="M5.14615 4.35366C5.09967 4.30722 5.06279 4.25207 5.03763 4.19138C5.01246 4.13068 4.99951 4.06561 4.99951 3.99991C4.99951 3.9342 5.01246 3.86913 5.03763 3.80843C5.06279 3.74774 5.09967 3.69259 5.14615 3.64616L7.64615 1.14616C7.69259 1.09967 7.74774 1.06279 7.80843 1.03763C7.86913 1.01246 7.9342 0.999512 7.99991 0.999512C8.06561 0.999512 8.13068 1.01246 8.19138 1.03763C8.25207 1.06279 8.30722 1.09967 8.35366 1.14616L10.8537 3.64616C10.9001 3.69259 10.937 3.74774 10.9622 3.80843C10.9873 3.86913 11.0003 3.9342 11.0003 3.99991C11.0003 4.06561 10.9873 4.13068 10.9622 4.19138C10.937 4.25207 10.9001 4.30722 10.8537 4.35366L8.35366 6.85366C8.30722 6.90014 8.25207 6.93702 8.19138 6.96218C8.13068 6.98735 8.06561 7.0003 7.99991 7.0003C7.9342 7.0003 7.86913 6.98735 7.80843 6.96218C7.74774 6.93702 7.69259 6.90014 7.64615 6.85366L5.14615 4.35366ZM8.35366 9.14615C8.30722 9.09967 8.25207 9.06279 8.19138 9.03762C8.13068 9.01246 8.06561 8.99951 7.99991 8.99951C7.9342 8.99951 7.86913 9.01246 7.80843 9.03762C7.74774 9.06279 7.69259 9.09967 7.64615 9.14615L5.14615 11.6462C5.09967 11.6926 5.06279 11.7477 5.03763 11.8084C5.01246 11.8691 4.99951 11.9342 4.99951 11.9999C4.99951 12.0656 5.01246 12.1307 5.03763 12.1914C5.06279 12.2521 5.09967 12.3072 5.14615 12.3537L7.64615 14.8537C7.69259 14.9001 7.74774 14.937 7.80843 14.9622C7.86913 14.9873 7.9342 15.0003 7.99991 15.0003C8.06561 15.0003 8.13068 14.9873 8.19138 14.9622C8.25207 14.937 8.30722 14.9001 8.35366 14.8537L10.8537 12.3537C10.9001 12.3072 10.937 12.2521 10.9622 12.1914C10.9873 12.1307 11.0003 12.0656 11.0003 11.9999C11.0003 11.9342 10.9873 11.8691 10.9622 11.8084C10.937 11.7477 10.9001 11.6926 10.8537 11.6462L8.35366 9.14615ZM14.8537 7.64615L12.3537 5.14615C12.3072 5.09967 12.2521 5.06279 12.1914 5.03763C12.1307 5.01246 12.0656 4.99951 11.9999 4.99951C11.9342 4.99951 11.8691 5.01246 11.8084 5.03763C11.7477 5.06279 11.6926 5.09967 11.6462 5.14615L9.14615 7.64615C9.09967 7.69259 9.06279 7.74774 9.03762 7.80843C9.01246 7.86913 8.99951 7.9342 8.99951 7.99991C8.99951 8.06561 9.01246 8.13068 9.03762 8.19138C9.06279 8.25207 9.09967 8.30722 9.14615 8.35366L11.6462 10.8537C11.6926 10.9001 11.7477 10.937 11.8084 10.9622C11.8691 10.9873 11.9342 11.0003 11.9999 11.0003C12.0656 11.0003 12.1307 10.9873 12.1914 10.9622C12.2521 10.937 12.3072 10.9001 12.3537 10.8537L14.8537 8.35366C14.9001 8.30722 14.937 8.25207 14.9622 8.19138C14.9873 8.13068 15.0003 8.06561 15.0003 7.99991C15.0003 7.9342 14.9873 7.86913 14.9622 7.80843C14.937 7.74774 14.9001 7.69259 14.8537 7.64615ZM6.85366 7.64615L4.35366 5.14615C4.30722 5.09967 4.25207 5.06279 4.19138 5.03763C4.13068 5.01246 4.06561 4.99951 3.99991 4.99951C3.9342 4.99951 3.86913 5.01246 3.80843 5.03763C3.74774 5.06279 3.69259 5.09967 3.64616 5.14615L1.14616 7.64615C1.09967 7.69259 1.06279 7.74774 1.03763 7.80843C1.01246 7.86913 0.999512 7.9342 0.999512 7.99991C0.999512 8.06561 1.01246 8.13068 1.03763 8.19138C1.06279 8.25207 1.09967 8.30722 1.14616 8.35366L3.64616 10.8537C3.69259 10.9001 3.74774 10.937 3.80843 10.9622C3.86913 10.9873 3.9342 11.0003 3.99991 11.0003C4.06561 11.0003 4.13068 10.9873 4.19138 10.9622C4.25207 10.937 4.30722 10.9001 4.35366 10.8537L6.85366 8.35366C6.90014 8.30722 6.93702 8.25207 6.96218 8.19138C6.98735 8.13068 7.0003 8.06561 7.0003 7.99991C7.0003 7.9342 6.98735 7.86913 6.96218 7.80843C6.93702 7.74774 6.90014 7.69259 6.85366 7.64615Z"
        fill={color}
      />
    </svg>
  );
}
