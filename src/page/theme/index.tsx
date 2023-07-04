import { useState } from 'react'
import 'antd/dist/reset.css';
import '../../main.less'
import '../../common.less'
import router from '../../router/router.tsx'
import {
  RouterProvider,
} from 'react-router-dom';
import { ConfigProvider } from 'antd';
import Icons from '../../components/icons/index.tsx';
import styles from './index.module.less';

export default function GlobalTheme() {
  type ThemeData = {
    borderRadius: number;
    colorPrimary: string;
  };

  const defaultData: ThemeData = {
    borderRadius: 6,
    colorPrimary: '#1677ff'
  };

  const [data, setData] = useState<ThemeData>(defaultData);
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const SwitchTheme = () => {
    const colorPrimary = theme == 'light' ? '#76BA99' : '#1677ff';
    const Bkcolor = theme == 'light' ? 'rgba(35,35,35,0.65)' : '#f1f1f1';
    const fontColor = theme == 'light' ? '#fff' : '#555';
    const primaryHeaderColor = theme == 'light' ? 'rgba(18, 18, 18, .8)' : '#d8e2e7';
    const primarySvgColor = theme == 'light' ? '#fff' : '#000';
    const primaryHomeMainBodyBkColor = theme == 'light' ? '#121723' : '#ECF9FF';
    const primaryWriteColor = theme == 'light' ? 'rgba(35,35,35,0.65)' : '#fff';
    const primaryHoverBorderColor = theme == 'light' ? '#8baaaa' : '#425aef';
    document.documentElement.style.setProperty('--primaryBkColor', Bkcolor);
    document.documentElement.style.setProperty('--parmaryFColor', fontColor);
    document.documentElement.style.setProperty('--primaryHeaderColor', primaryHeaderColor);
    document.documentElement.style.setProperty('--primarySvgColor', primarySvgColor);
    document.documentElement.style.setProperty('--primaryHomeMainBodyBkColor', primaryHomeMainBodyBkColor);
    document.documentElement.style.setProperty('--primaryWriteColor', primaryWriteColor);
    document.documentElement.style.setProperty('--primaryHoverBorderColor', primaryHoverBorderColor);
    setData({ ...data, colorPrimary: colorPrimary });
    setTheme(theme === 'light' ? 'dark' : 'light');

  }

  return (
    // <React.StrictMode></React.StrictMode>
      <ConfigProvider theme={{
        token: {
          colorPrimary: data.colorPrimary,
          borderRadius: data.borderRadius
        },
      }}>
        <div className={ styles.bigBody }>
          <div className={styles.body}><RouterProvider router={router}></RouterProvider></div>
          {/* <div className={styles.footer}>江山如此多娇，引无数英雄竞折腰</div> */}
        </div>
        {/* <FloatButton.Group
          trigger="hover"
          type="primary"
          style={{ right: 94 }}
          icon={<SettingOutlined rev={undefined} />}
        >
          <FloatButton />
        </FloatButton.Group> */}
      {/* <FloatButton description={theme == 'light' ? '深色模式' : '浅色模式'} shape="square" onClick={SwitchTheme} style={{ right: 24 }} icon={<Icons name='theme' />} /> */}
      <div className={styles.switchTheme} onClick={SwitchTheme}>
        {theme == 'light' ? <Icons name='lightTheme' /> : <Icons name='darkTheme' />}
      </div>
      </ConfigProvider>
  )
}