import React, { CSSProperties } from 'react'
import { Label, ContainerInput } from './input.styles'
type InputProps = {
  id?: string
  style?: CSSProperties
  type?: string
  placeholder?: string
  label?: string
  required?: boolean
  onChange?: any
}

const InputComponent = ({
  style,
  type,
  placeholder,
  label,
  required,
  onChange,
  id,
}: InputProps) => {
  const styleDefault = {
    width: 280,
    height: 36,
    fontFamily: 'Poppins',
    fontSize: '1.2rem',
  }

  const translatorIsRequiredOrNot = (value: string) => {
    const translator = {
      required: (
        <input
          id={id}
          type={type ? type : 'text'}
          placeholder={placeholder ? placeholder : 'Nome'}
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          onChange={onChange}
          style={style ? style : styleDefault}
          required
        />
      ),
      notRequired: (
        <input
          id={id}
          type={type ? type : 'text'}
          placeholder={placeholder ? placeholder : 'Nome'}
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          style={style ? style : styleDefault}
          onChange={onChange}
        />
      ),
    }

    return translator[value as keyof typeof translator]
  }

  return (
    <ContainerInput>
      {label && <Label>{label}</Label>}
      {translatorIsRequiredOrNot(required ? 'required' : 'notRequired')}
    </ContainerInput>
  )
}

export default InputComponent
