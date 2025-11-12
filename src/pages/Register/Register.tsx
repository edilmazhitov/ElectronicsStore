import { type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState, useEffect } from 'react'
import type { IRegisterUser, IUser } from '@/types/userTypes.ts'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks.ts'
import { registerUser } from '@/store/reducers/user.ts'
import styles from './Register.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { Input, Container } from '@components/ui'
import { GoEye, GoEyeClosed } from 'react-icons/go'
import { registerSchema } from './registerSchema'
import { toast } from 'react-toastify'

const Register = () => {
  const [userId, setUserId] = useState<number>(1)
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)
  const { status } = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (status === 'success') {
      navigate('/')
      toast.success('Вы авторизованы!', { autoClose: 5000 })
    }
  }, [status])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterUser>({
    mode: 'onBlur',
    resolver: yupResolver(registerSchema),
  })

  const registerSubmit: SubmitHandler<IRegisterUser> = (data) => {
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
    setUserId((prev) => prev + 1)
  }

  return (
    <div className={styles.register}>
      <Container>
        <h1 className={styles.register__title}>Регистрация</h1>
        <form
          onSubmit={handleSubmit(registerSubmit)}
          className={styles.register__form}
        >
          <Input
            id="email"
            type="email"
            placeholder="Введите ваш email"
            label={
              <>
                Email <span>*</span>:
              </>
            }
            className={styles.register__input}
            labelClassName={styles.register__label}
            register={register('email')}
            required
          />
          <p className={styles.error}>{errors.email?.message}</p>

          <Input
            id="fullname"
            type="text"
            placeholder="Введите Фамилия и Имя"
            label={
              <>
                Имя и Фамилия <span className={styles.required}>*</span>:
              </>
            }
            className={styles.register__input}
            labelClassName={styles.register__label}
            register={register('fullName')}
            required
          />
          <p className={styles.error}>{errors.fullName?.message}</p>

          <Input
            id="region"
            type="text"
            placeholder="Введите регион"
            label={
              <>
                Регион <span>*</span>:
              </>
            }
            className={styles.register__input}
            labelClassName={styles.register__label}
            register={register('region')}
            required
          />
          <p className={styles.error}>{errors.region?.message}</p>

          <Input
            id="phoneNumber"
            type="tel"
            placeholder="+7 (___) ___-__-__"
            label={
              <>
                Номер телефона <span>*</span>:
              </>
            }
            className={styles.register__input}
            labelClassName={styles.register__label}
            register={register('phoneNumber')}
            required
          />
          <p className={styles.error}>{errors.phoneNumber?.message}</p>

          <div className={styles.register__block}>
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Придумайте пароль"
              label={
                <>
                  Пароль <span>*</span>:
                </>
              }
              className={styles.register__input}
              labelClassName={styles.register__label}
              register={register('password')}
              autoComplete="new-password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className={styles['register__input-show']}
            >
              {showPassword ? <GoEye /> : <GoEyeClosed />}
            </button>
            <p className={styles.error}>{errors.password?.message}</p>
          </div>

          <div className={styles.register__block}>
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Повторите пароль"
              label={
                <>
                  Повтор пароля <span>*</span>:
                </>
              }
              className={styles.register__input}
              labelClassName={styles.register__label}
              register={register('confirmPassword')}
              autoComplete="new-password"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className={styles['register__input-show']}
            >
              {showConfirmPassword ? <GoEye /> : <GoEyeClosed />}
            </button>
            <p className={styles.error}>{errors.confirmPassword?.message}</p>
          </div>

          <button type="submit" className={styles['register__form-button']}>
            Зарегистрироваться
          </button>
        </form>
        <p className={styles.login}>
          Есть аккаунт?: <Link to="/login">Войти</Link>
        </p>
      </Container>
    </div>
  )
}

export default Register
