interface RangeProps {
  label: string;
  min: number;
  max: number;
  id: string;
}
function Range({ label, min, max, id }: RangeProps) {
  return (
    <>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type="range"
        className="form-range mb-3"
        min={min}
        max={max}
        id={id}
      />
    </>
  );
}

export default Range;
