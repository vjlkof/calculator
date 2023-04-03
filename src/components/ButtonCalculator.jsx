import "./buttonCalculator.css";

export default function ButtonCalculator({
  value,
  onHandlerButtonClick,
  children,
}) {
  function onHandlerClick() {
    onHandlerButtonClick(value);
  }

  return (
    <button className="button" onClick={onHandlerClick}>
      {children}
    </button>
  );
}
