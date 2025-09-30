import React from "react";
import classNames from "classnames";

type InputProps = {
  label?: string;
  placeholder?: string;
  type?: string;
  error?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  loading?: boolean;
};

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  type = "text",
  error,
  value,
  onChange,
  loading = false,
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-sm font-semibold text-gray-700">{label}</label>
      )}
      <div className="relative">
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          disabled={loading}
          className={classNames(
            "w-full rounded-lg border px-4 py-2 shadow-sm transition-all outline-none placeholder-gray-400",
            error
              ? "border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-200"
              : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200",
            loading && "bg-gray-100 cursor-not-allowed opacity-80"
          )}
        />
        {loading && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></span>
        )}
      </div>
      {error && <span className="text-xs text-red-500 font-medium">{error}</span>}
    </div>
  );
};

export default Input;
