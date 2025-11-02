import styles from './UserMenu.module.scss'
import { SlPresent } from 'react-icons/sl'
import { LuSquareUser } from 'react-icons/lu'
import { FiBarChart2, FiShoppingCart } from 'react-icons/fi'
import { MdFavoriteBorder } from 'react-icons/md'
import type { IconType } from 'react-icons'
import { Link } from 'react-router-dom'
import { useAppSelector } from '@/hooks/reduxHooks'

interface UserMenuListType {
  to: string
  name: string
  icon: IconType
}



const UserMenu = () => {

  const  { data } = useAppSelector((state) => state.user)

  const userMenuList: UserMenuListType[] = [
    {
      to: '/',
      name: 'Все акции',
      icon: SlPresent,
    },
    {
      to: data ? '/logout' : '/login',
      name: data ? 'Выйти' : 'Войти',
      icon: LuSquareUser,
    },
    {
      to: '/reviews',
      name: 'Отзывы',
      icon: FiBarChart2,
    },
    {
      to: '/favorites',
      name: 'Избранное',
      icon: MdFavoriteBorder,
    },
    {
      to: '/carts',
      name: 'Корзина',
      icon: FiShoppingCart,
    },
  ]

  return (
    <ul className={styles['user-menu__list']}>
      {userMenuList.map((item) => {
        const Icon = item.icon
        return (
          <li key={item.name} className={styles['user-menu__list-item']}>
            <Link to={item.to} className={styles['user-menu__link']}>
              <Icon className={styles['user-menu__icon']} />
              <p className={styles['user-menu__text']}>{item.name}</p>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default UserMenu
