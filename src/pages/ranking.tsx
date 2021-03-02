import React, { useContext, useEffect } from 'react';
import CompletedChallenges from '../components/CompletedChallenges';
import { Profile } from '../components/Profile';
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
        <div>
          <Profile />
        </div>
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
    </div>
  );
}

export default Ranking;