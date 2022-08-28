interface RangeProps {
  label: string;
  min: number;
  max: number;
  id: string;
  value: number;
  onChange: Function;
}
function Range({ label, min, max, id, value, onChange }: RangeProps) {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <label htmlFor={id} className="form-label">
          {label}
        </label>
        <span className="badge bg-secondary">{value}</span>
      </div>
      <input
        type="range"
        className="form-range mb-3"
        value={value}
        min={min}
        max={max}
        id={id}
        onChange={(evt) => onChange(evt.target.value)}
      />
    </>
  );
}

export default Range;
