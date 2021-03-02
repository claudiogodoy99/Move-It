import React, { ReactNode, useContext, useState } from 'react';
import Link from 'next/link'
import { AiFillHome, AiFillTrophy } from 'react-icons/ai'
import styles from '../styles/components/SideBar.module.css';
import { RounterContext } from '../contexts/RounterContext';




interface ItemProps {
  index: number,
  route: string,
  children: ReactNode,
}

export const Item: React.FC<ItemProps> = ({
  route,
  children
}) => {
  const { activedRoute } = useContext(RounterContext);

  return (
    <Link href={route} >
      <a className={activedRoute === route ? styles.active : ''}>
        {children}
      </a>
    </Link>
  );
}


const SideBar: React.FC = () => {

  return (
    <div className={styles.container}>
     
        <Item
          index={0}
          route="/" >

          <AiFillHome />
        </Item>
        <Item
          index={1}
          route="/ranking">
          <AiFillTrophy />
        </Item>
    </div>
  );
}

export default SideBar;
