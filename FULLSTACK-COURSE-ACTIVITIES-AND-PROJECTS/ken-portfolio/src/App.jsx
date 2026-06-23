import { Fragment, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./components/Main-Page";
import AboutPage from "./components/About-Page";
import ProjectPage from "./components/Project-Page";
import ContactPage from "./components/Contact-Page";

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <Fragment>
      <div className={isDark ? "app-shell dark-mode" : "app-shell"}>
        <Header isDark={isDark} toggleTheme={toggleTheme} />
        
        <main>
          <MainPage />
          <AboutPage />
          <ProjectPage />
          <ContactPage />
        </main>
        
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;