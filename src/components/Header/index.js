import styles from './Header.module.scss';

const Header = ({ state }) => {
  const { currentOperand, prevOperand, operation } = state

  return (
    <header className={styles.header}>
      <div className={styles.prevOperand}>{`${prevOperand || ''}${operation || ''}`}</div>
      <div className={styles.currentOperand}>{`${currentOperand || ''}`}</div>
    </header>
  )
}

export default Header