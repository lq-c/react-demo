import styles from './index.module.less';
import { useState, useEffect, JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal } from 'react';
import Icons from '../../components/icons/index.tsx';
import axios from 'axios';

function Home() {
  const [showHeader, setShowHeader] = useState(true);
  const [banner, setBanner] = useState('Loading');

  useEffect(() => {
    // get banner text
    axios.get('https://api.vvhan.com/api/ian?cl=wx').then(function (response) { setBanner(response.data) });
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
          <div className={styles.banner} onClick={clickBanner}>{banner}</div>
          <div className={ styles.module }>
            <div className={styles['module-left']}>
              <HotSearch></HotSearch>
              <Audio></Audio>
            </div>
            <div className={styles['module-right']}>
              <PerInfo></PerInfo>
            </div>
          </div>
          {/* <div className={styles.funBar}>
            <HotSearch></HotSearch>
          </div> */}
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

function HotSearch() {
  const [hotSearch, setHotSearch] = useState<any>([]);

  useEffect(() => {
    // get weibo hot search
    axios.get('https://api.vvhan.com/api/wbhot').then(function (response) {
      const newdata = hotSearch.concat(response.data.data)
      setHotSearch(newdata);
    });
  }, [])

  return (
    <div className={styles.hotSearch}>
      <a style={{color: 'green'}}>&nbsp; &nbsp; 做人总得吃瓜吧 <span>置顶</span></a>
      {hotSearch.map((item: {
        url: string | undefined; title: string | undefined; hot: string | undefined
      }, index: number) => {
        return (
          <a target='_blank' href={item.url} key={index}>{index + 1}&nbsp; &nbsp; {item.title} <span>{item.hot}</span></a>
        )
      })}
    </div>
  )
}

function Audio() {
  return (
    <div className={styles['audio-box']}>
      <h2 style={{ fontWeight: '600' }}>听听阿刁吧~</h2>
      <audio src="/public/adiao.mp3" controls></audio>
    </div>
  )
}

function PerInfo() {
  return (
    <div className={styles.perinfo}>
      <img className={styles.avatar} src="/public/my-avatar.jpeg" alt="头像" />
      <span>光怪</span>
    </div>
  )
}

export default Home