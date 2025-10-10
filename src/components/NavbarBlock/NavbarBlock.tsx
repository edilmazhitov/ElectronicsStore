import { Link } from "react-router-dom"
import styles from "./NavbarBlock.module.scss"

type NavbarT = {
    to: string
    name: string
}

const Navbar = () => {

    const navbarList:NavbarT[]  = [
        {
            to: "/",
            name: "О компании"
        },
                {
            to: "/",
            name: "Оплата"
        },
                {
            to: "/",
            name: "Доставка"
        },
                {
            to: "/",
            name: "Возврат"
        },
                {
            to: "/",
            name: "Отзывы"
        },
                {
            to: "/",
            name: "Вопрос-ответ"
        },
                {
            to: "/",
            name: "Новости"
        },
                {
            to: "/",
            name: "Контакты"
        }
    ]

    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbar__list}>
                {
                    navbarList.map((item) => (
                        <li className={styles['navbar__list-item']} key={item.name}>
                            <Link to={item.to} className={styles.navbar__link}>
                                {item.name}
                            </Link>    
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navbar