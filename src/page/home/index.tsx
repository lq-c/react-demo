import styles from './index.module.less';
import { Button } from 'antd';

import Login from '../login/index';
import Settings from '../settings/index';

function Home() {
  return (
    <>
      <div className={ styles.box }>
        {/* <h1 className={styles.title}>my name</h1>
        <Button type="primary">?????????</Button> */}
        <Login></Login>
        <Settings></Settings>
      </div>
    </>
  )
}

export default Home