import { ReactComponent as LogoIcon } from "assets/icons/logo-icon.svg";

import styles from "./AuthWrapper.module.scss";

const AuthWrapper = ({ titlePage, children }) => {
  return (
    <>
      <h1 className={styles.titleLogo}>
        <LogoIcon className={styles.logo} />
      </h1>

      <h2 className={styles.titlePage}>{titlePage}</h2>

      {children}
    </>
  );
};

export default AuthWrapper;
