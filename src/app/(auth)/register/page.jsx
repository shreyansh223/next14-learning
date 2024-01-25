import { register } from '@/components/lib/actions';
import styles from './register.module.css';
const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form className={styles.form} action={register}>
          <input type="text" placeholder="username" name="username" />
          <input type="email" placeholder="email" name="email" />
          <input type="text" placeholder="password" name="password" />
          <input
            type="text"
            placeholder="confirm password"
            name="passwordRepeat"
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
