import { ChevronDown } from "lucide-react";

const FormSelect = ({
  label,
  value,
  onChange,
  options,
}) => {
  return (
    <div className="w-full">
      <label className="mb-1.5 block text-xs font-semibold text-gray-800">
        {label}
      </label>

      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="
            h-[50px]
            w-full
            appearance-none
            rounded-xl
            border
            border-gray-200
            bg-white
            px-4
            pr-10
            text-sm
            text-gray-700
            outline-none
            transition-all
            focus:border-[#13543e]
            focus:ring-2
            focus:ring-[#13543e]/10
            shadow-sm
          "
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown
          size={18}
          strokeWidth={1.8}
          className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500"
        />
      </div>
    </div>
  );
};

export default FormSelect;
