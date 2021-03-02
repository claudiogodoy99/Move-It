
import React from 'react';
import SideBar from '../components/SideBar';
import { RounterContextProvider } from '../contexts/RounterContext';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
     

        <RounterContextProvider>
          <div style={{ display: 'flex' }}>
            <SideBar />
            <Component {...pageProps} />
          </div>
        </RounterContextProvider>
    </>
  )
}

export default MyApp
