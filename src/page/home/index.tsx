import styles from './index.module.less';
import { Button } from 'antd';
import { useState } from 'react';

import Login from '../login/index';
import Settings from '../settings/index';

function Home() {
  // eslint-disable-next-line prefer-const
  let [num, setNum] = useState(10)
  
  const addnum = () => {
    setNum(
      num++
    )
  }

  return (
    <>
      <div className={styles.box}>
        <h2>我是home页 {num}</h2>
        <button onClick={addnum}>点击我更改信息</button>
        <Login quantity={ num }></Login>
        <Settings quantity={ num }></Settings>
      </div>
    </>
  )
}

export default Home