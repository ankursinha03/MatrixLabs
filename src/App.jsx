import Landing from "./components/Landing/Landing";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
