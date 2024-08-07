import { lineSpinner } from "ldrs";

lineSpinner.register();

export default function Spinner() {
  return (
    <div className="spinner">
      <l-line-spinner size="40" stroke="3" speed="1" color="black" />
    </div>
  );
}
