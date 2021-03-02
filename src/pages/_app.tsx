
import React from 'react';
import SideBar from '../components/SideBar';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div style={{
        display:'flex'
      }}>
        <SideBar />
        <div style={{
          width: "90%"
        }}>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}

export default MyApp
