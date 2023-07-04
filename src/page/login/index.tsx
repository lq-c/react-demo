import styles from './index.module.less';

export default function Login() {
  const gohome = () => {
    window.location.pathname = '/home'
  }

  return (
    <>
      <div className={styles['login-box']}>
        <video onClick={gohome} src="/welcome.mp4" autoPlay muted ></video>
      </div>
    </>
  )
}