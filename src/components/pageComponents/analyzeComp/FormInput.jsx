const FormInput = ({
  label,
  placeholder,
  value,
  onChange,
  icon: Icon,
  type = "text",
}) => {
  return (
    <div className="w-full">
      <label className="mb-1.5 block text-sm font-semibold text-gray-800">
        {label}
      </label>

      <div className="relative">
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="
            h-[45px]
            w-full
            rounded-xl
            pl-11
            pr-4
            text-sm
            border
            border-gray-300
            text-gray-900
         
           
          "
        />

        {Icon && (
          <Icon
            size={19}
            strokeWidth={1.8}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#278263]"
          />
        )}
      </div>
    </div>
  );
};

export default FormInput;