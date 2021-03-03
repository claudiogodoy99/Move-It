
import React from 'react';
import { Profile } from '../models/Profile';
import styles from '../styles/components/ProfileRanking.module.css'

interface ProfileRankingProps {
    profile: Profile
}

const ProfileRanking: React.FC<ProfileRankingProps> = ({
    profile
}) => {

    const isMe = true;

    return (
        <div className={`${styles.container} ${isMe ? styles.isMe : ''}`}>
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