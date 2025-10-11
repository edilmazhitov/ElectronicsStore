import styles from './UserMenu.module.scss';
import { SlPresent } from "react-icons/sl";
import { LuSquareUser } from "react-icons/lu";
import { FiBarChart2, FiShoppingCart  } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";
import type { IconType } from "react-icons";
import { Link } from "react-router-dom";

interface UserMenuListType  {
  to: string,
  name: string,
  icon: IconType
}

const userMenuList: UserMenuListType[] = [
  {
    to: "/",
    name: "Все акции",
    icon: SlPresent
  },
  {
    to: "/",
    name: "Войти",
    icon: LuSquareUser
  },
  {
    to: "/",
    name: "Сравнение",
    icon: FiBarChart2
  },
  {
    to: "/",
    name: "Избранное",
    icon: MdFavoriteBorder
  },
  {
    to: "/",
    name: "Корзина",
    icon: FiShoppingCart
  }
]

const UserMenu = () => {

  return (
    <ul className={styles['user-menu__list']}>
      {
        userMenuList.map((item) => {
          const Icon = item.icon
          return (
            <li key={item.name} className={styles['user-menu__list-item']}>
              <Link to={item.to} className={styles['user-menu__link']}>
                <Icon className={styles['user-menu__icon']}/>
                <p className={styles['user-menu__text']}>{item.name}</p>
              </Link>
            </li>
          )
        })
      }
    </ul>
  );
};

export default UserMenu
