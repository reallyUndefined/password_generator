interface SwitchProps {
  label: string;
  id: string;
  value: boolean;
  onChange: VoidFunction;
}
function Switch({ label, id, value, onChange }: SwitchProps) {
  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id={id}
        checked={value}
        onChange={onChange}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

export default Switch;
