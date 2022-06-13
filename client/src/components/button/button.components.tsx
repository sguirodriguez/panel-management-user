import React, { CSSProperties } from 'react'

type ButtonProps = {
  onChange?: (value: any) => void
  style?: CSSProperties
  text?: string
}

const ButtonComponent = ({ onChange, style, text }: ButtonProps) => {
  const styleDefault = {
    width: 280,
    height: 36,
  }
  return (
    <>
      <button
        className="btn btn-primary"
        type="submit"
        onClick={onChange}
        style={style ? style : styleDefault}
      >
        {text ? text : 'Criar'}
      </button>
    </>
  )
}

export default ButtonComponent
