import Button from 'ui/Button';

import { ReactComponent as GoogleIcon } from 'assets/icons/socials/google-icon.svg';
import { ReactComponent as GitHubIcon } from 'assets/icons/socials/git-hub-icon.svg';

import styles from './LoginHeader.module.scss';

const LoginHeader = () => {
  return (
    <>
      <div className={styles.controllersSocial}>
        <Button type="button" classTypeButton="empty">
          <div className={styles.socialContent}>
            <GoogleIcon />
            <span>Google</span>
          </div>
        </Button>

        <Button type="button" classTypeButton="empty">
          <div className={styles.socialContent}>
            <GitHubIcon />
            <span>Github</span>
          </div>
        </Button>
      </div>

      <div className={styles.containerLines}>
        <div className={styles.line} />
        <span>OR</span>
        <div className={styles.line} />
      </div>
    </>
  );
};

export default LoginHeader;
