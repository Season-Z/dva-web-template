import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import styles from './header.less';
import bgImg from '@image/nav-bg.jpg';

const headerStyle = {
  background: `url(${bgImg}) no-repeat`,
  backgroundSize: 'cover'
};

const MyHeader = () => {
  const history = useHistory();
  const loginOut = () => {
    history.push('/login');
  };

  return (
    <div className={styles.header} style={headerStyle}>
      <div className={styles.logo}>
        <img src='/logo.png' width='38' />
        <h1>谊品</h1>
      </div>
      <Button onClick={loginOut} type='primary'>
        退出
      </Button>
    </div>
  );
};

export default MyHeader;
