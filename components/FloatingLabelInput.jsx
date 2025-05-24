'use client';

const FloatingLabelInput = ({
  id,
  label,
  type = 'text',
  className = '',
  required = false,
  ...props
}) => {
  return (
    <div className="relative mb-4">
      <input
        id={id}
        type={type}
        required={required}
        placeholder=" "
        className={`
          peer w-full pt-6 pb-2 px-4 border rounded-lg
          bg-white dark:bg-gray-900
          border-gray-300 dark:border-gray-700
          focus:outline-none focus:ring-2 focus:ring-blue-500
          transition-all duration-200
          ${className}
        `}
        {...props}
      />
      <label
        htmlFor={id}
        className={`
          absolute left-4 top-4 text-gray-500 dark:text-gray-400
          transition-all duration-200 cursor-text
          peer-focus:-translate-y-3 peer-focus:scale-75
          peer-focus:text-blue-500 dark:peer-focus:text-blue-400
          peer-[:not(:placeholder-shown)]:-translate-y-3
          peer-[:not(:placeholder-shown)]:scale-75
        `}
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
    </div>
  );
};

export default FloatingLabelInput;
