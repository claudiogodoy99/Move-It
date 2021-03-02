
import React from 'react';
import SideBar from '../components/SideBar';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div style={{
        display: 'flex'
      }}>
        <SideBar />
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
