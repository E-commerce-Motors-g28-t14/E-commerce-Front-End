import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import { InputStyled } from "./style";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  errors: FieldError | undefined;
  register: UseFormRegisterReturn;
  label: string;
  placeholder: string;
  type?: HTMLInputTypeAttribute;
  disabled: boolean;
  width?: string;
  value?: string | number;
  actionBlur?: () => void;
}

export const Input = ({
  errors,
  register,
  label,
  placeholder,
  type = "text",
  disabled,
  width = "19.6875rem",
  value,
  actionBlur,
}: iInputProps) => {
  return (
    <InputStyled width={width}>
      <label htmlFor={label.replace(" ", "")}>{label}</label>
      <div>
        <input
          id={label.replace(" ", "")}
          type={type}
          placeholder={placeholder}
          {...register}
          readOnly={disabled}
          defaultValue={value}
          onBlur={actionBlur}
        />
        {errors && <span>{errors.message}</span>}
      </div>
    </InputStyled>
  );
};
