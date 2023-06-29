import styles from './index.module.less';
import { Button } from 'antd';
import { useState } from 'react';
import { Route } from 'react-router';
import Icons from '../../components/icons/index.tsx';

function Home() {
  // eslint-disable-next-line prefer-const
  const [showHeader, setShowHeader] = useState(true);


  const headerSwitchDisplay = () => {
    setShowHeader(!showHeader);
  }

  return (
    <>
      <div className={styles.box}>
        {showHeader ? <Header></Header> : ''}
        <button onClick={headerSwitchDisplay}>{showHeader ? '隐藏header' : '显示header'}header</button>
      </div>
    </>
  )
}

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerTab}>
        <Icons name="article"></Icons>
        文章
      </div>
    </div>
  )
}

export default Home