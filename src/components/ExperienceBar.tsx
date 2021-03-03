import React, { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/ExperienceBar.module.css';

interface PercentToNextLevelProps {
    currentExperience: number,
    experienceToNextLevel: number
}

export const getPercentToNextLevel = ({
    currentExperience,
    experienceToNextLevel
}: PercentToNextLevelProps): number => {
    return Math.round((currentExperience * 100) / experienceToNextLevel);
}


export const MinifiedExperienceBar: React.FC<PercentToNextLevelProps> = ({
    currentExperience,
    experienceToNextLevel
}) => {

    const percentToNextLevel = getPercentToNextLevel({
        currentExperience,
        experienceToNextLevel
    });

    return (
        <header className={styles.experienceBar}>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} />
            </div>
        </header>
    );
}

const ExperienceBar: React.FC = () => {

    const { currentExperience, experienceToNextLevel } = useContext(ChallengeContext);

    const percentToNextLevel = getPercentToNextLevel({
        currentExperience,
        experienceToNextLevel
    });

    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} />
                <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>{currentExperience} xp</span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    );
}

export default ExperienceBar;


