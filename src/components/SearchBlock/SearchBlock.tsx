import styles from "./SearchBlock.module.scss"
import { IoSearchOutline } from "react-icons/io5";


const SearchBlock = () => {

  return (
    <div className={styles['search-block']}>
      <form action="" className={styles['search-block__form']}>

        <label
          htmlFor="search-block"
          className={styles['search-block__label']}
        >
          <input
            type="search"
            id="search-block"
            name="search-input"
            className={styles['search-block__input']}
            placeholder="Найти среди 50000 товаров. Например: Дрель Bosch"
          />
        </label>
        <button className={styles['search-block__button']} type="submit">
          <IoSearchOutline className={styles['search-block__button-icon']} />
        </button>
      </form>
    </div>
  );
};

export default SearchBlock