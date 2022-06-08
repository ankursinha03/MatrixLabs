import Landing from "./components/Landing/Landing";
import WhyUs from "./components/WhyUs/WhyUs";
import ServicesProvided from "./components/ServicesProvided/ServicesProvided";
import ProjectsDone from "./components/ProjectsDone/ProjectsDone";
import Team from "./components/Team/Team";
import FAQs from "./components/FAQs/FAQ";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Landing />
      <div className={styles.circleBg}>
        <div className={styles.greyMountainWrapper}>
          <WhyUs />
        </div>
        <ServicesProvided />
        <div className={styles.greyMountainWrapper}>
          <ProjectsDone />
        </div>
        <Team />
        <FAQs />
        <Footer />
      </div>
    </div>
  );
}

export default App;
