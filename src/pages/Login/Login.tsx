import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks.ts'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { loginUser } from '@/store/reducers/user'
import type { IUser } from '@/types/userTypes'
import styles from './Login.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { GoEye, GoEyeClosed } from 'react-icons/go'
import { yupResolver } from "@hookform/resolvers/yup"
import { loginSchema } from "@pages/Login/loginSchema"
import { toast } from "react-toastify";
import { Input, Container } from '@components/ui'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  const { status } = useAppSelector((state) => state.user)

  const { register,
    handleSubmit
  } = useForm<Pick<IUser, "email" | "password">>({ mode: 'onBlur', resolver: yupResolver(loginSchema) })

  const dispatch = useAppDispatch()

  const submitForm: SubmitHandler<Pick<IUser, "email" | "password">> = (data) => {
    dispatch(loginUser(data))
  }

  const navigate = useNavigate()


  useEffect(() => {
    if (status === "success") {
      navigate('/')
      toast.success("Вы авторизованы!", {autoClose: 5000})
    }
  }, [status])


  return (
    <div className={styles.login}>
      <Container>
        <h1 className={styles.login__title}>Авторизация</h1>
        <h3 className={styles.login__subtitle}>
          Чтобы заказать товары, войдите в аккаунт
        </h3>
        <form
          id="login-form"
          className={styles.login__form}
          onSubmit={handleSubmit(submitForm)}
        >
          <Input
            id="email"
            type="email"
            placeholder="Эл.почта"
            className={styles.login__input}
            autoComplete="email"
            register={register('email')}
            required
          />
          <div className={styles.login__block}>
            <Input
              register={register('password')}
              placeholder="Введите пароль"
              type={showPassword ? 'text' : 'password'}
              autoComplete="new-password"
              className={styles.login__input}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className={styles['login__input-show']}
            >
              {showPassword ? <GoEye /> : <GoEyeClosed />}
            </button>
          </div>
          <button
            type="submit"
            className={styles.login__button}
          >
            Войти
          </button>
        </form>
        <p>
          У вас есть нет аккаунта?: <Link to="/register">Зарегистироваться</Link>
        </p>
      </Container>
    </div>
  )
}

export default Login