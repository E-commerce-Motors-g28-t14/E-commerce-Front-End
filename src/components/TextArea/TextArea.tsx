import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { TextAreaStyled } from "./style";

interface iTextAreaProps {
  errors: FieldError | undefined;
  register: UseFormRegisterReturn;
  label: string;
  placeholder: string;
  disabled: boolean;
  width?: string;
  value?: string;
}

export const TextArea = ({
  errors,
  register,
  label,
  placeholder,
  disabled,
  width = "19.6875rem",
  value = "",
}: iTextAreaProps) => {
  return (
    <TextAreaStyled width={width}>
      <label htmlFor={label.replace(" ", "")}>{label}</label>
      <div>
        <textarea
          id={label.replace(" ", "")}
          placeholder={placeholder}
          {...register}
          disabled={disabled}
          defaultValue={value}
        />
        {errors && <span>{errors.message}</span>}
      </div>
    </TextAreaStyled>
  );
};
