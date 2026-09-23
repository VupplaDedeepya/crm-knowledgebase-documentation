import React from 'react';

export function LeadsIcon({
  size = 20,
  strokeWidth = 1.5,
  color = 'currentColor',
  ...props
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      stroke={props.stroke || color}
      strokeWidth={props.strokeWidth ?? strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M13.4087 16.4377V15.0741C13.4087 14.3508 13.1214 13.6571 12.6099 13.1456C12.0985 12.6342 11.4048 12.3469 10.6815 12.3469H5.22717C4.50388 12.3469 3.81021 12.6342 3.29877 13.1456C2.78733 13.6571 2.5 14.3508 2.5 15.0741V16.4377" />
      <path d="M7.95444 9.62103C9.46062 9.62103 10.6816 8.40002 10.6816 6.89383C10.6816 5.38764 9.46062 4.16663 7.95444 4.16663C6.44827 4.16663 5.22727 5.38764 5.22727 6.89383C5.22727 8.40002 6.44827 9.62103 7.95444 9.62103Z" />
      <path d="M17.5 16.4384V15.0748C17.4995 14.4706 17.2984 13.8836 16.9282 13.406C16.558 12.9284 16.0397 12.5873 15.4546 12.4363" />
      <path d="M12.7274 4.25446C13.314 4.40466 13.8339 4.74583 14.2052 5.22419C14.5765 5.70254 14.7781 6.29088 14.7781 6.89643C14.7781 7.50199 14.5765 8.09032 14.2052 8.56868C13.8339 9.04703 13.314 9.38821 12.7274 9.53841" />
    </svg>
  );
}

export function ContactsIcon({
  size = 20,
  strokeWidth = 1.5,
  color = 'currentColor',
  ...props
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      stroke={props.stroke || color}
      strokeWidth={props.strokeWidth ?? strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M16.6667 17.5V15.8333C16.6667 14.9493 16.3155 14.1014 15.6904 13.4763C15.0652 12.8512 14.2174 12.5 13.3333 12.5H6.66667C5.78261 12.5 4.93476 12.8512 4.30964 13.4763C3.68452 14.1014 3.33333 14.9493 3.33333 15.8333V17.5" />
      <path d="M10 9.16667C11.841 9.16667 13.3333 7.67428 13.3333 5.83333C13.3333 3.99238 11.841 2.5 10 2.5C8.15905 2.5 6.66667 3.99238 6.66667 5.83333C6.66667 7.67428 8.15905 9.16667 10 9.16667Z" />
    </svg>
  );
}
