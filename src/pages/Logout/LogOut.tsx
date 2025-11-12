import { Container } from '@components/ui'

import styles from './Logout.module.scss'
import { logOut } from '@/store/reducers/user'
import { useAppDispatch } from '@/hooks/reduxHooks'

const LogOut = () => {
  const dispatch = useAppDispatch()

  const onLogOut = () => dispatch(logOut())

  return (
    <div className={styles.logout}>
      <Container>
        <h1 className={styles.title}>Выход из аккаунта</h1>
        <button onClick={onLogOut} className={styles.button}>
          Выйти из аккаунта
        </button>
      </Container>
    </div>
  )
}

export default LogOut
