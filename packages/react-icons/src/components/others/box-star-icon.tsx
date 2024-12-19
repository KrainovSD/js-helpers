import type { IconProps } from "../../types";

export function BoxStar(props: IconProps): React.JSX.Element {
  const { sizeX = 14, sizeY = 14, color = "#FFFFFF", ...rest } = props;

  return (
    <svg
      width={sizeX}
      height={sizeY}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M14.625 2.25H12.9375V1.6875C12.9375 1.53832 12.8782 1.39524 12.7727 1.28975C12.6673 1.18426 12.5242 1.125 12.375 1.125C12.2258 1.125 12.0827 1.18426 11.9773 1.28975C11.8718 1.39524 11.8125 1.53832 11.8125 1.6875V2.25H6.1875V1.6875C6.1875 1.53832 6.12824 1.39524 6.02275 1.28975C5.91726 1.18426 5.77418 1.125 5.625 1.125C5.47582 1.125 5.33274 1.18426 5.22725 1.28975C5.12176 1.39524 5.0625 1.53832 5.0625 1.6875V2.25H3.375C3.07663 2.25 2.79048 2.36853 2.5795 2.5795C2.36853 2.79048 2.25 3.07663 2.25 3.375V14.625C2.25 14.9234 2.36853 15.2095 2.5795 15.4205C2.79048 15.6315 3.07663 15.75 3.375 15.75H14.625C14.9234 15.75 15.2095 15.6315 15.4205 15.4205C15.6315 15.2095 15.75 14.9234 15.75 14.625V3.375C15.75 3.07663 15.6315 2.79048 15.4205 2.5795C15.2095 2.36853 14.9234 2.25 14.625 2.25ZM5.0625 4.5V3.9375C5.0625 3.78832 5.12176 3.64524 5.22725 3.53975C5.33274 3.43426 5.47582 3.375 5.625 3.375C5.77418 3.375 5.91726 3.43426 6.02275 3.53975C6.12824 3.64524 6.1875 3.78832 6.1875 3.9375V4.5C6.1875 4.64918 6.12824 4.79226 6.02275 4.89775C5.91726 5.00324 5.77418 5.0625 5.625 5.0625C5.47582 5.0625 5.33274 5.00324 5.22725 4.89775C5.12176 4.79226 5.0625 4.64918 5.0625 4.5ZM12.5543 8.76797L10.8345 10.1876L11.359 12.3047C11.3723 12.3584 11.3695 12.4149 11.3509 12.4671C11.3322 12.5193 11.2986 12.5648 11.2542 12.5979C11.2055 12.6338 11.1467 12.6532 11.0862 12.6534C11.0367 12.6531 10.9882 12.6398 10.9455 12.6148L9 11.4736L7.05656 12.6176C7.00861 12.646 6.95331 12.6595 6.89765 12.6564C6.842 12.6534 6.78852 12.6338 6.744 12.6003C6.69947 12.5668 6.66591 12.5208 6.64758 12.4681C6.62924 12.4155 6.62696 12.3586 6.64102 12.3047L7.16555 10.1848L5.4457 8.76797C5.40229 8.73231 5.37055 8.68447 5.35457 8.63062C5.33859 8.57676 5.33911 8.51935 5.35605 8.46578C5.373 8.41222 5.4056 8.36496 5.44965 8.33009C5.4937 8.29523 5.54718 8.27435 5.6032 8.27016L7.87008 8.09508L8.74195 6.07641C8.76377 6.02609 8.79981 5.98324 8.84566 5.95315C8.89151 5.92305 8.94516 5.90702 9 5.90702C9.05484 5.90702 9.10849 5.92305 9.15434 5.95315C9.20019 5.98324 9.23623 6.02609 9.25805 6.07641L10.1299 8.09508L12.3968 8.27016C12.4528 8.27435 12.5063 8.29523 12.5504 8.33009C12.5944 8.36496 12.627 8.41222 12.6439 8.46578C12.6609 8.51935 12.6614 8.57676 12.6454 8.63062C12.6295 8.68447 12.5977 8.73231 12.5543 8.76797ZM12.9375 4.5C12.9375 4.64918 12.8782 4.79226 12.7727 4.89775C12.6673 5.00324 12.5242 5.0625 12.375 5.0625C12.2258 5.0625 12.0827 5.00324 11.9773 4.89775C11.8718 4.79226 11.8125 4.64918 11.8125 4.5V3.9375C11.8125 3.78832 11.8718 3.64524 11.9773 3.53975C12.0827 3.43426 12.2258 3.375 12.375 3.375C12.5242 3.375 12.6673 3.43426 12.7727 3.53975C12.8782 3.64524 12.9375 3.78832 12.9375 3.9375V4.5Z"
        fill={color}
      />
    </svg>
  );
}