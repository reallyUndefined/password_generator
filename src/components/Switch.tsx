interface SwitchProps {
  label: string;
  id: string;
}
function Switch({ label, id }: SwitchProps) {
  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id={id}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

export default Switch;
