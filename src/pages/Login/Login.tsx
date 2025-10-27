import { useAppDispatch } from '@/hooks/reduxHooks.ts'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { loginUser } from '@/store/reducers/user.ts'
import type { IUser } from '@/types/userTypes.ts'
import { GoEye, GoEyeClosed  } from "react-icons/go";
const Login = () => {

  const [showPassword, setShowPassword] = useState(false)

  const { register, handleSubmit } = useForm<IUser>({ mode: 'onBlur' })

  const dispatch = useAppDispatch()

  const submitForm: SubmitHandler<IUser> = (data) => {
    dispatch(loginUser(data))
  }

  return (
    <>
      Login
      <form
        id="register-form"
        className="register__form"
        onSubmit={handleSubmit(submitForm)}
      >
        <h1 className="register__title">Авторизацию</h1>
        <h3 className="register__subtitle">
          Чтобы заказать товары пройдите Войдите в аккаунт
        </h3>

        <input
          {...register('email')}
          placeholder="Эл.почта"
          type="email"
          autoComplete="email"
        />

        <div className="register__block">
          <input
            {...register('password')}
            placeholder="Введите пароль"
            type={showPassword ? 'text' : 'password'}
            autoComplete="new-password"
          />
          button
        </div>
        <button type="submit">Войти</button>
      </form>
    </>
  )
}

export default Login
