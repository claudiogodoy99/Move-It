
import styles from '../styles/pages/Login.module.css'

const Login: React.FC = () => {

    function handleSubmit(e: any) {

    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <input type="text" name="email" required placeholder="example@gmail.com" />
                <input type="password" name="password" required placeholder="password" />
                <button type="submit"/>
            </form>
        </div>
    );
}

export default Login;