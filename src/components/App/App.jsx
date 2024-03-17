import { useRoutesConstants } from 'hooks/useRoutesConstants';

import styles from './App.module.scss';

const App = () => {
  const routes = useRoutesConstants();

  return <div className={styles.wrapper}>{routes}</div>;
};

export default App;
