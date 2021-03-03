
import React from 'react';
import { Profile } from '../models/Profile';
import styles from '../styles/components/ProfileRanking.module.css'
import { MinifiedExperienceBar } from './ExperienceBar';

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
            <p>Level 1 </p>
            <div>
                <MinifiedExperienceBar
                    currentExperience={profile.currentExperience}
                    experienceToNextLevel={profile.experienceToNextLevel} />
            </div>

        </div>
    );
}

export default ProfileRanking;