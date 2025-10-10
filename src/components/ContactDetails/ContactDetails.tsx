import styles from "./ContactDetails.module.scss"


const ContactDetails = () => {

    return (
        <div className={styles['contact-details']}>
            <p className={styles['contact-details__time']}>
                Ежедневно, с 8:00 до 18:00
            </p>
            <p className={styles['contact-details__tel']}>
                8 800 444 00 65
            </p>
            <button className={styles['contact-details__bell-btn']}>
                Заказать звонок
            </button>
        </div>
    )
}

export default ContactDetails