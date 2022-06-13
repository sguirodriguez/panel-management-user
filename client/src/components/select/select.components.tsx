import React, { CSSProperties } from 'react'
import { Label } from './select.styles'

type SelectProps = {
  id?: string
  style?: CSSProperties
  label?: string
  required?: boolean
  onChange?: any
}

const SelectComponent = ({
  id,
  style,
  label,
  required,
  onChange,
}: SelectProps) => {
  const styleDefault = {
    width: 280,
    height: 36,
    fontFamily: 'Poppins',
    fontSize: '1.2rem',
  }

  const translatorIsRequiredOrNot = (value: string) => {
    const translator = {
      required: (
        <select
          id={id}
          className="form-select"
          aria-label="Default select example"
          style={style ? style : styleDefault}
          onChange={onChange}
          required
        >
          <option value="">Gênero</option>
          <option value="male">Masculino</option>
          <option value="female">Feminino</option>
          <option value="female">Others</option>
        </select>
      ),
      notRequired: (
        <select
          id={id}
          className="form-select"
          aria-label="Default select example"
          style={style ? style : styleDefault}
          onChange={onChange}
        >
          <option value="">Gênero</option>
          <option value="male">Masculino</option>
          <option value="female">Femino</option>
          <option value="female">Others</option>
        </select>
      ),
    }

    return translator[value as keyof typeof translator]
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {label && <Label>{label}</Label>}

      {translatorIsRequiredOrNot(required ? 'required' : 'notRequired')}
    </div>
  )
}
export default SelectComponent
