import Landing from "./components/Landing/Landing";
import WhyUs from "./components/WhyUs/WhyUs";
import ServicesProvided from "./components/ServicesProvided/ServicesProvided";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Landing />
      <WhyUs />
      <ServicesProvided />
      <Footer />
    </div>
  );
}

export default App;
