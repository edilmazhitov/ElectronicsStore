import styles from "./Carts.module.scss"

import {
  // useAppDispatch,
  useAppSelector } from '@/hooks/reduxHooks'
// import { clearCarts } from '@/store/reducers/carts'

import { Container } from "@components/ui"
import NotProduct from "@components/NotProduct/NotProduct";
import CartsList from "@components/CartsList/CartsList"

const Carts = () => {

  // const dispatch = useAppDispatch()
  const carts = useAppSelector((state) => state.carts)
  const products = useAppSelector((state) => state.products)


  // const  = () => {
  //   dispatch(clearCarts())
  // }

  const totalPrice = carts.data.reduce((acc, cartItem) => {
    const product = products.data.find((product) => product.id === cartItem?.itemData.id);
    if (product) {
      return acc + product.price * cartItem.count;
    }
    return acc;
  }, 0);



  return (
    <main className={styles.main}>
      <section className={styles.information}>
        <Container>
          <h1 className={styles.information__title}>Корзина товаров</h1>
        </Container>
      </section>

      {
        carts.data.length > 0 ? (
          <section className={styles.carts}>
            <Container>
              <CartsList data={carts.data} />
              <h2>TOTAL PRICE: </h2>
            </Container>
          </section>
        ) : (
          <NotProduct/>
        )
      }

    </main>
  );
};

export default Carts
