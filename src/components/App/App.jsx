import styles from "./App.module.scss";

import { useRoutesConstants } from "hooks/useRoutesConstants";

const App = () => {
  const routes = useRoutesConstants();

  return <div className={styles.wrapper}>{routes}</div>;
};

export default App;
