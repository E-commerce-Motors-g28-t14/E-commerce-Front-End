import { UseFormRegisterReturn } from "react-hook-form";
import { SelectStyled } from "./style";
import arrowDown from "../../assets/arrowDown.svg"

interface iSelectProps{
    register: UseFormRegisterReturn,
    label: string,
    placeholder: string,
    disabled: boolean,
    width?: string,
    options: iOptions[]
}

interface iOptions{
    name: string,
    value: string
}

export const Select = ({ register, label, placeholder, disabled, width="19.6875rem", options }: iSelectProps) => {
    return (
        <SelectStyled width={width}>
            <label htmlFor={label.replace(" ", "")}>{label}</label>
            <div>
                <img src={arrowDown} alt="arrow down" />
                <select id={label.replace(" ", "")} {...register} disabled={disabled}>
                    <option value="">{placeholder}</option>
                    {options && options.map((option, index) => {
                        return (
                            <option key={index} value={option.value}>{option.name}</option>
                        )
                    })}
                </select>
            </div>
        </SelectStyled>
    )
}