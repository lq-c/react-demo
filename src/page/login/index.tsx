import styles from './index.module.less';
import React, { useState } from 'react';

export default function Login() {
  const [ num, setNum ] = useState<number>(1)

  return (
    <>
      <h1>我是登录页   { num  }</h1>

    </>
  )
}