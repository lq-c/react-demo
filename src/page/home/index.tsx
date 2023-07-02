import styles from './index.module.less';
import { useState, useEffect } from 'react';
import Icons from '../../components/icons/index.tsx';

function Home() {
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    console.log('888')
  }, [])
  
  useEffect(() => {
    console.log('777')
  }, [])


  const headerSwitchDisplay = () => {
    setShowHeader(!showHeader);
  }

  const clickBanner = () => {
    alert('遇事不决,可问春风')
  }

  return (
    <>
      <div className={styles.box}>
        {showHeader ? <Header></Header> : ''}
        <div className={styles['main-body']}>
          <div className={styles.banner} onClick={clickBanner}>请不要把陌生人的些许善意，视为珍稀的瑰宝，却把身边亲近人的全部付出，当做天经地义的事情，对其视而不见。</div>
        </div>
      </div>
    </>
  )
}
 
function Header() {
  const [headerList] = useState([
    {
      name: '文章',
      icon: 'article'
    },
    {
      name: '社区',
      icon: 'community'
    },
    {
      name: '娱乐',
      icon: 'entertainment'
    },
    {
      name: '文件资源',
      icon: 'file-resources'
    }
  ])

  const items = headerList.map((x: { icon: unknown; name: string | number }) => {
    return (
      <a className={styles.headerTab} key={ x.name }>
        <Icons name={x.icon}></Icons>
        <span style={{ 'marginLeft': '6px' }}>{x.name}</span>
      </a>
    )
  })

  return (
    <div className={styles.header}>
      {items}
    </div>
  )
}

export default Home