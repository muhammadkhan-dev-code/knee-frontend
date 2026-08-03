import { useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";

export default function PasswordInput({
  label,
  placeholder,
  id,
  value,
  onChange,
  required = false,
  icon: Icon = Lock,
}) {
  const [show, setShow] = useState(false);

  return (
    <div className="space-y-1.5 w-full">
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
        <Icon size={18} strokeWidth={1.8} className="text-slate-400 shrink-0" />

        <input
          id={id}
          type={show ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
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

        <button
          type="button"
          onClick={() => setShow(!show)}
          tabIndex={-1}
          className="text-slate-400 hover:text-slate-600 transition-colors shrink-0 cursor-pointer"
          aria-label={show ? "Hide password" : "Show password"}
        >
          {show ? <EyeOff size={18} strokeWidth={1.8} /> : <Eye size={18} strokeWidth={1.8} />}
        </button>
      </div>
    </div>
  );
}

