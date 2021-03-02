
import styles from '../styles/components/ProfileRanking.module.css'



const ProfileRanking: React.FC = () => {
    return (
        <div className={styles.container}>
            <img src="https://github.com/claudiogodoy99.png" alt="Claudio Godoy" />
            <div>
                <strong>Claudio Godoy</strong>
                <p>
                    <img src="icons/level.svg"
                        alt="claudio godoy" />
                    Level 1
                </p>
            </div>
        </div>
    );
}

export default ProfileRanking;