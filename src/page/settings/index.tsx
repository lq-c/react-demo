import styles from './index.module.less';
import React, { useState } from 'react';

export default function Settings() {
 const [num, setNum] = useState<number>(2)

  return (
    <>
      <h1>我是设置页  { num }</h1>
    </>
  )
}