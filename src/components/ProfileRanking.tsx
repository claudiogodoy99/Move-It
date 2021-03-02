
import React from 'react';
import styles from '../styles/components/ProfileRanking.module.css'
import { FcRating } from 'react-icons/fc'
import ExperienceBar from './ExperienceBar';



interface ProfileRankingProps {
    isTop3?: boolean
}

const ProfileRanking: React.FC<ProfileRankingProps> = ({
    isTop3
}) => {
    return (
        <div className={styles.container}>
            <img src="https://github.com/claudiogodoy99.png" alt="Claudio Godoy" />
            <strong>Claudio Godoy</strong>
            <div className={styles.nameLevelInfo}>
                <div>
                    <p>Level 1 </p>
                </div>
            </div>  
            
            <div>
                <strong>123342 XP</strong>
                <strong>0 Desafios completos</strong>
            </div>
        </div>
    );
}

export default ProfileRanking;