import { useAppDispatch } from '@/hooks/reduxHooks.ts'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { loginUser } from '@/store/reducers/user.ts'
import type { IUser } from '@/types/userTypes.ts'
<<<<<<< HEAD
import { GoEye, GoEyeClosed  } from "react-icons/go";
=======
import styles from './Login.module.scss'
import { Link } from 'react-router-dom'

>>>>>>> 47fa0883093261030ef76832e5049cefec233bc0
const Login = () => {

  const [showPassword, setShowPassword] = useState(false)

  const { register, handleSubmit } = useForm<IUser>({ mode: 'onBlur' })

  const dispatch = useAppDispatch()

  const submitForm: SubmitHandler<IUser> = (data) => {
    dispatch(loginUser(data))
  }

  return (
    <div className={styles.login}>
      <h1 className={styles.login__title}>Авторизация</h1>
      <h3 className={styles.login__subtitle}>
        Чтобы заказать товары, войдите в аккаунт
      </h3>
      <form
        id="login-form"
        className={styles.login__form}
        onSubmit={handleSubmit(submitForm)}
      >
        <input
          {...register('email')}
          placeholder="Эл.почта"
          type="email"
          autoComplete="email"
          className={styles.login__input}
        />
        <div className={styles.login__block}>
          <input
            {...register('password')}
            placeholder="Введите пароль"
            type={showPassword ? 'text' : 'password'}
            autoComplete="new-password"
            className={styles.login__input}
          />
          button
        </div>
        <button type="submit" className={styles.login__button}>
          Войти
        </button>
      </form>
      <p>
        У вас есть нет аккаунта?: <Link to="/register">Зарегистироваться</Link>
      </p>
    </div>
  )
}

export default Login
