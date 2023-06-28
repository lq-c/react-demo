import styles from './index.module.less';
import React, { useState } from 'react';

export default function Settings(props: any) {
  console.log('props', props);

  return (
    <>
      <h1>我是设置页  {props.quantity }</h1> 
    </>
  )
}