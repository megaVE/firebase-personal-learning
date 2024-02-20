export default function FormInput({ id, type, label, fieldRef, ...props }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={id}
        id={id}
        ref={fieldRef}
        {...props}
      />
    </div>
  )
}