import { type SubmitHandler, useForm } from 'react-hook-form'
import { useState } from 'react'
import type { IUser } from '@/types/userTypes.ts'
import { useAppDispatch } from '@/hooks/reduxHooks.ts'
import { registerUser } from '@/store/reducers/user.ts'
import styles from "./Register.module.scss"
import Container from "@components/Container/Container"

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
    <div className={styles.register}>
      <Container>
        <h1 className={styles.register__title}>Регистрация</h1>
        <form
          action=""
          onSubmit={handleSubmit(registerSubmit)}
          className={styles.register__form}
        >
          <div className={styles.register__top}>
            <div className={styles['register__top-left']}>
              <label
                htmlFor="email"
                className={styles.register__label}
              >Email <span>*</span>:
              </label>
              <br />
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
                className={styles['register__input-email']}
                placeholder="Введите ваш email адрес"
                type="email"
                autoComplete="email"
              />


            </div>

            <div className={styles['register__top-right']}>
              <label
                htmlFor="tel"
                className={styles.register__label}
              >Номер телефона <span>*</span>:
              </label>
              <br />
              <input
                {...register('phoneNumber', {
                  required: {
                    message: 'Номер обязательна',
                    value: true,
                  },
                  pattern: {
                    value: /^\+7\s?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
                    message: "Введите корректный номер в формате +7 (XXX) XXX-XX-XX",
                  }
                })}
                placeholder="+7 (___) ___ - ___ - ___"
                type="tel"
                id="tel"
                className={styles['register__input-telephone']}
              />
            </div>
          </div>

          <label
            htmlFor="fullname"
            className={styles.register__label}
          >Ф.И.О <span>*</span>:
          </label>
          <input
            id="fullname"
            {...register('fullName', {
              required: {
                message: 'Ф.И.О обязательна',
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
            className={styles.register__input}

          />
          <br />
          <label
            htmlFor="region"
            className={styles.register__label}
          >Регион <span>*</span>:
          </label>
          <br />
          <input
            {...register('region', {
              required: {
                message: 'Регион обязательна',
                value: true,
              },
            })}
            placeholder="region"
            type="text"
            id="region"
            className={styles.register__input}
          />
          <div className="register__block">
            <label
              htmlFor="password"
              className={styles.register__label}
            >Пароль <span>*</span>:
            </label> <br/>
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
              className={styles.register__input}
              autoComplete="new-password"
            />
          </div>

          <div className="register__block">
            <label
              htmlFor="confirmPassword"
              className={styles.register__label}
            >Повтор пароля <span>*</span>:
            </label> <br/>
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
              className={styles.register__input}
              type="password"
              autoComplete="new-password"
            />
          </div>

          <button type="submit">Зарегистрироваться</button>
        </form>
      </Container>
    </div>
  )
}

export default Register
