import styles from './Header.module.scss';
import { StoreContext } from '../../store'
import { useContext } from 'react';

const Header = () => {
  const [state, dispatch] = useContext(StoreContext)
  const { currentOperand, prevOperand, operation } = state

  console.log(state);

  return (
    <header className={styles.header}>
      <div className={styles.prevOperand}>{`${prevOperand || ''}${operation || ''}`}</div>
      <div className={styles.currentOperand}>{`${currentOperand || ''}`}</div>
    </header>
  )
}

export default Header