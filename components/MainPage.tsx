import styles from './MainPage.module.css';

export default function MainPage({ children }) {
  return <main className={styles.MainPage}>{children}</main>;
}
