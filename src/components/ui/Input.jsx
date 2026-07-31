export default function Input({
  label,
  icon: Icon,
  placeholder,
  type = "text",
  id,
  name,
  value,
  onChange,
  required = false,
  autoComplete,
}) {
  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label
          htmlFor={id}
          className="block text-xs font-bold tracking-wider text-slate-500 uppercase"
        >
          {label}
        </label>
      )}

      <div
        className="
          flex items-center gap-3
          w-full h-11 px-3.5
          bg-[#f4f6fa]
          border border-slate-200/80
          rounded-xl
          transition-all duration-200
          hover:border-slate-300
          focus-within:border-[#1e204d]
          focus-within:ring-2
          focus-within:ring-[#1e204d]/10
          focus-within:bg-white
        "
      >
        {Icon && (
          <Icon
            size={18}
            strokeWidth={1.8}
            className="text-slate-400 shrink-0"
          />
        )}

        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          autoComplete={autoComplete}
          className="
            w-full
            h-full
            outline-none
            border-none
            bg-transparent
            text-sm
            font-medium
            text-slate-800
            placeholder:text-slate-400
          "
        />
      </div>
    </div>
  );
}