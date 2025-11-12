import * as yup from 'yup'

export const registerSchema = yup.object({
  email: yup
    .string()
    .required('Эл. почта обязательна')
    .email('Неверный формат email')
    .min(10, 'Минимум 10 символов'),
  fullName: yup
    .string()
    .required('Ф.И.О обязательна')
    .matches(
      /^[A-Za-zА-Яа-яЁё]+(?:\s+[A-Za-zА-Яа-яЁё]+)+$/,
      'Имя и фамилия должны состоять из букв и хотя бы из двух слов'
    )
    .min(10, 'Минимум 10 символов'),
  region: yup.string().required('Регион обязателен'),
  password: yup
    .string()
    .required('Пароль обязателен')
    .matches(
      /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/,
      'Пароль должен содержать минимум 8 символов, заглавную букву, число!'
    ),
  confirmPassword: yup
    .string()
    .required('Подтвердите пароль')
    .oneOf([yup.ref('password')], 'Пароли не совпадают'),
})
