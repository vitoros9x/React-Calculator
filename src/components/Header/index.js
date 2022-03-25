import styles from './Header.module.scss';

const Header = ({ ...state }) => {
  const { currentOperand, prevOperand } = state

  return (
    <header className={styles.header}>
      <div className={styles.prevOperand}>{`${prevOperand || ''}`}</div>
      <div className={styles.currentOperand}>{`${currentOperand || ''}`}</div>
    </header>
  )
}

export default Header