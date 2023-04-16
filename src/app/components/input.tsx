import React from "react";

export interface Props {
  label?: string;
  placeholder?: string;
  isPassword?: boolean;
  id?: string;
  name?: string;

  onChange?: () => void;
}

// TODO: refac with react-form

export const Input: React.FC<Props> = ({
  label,
  id,
  name,
  placeholder,
  isPassword,
  onChange,
}) => {
  return (
    <label className="flex flex-col w">
      {label}
      <input
        className="bg-background h-10 rounded-lg pl-5"
        placeholder={placeholder}
        type={isPassword ? "password" : "text"}
        name={name}
        id={id}
        onChange={onChange}
      />
    </label>
  );
};
