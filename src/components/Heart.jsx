export default function Heart({ fill = "none", stroke = "black", width = 20, height = 20 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 35 26"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.2101 5.33753C14.1891 1.80564 9.15122 0.855569 5.36603 4.08972C1.58083 7.32388 1.04793 12.7312 4.02046 16.5563C6.26568 19.4454 12.644 25.2455 15.6309 27.9108C16.18 28.4008 16.4545 28.6458 16.776 28.7422C17.0551 28.8259 17.3652 28.8259 17.6443 28.7422C17.9658 28.6458 18.2403 28.4008 18.7894 27.9108C21.7762 25.2455 28.1546 19.4454 30.3998 16.5563C33.3723 12.7312 32.9045 7.28986 29.0542 4.08972C25.204 0.889589 20.2312 1.80564 17.2101 5.33753Z"
        stroke={stroke}
        strokeWidth="2.22205"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
