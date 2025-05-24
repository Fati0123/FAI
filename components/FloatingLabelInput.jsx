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
          text-gray-900 dark:text-gray-100
          ${className}
        `}
        {...props}
      />
      <label
        htmlFor={id}
        className="absolute left-4 top-2 text-sm text-gray-500 dark:text-gray-400
          peer-placeholder-shown:top-6 peer-placeholder-shown:text-base
          peer-placeholder-shown:text-gray-400 peer-focus:top-2
          peer-focus:text-sm peer-focus:text-blue-500 transition-all"
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingLabelInput;
