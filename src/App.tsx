import { Button, FloatButton } from "antd";
import styles from "./app.module.less";
import { useState } from "react";
import { QuestionCircleOutlined } from '@ant-design/icons';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const onChangeColor = () => {
    const Bkcolor = theme == 'light' ? '#000' : '#f1f1f1'
    const fColor = theme == 'light' ? '#fff' : '#555';
    document.documentElement.style.setProperty('--primaryBkColor', Bkcolor);
    document.documentElement.style.setProperty('--parmaryFColor', fColor);

    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <>
      <FloatButton onClick={() => console.log('click')} />
      {/* <div className={styles.red}>qwefqwef</div> */}
      <Button className={styles['change-theme']} onClick={onChangeColor}>{ theme === 'light' ? '深色主题' : '浅色主题'}</Button>
    </>
  )
}

export default App