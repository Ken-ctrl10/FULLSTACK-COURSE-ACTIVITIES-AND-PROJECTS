import { Fragment, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import AboutPage from "./components/AboutPage";
import ProjectPage from "./components/ProjectPage";
import ContactPage from "./components/ContactPage";

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