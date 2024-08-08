import { lineSpinner } from "ldrs";

lineSpinner.register();

export default function Spinner({ size = 40, stroke = 3, speed = 1, color = "black" }) {
  return (
    <div className="spinner">
      <l-line-spinner size={size} stroke={stroke} speed={speed} color={color} />
    </div>
  );
}
