import styles from './footer.module.css';
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Next</div>
      <div className={styles.text}>
        Next creative thoughts agency ©All rights reserverd.
      </div>
    </div>
  );
};

export default Footer;
