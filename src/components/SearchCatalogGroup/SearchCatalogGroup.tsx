import CatalogButton from '@/components/CatalogButton/CatalogButton.tsx'
import SearchBlock from '@/components/SearchBlock/SearchBlock.tsx'
import styles from './SearchCatalogGroup.module.scss'

const SearchCatalogGroup = () => {
  return (
    <div className={styles['search-catalog-group']}>
      <CatalogButton />
      <SearchBlock />
    </div>
  )
}

export default SearchCatalogGroup
