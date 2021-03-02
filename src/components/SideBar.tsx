import React from 'react';
import { AiFillHome,AiFillTrophy } from 'react-icons/ai'
import styles from '../styles/components/SideBar.module.css';


const SideBar: React.FC = () => {
  return (
    <div className={styles.container}>
      <a href="" >
        <AiFillHome />
      </a>
      <a href="" >
        <AiFillTrophy />
      </a>
    </div>
  );
}

export default SideBar;