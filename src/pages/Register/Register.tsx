import { type SubmitHandler, useForm } from 'react-hook-form'
import { useState } from 'react'
import type { IUser } from '@/types/userTypes.ts'
import { useAppDispatch } from '@/hooks/reduxHooks.ts'
import { registerUser } from '@/store/reducers/user.ts'
import styles from './Register.module.scss'
import Container from '@mui/material/Container'

const Register = () => {
  const [userId, setUserId] = useState<number>(1)
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IUser>({
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
    <div className={styles.register}>
      <Container>
        <h1 className={styles.register__title}>Регистрация</h1>

        <h2 className={styles.error}>
          Ошибка: <br />
          {errors.email?.message} <br />
          {errors.password?.message} <br />
          {errors.confirmPassword?.message}
          <br />
          {errors.phoneNumber?.message}
          <br />
          {errors.region?.message}
        </h2>
        <div className={styles.register__block}>
          <form
            action=""
            className={styles.register__form}
            onSubmit={handleSubmit(registerSubmit)}
          >
            <div className={styles['register__form-top']}>
              <div className={styles['register__form-left']}>
                <label
                  htmlFor="email"
                  className={styles['register__form-label']}
                >
                  Email <span>*</span>:
                </label>{' '}
                <br />
                <input
                  className={styles['register__form-input-top']}
                  id="email"
                  {...register('email', {
                    required: {
                      message: 'Эл. почта обязательна',
                      value: true,
                    },
                    minLength: {
                      message: 'Минимум 10 символов в эл. почте',
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

              <div className={styles['register__form-right']}>
                <label htmlFor="tel" className={styles['register__form-label']}>
                  Номер телефона <span>*</span>:
                </label>{' '}
                <br />
                <input
                  className={styles['register__form-input-top']}
                  {...register('phoneNumber', {
                    required: {
                      message: 'Номер телефона обязательна',
                      value: true,
                    },
                  })}
                  placeholder="Telephone"
                  type="tel"
                  id="tel"
                />
              </div>
            </div>
            <label
              htmlFor="fullname"
              className={styles['register__form-label']}
            >
              Фамилия и Имя <span>*</span>:
            </label>{' '}
            <br />
            <input
              className={styles['register__form-input']}
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
            <br />
            <label htmlFor="region" className={styles['register__form-label']}>
              Регион <span>*</span>:
            </label>{' '}
            <br />
            <input
              className={styles['register__form-input']}
              {...register('region', {
                required: {
                  message: 'Регион указать обязательна',
                  value: true,
                },
              })}
              placeholder="region"
              type="text"
              id="region"
            />
            <br />
            <div className={styles.register__block}>
              <label htmlFor="email" className={styles['register__form-label']}>
                Пароль <span>*</span>:
              </label>{' '}
              <br />
              <input
                className={styles['register__form-input']}
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
                id="email"
                placeholder="Придумайте пароль"
                type={'password'}
                autoComplete="new-password"
              />
            </div>
            <br />
            <div className={styles.register__block}>
              <label
                htmlFor="confirmPassword"
                className={styles['register__form-label']}
              >
                Подтвердите пароль <span>*</span>:
              </label>{' '}
              <br />
              <input
                className={styles['register__form-input']}
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
                id="confirmPassword"
              />
            </div>
            <button type="submit" className={styles['register__form-button']}>
              Зарегистрироваться
            </button>
          </form>
        </div>
      </Container>
    </div>
  )
}

export default Register
