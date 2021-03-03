import React, { useContext, useEffect } from 'react';
import CompletedChallenges from '../components/CompletedChallenges';
import { Profile } from '../components/Profile';
import RankingItem from '../components/ProfileRanking';
import { RounterContext, RounterContextProvider } from '../contexts/RounterContext';
import { FaSearch } from 'react-icons/fa';
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
          <FaSearch />
          <input type="input" placeholder="Encontre alguém">
          </input>
        </div>
      </header>
      <main>
        <RankingItem profile={null} />
        <RankingItem profile={null} />
        <RankingItem profile={null} />
        <RankingItem profile={null} />
        <RankingItem profile={null} />
        <RankingItem profile={null} />
        <RankingItem profile={null} />
        <RankingItem profile={null} />
        <RankingItem profile={null} />
        <RankingItem profile={null} />
        <RankingItem profile={null} />
        <RankingItem profile={null} />
      </main>
    </div>
  );
}

export default Ranking;