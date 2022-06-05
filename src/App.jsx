import Landing from "./components/Landing/Landing";
import WhyUs from "./components/WhyUs/WhyUs";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Landing />
      <WhyUs />
      <Footer />
    </div>
  );
}

export default App;
