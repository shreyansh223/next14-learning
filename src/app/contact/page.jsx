import styles from './contact.module.css';
import Image from 'next/image';

const ContactPage = () => {
  console.log('works here');

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/contact.png" className={styles.aboutImg} fill />
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input type="text" placeholder="Name & SurName"></input>
          <input type="email" placeholder="Email"></input>
          <input type="tel" placeholder="Phone Number"></input>
          <textarea
            cols="30"
            rows="10"
            type="text"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
