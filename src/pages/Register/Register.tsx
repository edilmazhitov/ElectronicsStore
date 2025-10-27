import { type SubmitHandler, useForm } from 'react-hook-form'
import { useState } from 'react'
import type { IUser } from '@/types/userTypes.ts'
import { useAppDispatch } from '@/hooks/reduxHooks.ts'
import { registerUser } from '@/store/reducers/user.ts'
<<<<<<< HEAD
import styles from "./Register.module.scss"
import Container from "@components/Container/Container"

import { GoEye, GoEyeClosed  } from "react-icons/go";

const Register = () => {
  const [userId, setUserId] = useState<number>(1)
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)

  const { register, handleSubmit, getValues } = useForm<IUser>({
=======
import styles from './Register.module.scss'
import Container from '@mui/material/Container'
import { Link } from 'react-router-dom'
const Register = () => {
  const [userId, setUserId] = useState<number>(1)
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IUser>({
>>>>>>> 47fa0883093261030ef76832e5049cefec233bc0
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
<<<<<<< HEAD
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
              type={showPassword ? 'text' : 'password'}
              className={styles.register__input}
              autoComplete="new-password"
            />

            <button onClick={() => setShowPassword(!showPassword)}>
              {
                showPassword ? <GoEye/> : <GoEyeClosed />
              }
          </button>
          </div>

          <div className="register__block">
            <label
              htmlFor="confirmPassword"
              className={styles.register__label}
            >Повтор пароля <span>*</span>:
            </label>
            <br />
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
              type={showConfirmPassword ? "text" : "password"}
              autoComplete="new-password"
            />
            <button onClick={() => setShowConfirmPassword(!showConfirmPassword)} className={styles['register__input-show']}>
              {
                showConfirmPassword ? <GoEye/> : <GoEyeClosed />
              } </button>
          </div>

          <button type="submit">Зарегистрироваться</button>
        </form>
=======

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
          <p>
            Есть аккаунт?: <Link to="/login">Войти</Link>
          </p>
        </div>
>>>>>>> 47fa0883093261030ef76832e5049cefec233bc0
      </Container>
    </div>
  )
}

export default Register
