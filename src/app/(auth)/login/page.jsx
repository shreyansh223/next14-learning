import {
  handleGithubLogin,
  handleUsernamePasswordLogin,
} from '@/components/lib/actions';
import styles from './login.module.css';
import { FaGithubSquare } from 'react-icons/fa';
const LoginPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <form
          className={styles.formContainer}
          action={handleUsernamePasswordLogin}
        >
          <input type="text" placeholder="username" name="username" />
          <input type="text" placeholder="password" name="password" />
          <button>Login with Credentials</button>
        </form>
        <form className={styles.formContainer2} action={handleGithubLogin}>
          <button>
            <FaGithubSquare className={styles.github} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
