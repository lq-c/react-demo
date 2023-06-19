import styles from './index.module.less';
import { Button } from 'antd';

function Home() {
  return (
    <>
      <div className={ styles.box }>
        <h1 className={styles.title}>my name</h1>
        <Button type="primary">?????????</Button>
      </div>
    </>
  )
}

export default Home