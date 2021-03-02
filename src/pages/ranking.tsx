import React, { useContext, useEffect } from 'react';
import RankingItem from '../components/ProfileRanking';
import { RounterContext, RounterContextProvider } from '../contexts/RounterContext';

import styles from '../styles/pages/Ranking.module.css';

const Ranking: React.FC = () => {

  const { activeRouter } = useContext(RounterContext);

  useEffect(() => {
    activeRouter("/ranking");
  }, [])

  return (
    <div className={styles.container}>
      <header>
        
      </header>
      <main>
        <RankingItem isTop3 />
        <RankingItem />
        <RankingItem />
        <RankingItem />
        <RankingItem />
        <RankingItem />
        <RankingItem />
        <RankingItem />
        <RankingItem />
        <RankingItem />
        <RankingItem />
        <RankingItem />
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default Ranking;