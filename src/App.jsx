import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.css";
import Grid from "./components/grid";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Grid
        photos={[
          "https://picsum.photos/200/200",
          "https://picsum.photos/200/300",
          "https://picsum.photos/700/300",
          "https://picsum.photos/200/100",
          "https://picsum.photos/100/300",
          "https://picsum.photos/500/300",
          "https://picsum.photos/500/700",
          "https://picsum.photos/500/200",
          "https://picsum.photos/500/100",
          "https://picsum.photos/500/900",
          "https://picsum.photos/500/800",
          "https://picsum.photos/100/100",
          "https://picsum.photos/500/500",
        ]}
      />
      <h2 style={{ color: "#00D186", textAlign: "center" }}>Projects</h2>
      <p style={{ color: "white", textAlign: "center" }}>
        Lorem ipsum dolor sit amet, consectetur adipicing elit. Donec sagittis
        lorem vitae maleasuada fermentum.
      </p>
      <ul class="nav justify-content-center">
        <ul class="nav nav-pills nav-fill margin">
          <li class="nav-item">
            <a class="nav-link active" href="#">
              Websites
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Dashboards
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Calculators
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" aria-disabled="true">
              Special Daaps
            </a>
          </li>
        </ul>
      </ul><br></br>
      <div class="container text-center">
        <div class="row">
          <div class="col"><img src="i2.jpg"></img></div>
          <div class="col"><img src="i2.jpg"></img></div>
          <div class="w-100"></div><br></br>
          <div class="col"><img src="i2.jpg"></img></div>
          <div class="col"><img src="i2.jpg"></img></div>
        </div>
      </div><br></br><br></br>
      <div style={{width:"100%",display:"flex", justifyContent:"center", alignItems:"center"}}><button style={{borderRadius:"1.5rem", backgroundColor:"#00D186"}}>Get in touch</button></div>
      <br></br>
      <p style={{ color: "white", textAlign: "center" }}>
        Lorem ipsum dolor sit amet, consectetur adipicing elit. Donec sagittis
        lorem vitae maleasuada fermentum.
      </p>
      <Footer />
    </div>
  );
}

export default App;
