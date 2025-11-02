import * as yup from 'yup'

export const loginSchema = yup.object({
  email: yup
    .string()
    .required('Эл. почта обязательна')
    .email('Неверный формат email')
    .min(10, 'Минимум 10 символов'),
  password: yup
    .string()
    .required('Пароль обязателен')
    .matches(
      /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/,
      'Пароль должен содержать минимум 8 символов, заглавную букву, число!'
    )
})