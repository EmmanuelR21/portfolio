import styles from "./index.module.scss";

export default function Homepage() {
  return (
    <>
      <div className={styles.profileContainer}>
        <img
          className={styles.img}
          src="https://avatars.githubusercontent.com/u/99229037?v=4"
          alt="Github Profile image of Emmanuel Ruiz."
        />
        <h1 className={styles.profileDescription}>
          My name is Emmanuel. I am currently a student at the BMCC pursuing an
          Associates Degree in Computer Science, and an aspiring software
          engineer.
        </h1>
      </div>
      <iframe src="https://monkeytype.com/profile/EmanR" width="100%"></iframe>
    </>
  );
}
