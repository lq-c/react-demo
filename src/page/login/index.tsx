import styles from './index.module.less';
import React, { useState } from 'react';

export default function Login(props: any) {
  const gohome = () => {
    window.location.pathname = '/home'
  }

  return (
    <>
      <div className={styles['login-box']}>
        <video onClick={gohome} src="/welcome.mp4" autoPlay muted ></video>
      </div>
    </>
  )
}