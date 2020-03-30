import React from "react";

// Importing custom-made components
import Footer from "./components/footer";
import NavBar from "./components/navbar";

// Pages
import AboutPage from "./pages/about-page";
import MainPage from "./pages/main-page";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbar: { items: [{ href: "#about", name: "About" }, { title: "Projects", href: ["#art", "#code"], name: ["Art", "Code"]}] }
    };
  }
  render() {
    return (
      <div className="container-grid portfolio-grid-template text-align-left shadowed">

        <div className="portfolio-navigation aligner">
          <NavBar className="portfolio-navigation" items={this.state.navbar.items} />
        </div>


        <div
          className="portfolio-content text-align-center m0"
          style={{ backgroundColor: "white" }}
        >
          <MainPage className="container-flex vertical-flex align-items-center m3"/>
          <AboutPage id="about" />

        </div>

        <div className="portfolio-footer" style={{ backgroundColor: "cyan" }}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
