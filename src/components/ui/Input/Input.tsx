import type { FC, ReactNode } from 'react'
import cn from 'classnames'
import type { UseFormRegisterReturn } from 'react-hook-form'
interface InputT {
  id?: string
  className?: string
  labelClassName?: string
  placeholder?: string
  type?: string
  required?: boolean
  autoComplete?: string
  label?: ReactNode
  register?: UseFormRegisterReturn
}

const Input: FC<InputT> = (props) => {
  const {
    id,
    className = '',
    labelClassName = '',
    type = 'text',
    placeholder = '',
    autoComplete = '',
    label,
    required= true,
    register,
  } = props

  return (
    <>
      {label && (
        <>
          <label htmlFor={id} className={cn(labelClassName)}>
            {label}
          </label>
          <br />
        </>
      )}
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...register}
        required={required}
        className={cn(className)}
      />
    </>
  )
}

export default Input
