import type { IconProps } from "../../types";

export function Segment(props: IconProps): React.JSX.Element {
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
        d="M7.5 5C7.5 5.49445 7.35338 5.9778 7.07867 6.38893C6.80397 6.80005 6.41352 7.12048 5.95671 7.3097C5.49989 7.49892 4.99723 7.54843 4.51228 7.45196C4.02732 7.3555 3.58187 7.1174 3.23223 6.76777C2.8826 6.41814 2.6445 5.97268 2.54804 5.48773C2.45157 5.00277 2.50108 4.50011 2.6903 4.04329C2.87952 3.58648 3.19995 3.19603 3.61108 2.92133C4.0222 2.64662 4.50555 2.5 5 2.5C5.66304 2.5 6.29893 2.76339 6.76777 3.23223C7.23661 3.70108 7.5 4.33696 7.5 5ZM11 7.5C11.4945 7.5 11.9778 7.35338 12.3889 7.07867C12.8 6.80397 13.1205 6.41352 13.3097 5.95671C13.4989 5.49989 13.5484 4.99723 13.452 4.51228C13.3555 4.02732 13.1174 3.58187 12.7678 3.23223C12.4181 2.8826 11.9727 2.6445 11.4877 2.54804C11.0028 2.45157 10.5001 2.50108 10.0433 2.6903C9.58648 2.87952 9.19603 3.19995 8.92133 3.61108C8.64662 4.0222 8.5 4.50555 8.5 5C8.5 5.66304 8.76339 6.29893 9.23223 6.76777C9.70108 7.23661 10.337 7.5 11 7.5ZM5 8.5C4.50555 8.5 4.0222 8.64662 3.61108 8.92133C3.19995 9.19603 2.87952 9.58648 2.6903 10.0433C2.50108 10.5001 2.45157 11.0028 2.54804 11.4877C2.6445 11.9727 2.8826 12.4181 3.23223 12.7678C3.58187 13.1174 4.02732 13.3555 4.51228 13.452C4.99723 13.5484 5.49989 13.4989 5.95671 13.3097C6.41352 13.1205 6.80397 12.8 7.07867 12.3889C7.35338 11.9778 7.5 11.4945 7.5 11C7.5 10.337 7.23661 9.70108 6.76777 9.23223C6.29893 8.76339 5.66304 8.5 5 8.5ZM11 8.5C10.5055 8.5 10.0222 8.64662 9.61108 8.92133C9.19995 9.19603 8.87952 9.58648 8.6903 10.0433C8.50108 10.5001 8.45157 11.0028 8.54804 11.4877C8.6445 11.9727 8.8826 12.4181 9.23223 12.7678C9.58187 13.1174 10.0273 13.3555 10.5123 13.452C10.9972 13.5484 11.4999 13.4989 11.9567 13.3097C12.4135 13.1205 12.804 12.8 13.0787 12.3889C13.3534 11.9778 13.5 11.4945 13.5 11C13.5 10.337 13.2366 9.70108 12.7678 9.23223C12.2989 8.76339 11.663 8.5 11 8.5Z"
        fill={color}
      />
    </svg>
  );
}
