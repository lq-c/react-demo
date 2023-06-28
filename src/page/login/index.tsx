import styles from './index.module.less';
import React, { useState } from 'react';

export default function Login(props: any) {
  console.log('props', props.aaa);

  return (
    <>
      <h1>我是登录页   {props.quantity  }</h1>

    </>
  )
}