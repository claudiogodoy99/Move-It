
import React from 'react';
import SideBar from '../components/SideBar';
import { RounterContextProvider } from '../contexts/RounterContext';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {

  const logged = localStorage.getItem('token');

  return (
    <>

      {logged ? <RounterContextProvider>
        <div style={{ display: 'flex' }}>
          <SideBar />
          <Component {...pageProps} />
        </div>
      </RounterContextProvider> : <Component {...pageProps} />}

    </>
  )
}

export default MyApp
