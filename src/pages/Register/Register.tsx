import { type SubmitHandler, useForm } from 'react-hook-form'
import { useState } from 'react'
import type { IUser } from '@/types/userTypes.ts'
import { useAppDispatch } from '@/hooks/reduxHooks.ts'
import { registerUser } from '@/store/reducers/user.ts'

const Register = () => {
  const [userId, setUserId] = useState<number>(1)
  const { register, handleSubmit, getValues } = useForm<IUser>({
    mode: 'onBlur',
  })

  const dispatch = useAppDispatch()

  const registerSubmit: SubmitHandler<IUser> = (data) => {
    const { fullName, email, region, phoneNumber, password } = data

    const newUser: IUser = {
      id: userId,
      fullName,
      email,
      region,
      phoneNumber,
      balance: 0,
      password,
    }

    dispatch(registerUser(newUser))
    setUserId(userId + 1)
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit(registerSubmit)}>
        <div>
          <label htmlFor="fullname"></label>
          <input
            id="fullname"
            {...register('fullName', {
              required: {
                message: 'Эл. почта обязательна',
                value: true,
              },
              minLength: {
                message: 'Минимум 10 символов',
                value: 10,
              },
              pattern: {
                value: /^[A-Za-zА-Яа-яЁё]+(?:\s+[A-Za-zА-Яа-яЁё]+)+$/,
                message:
                  'Имя и фамилия должны состоять из букв и хотя бы из двух слов',
              },
            })}
            placeholder="fullname"
            type="text"
          />

          <label htmlFor="email"></label>
          <input
            id="email"
            {...register('email', {
              required: {
                message: 'Эл. почта обязательна',
                value: true,
              },
              minLength: {
                message: 'Минимум 10 символов',
                value: 10,
              },
              pattern: {
                message: 'Неправильный формат email',
                value: /^[^ ]+@[^ ]+\.[a-z]{2,5}$/,
              },
            })}
            placeholder="Эл.почта"
            type="email"
            autoComplete="email"
          />
        </div>
        <label htmlFor="tel"></label>
        <input
          {...register('phoneNumber', {
            required: {
              message: 'Эл. почта обязательна',
              value: true,
            },
          })}
          placeholder="Telephone"
          type="number"
          id="tel"
        />
        <label htmlFor="region"></label>
        <input
          {...register('region', {
            required: {
              message: 'Эл. почта обязательна',
              value: true,
            },
          })}
          placeholder="region"
          type="text"
          id="region"
        />
        <div className="register__block">
          <input
            {...register('password', {
              required: {
                message: 'Пароль обязателен',
                value: true,
              },
              pattern: {
                value:
                  /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g,
                message:
                  'Пароль должен содержать минимум 8 символов, заглавную букву, число!',
              },
            })}
            placeholder="Придумайте пароль"
            type={'password'}
            autoComplete="new-password"
          />
        </div>

        <div className="register__block">
          <input
            {...register('confirmPassword', {
              required: {
                message: 'Подтвердите пароль',
                value: true,
              },
              validate: (value) =>
                value === getValues('password') || 'Пароли не совпадают',
            })}
            placeholder="Повторите пароль"
            type="password"
            autoComplete="new-password"
          />
        </div>

        <button type="submit">Зарегистрироваться</button>
      </form>
    </>
  )
}

export default Register
