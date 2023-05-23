import { Button } from "antd";
import styles from "./a.module.less";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const onChangeColor = () => {
    const color = theme === 'light' ? 'rgb(255, 200, 200)' : 'rgb(77, 77, 77)'
    document.documentElement.style.setProperty('--primaryColor', color);

    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <>
      <div className={styles.red}>qwefqwef</div>
      <Button onClick={onChangeColor}>Change Theme</Button>
    </>
  )
}

export default App
