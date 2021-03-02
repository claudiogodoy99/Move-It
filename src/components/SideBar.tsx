import React, { ReactNode, useContext, useState } from 'react';
import Link from 'next/link'
import { AiFillHome, AiFillTrophy } from 'react-icons/ai'
import styles from '../styles/components/SideBar.module.css';
import { IconType } from 'react-icons';
import { SidebarContext, SideBarContextProvider } from '../contexts/SideBarContext';




interface ItemProps {
  index: number,
  route: string,
  children: ReactNode,
}

export const Item: React.FC<ItemProps> = ({
  index,
  route,
  children
}) => {

  const { activeIndex, activedIndex } = useContext(SidebarContext);

  return (
    <Link href={route} >
      <a className={activedIndex === index ? styles.active : ''} onClick={() => activeIndex(index)}>
        {children}
      </a>
    </Link>
  );
}


const SideBar: React.FC = () => {

  return (
    <div className={styles.container}>
      <SideBarContextProvider>
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
      </SideBarContextProvider>

    </div>
  );
}

export default SideBar;
