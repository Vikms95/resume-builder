import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import ResumeContext from "./context";
import { getEmptyResume } from "./services/resume";
import { GlobalStyle, Theme } from "./theme/";
import { ResumeType } from "./types";
import { emptyResume } from "./utils";

function App() {
  const [resume, setResume] = useState<ResumeType>(emptyResume);

  useEffect(() => {
    getEmptyResume().then((data) => setResume(data));
  }, [resume]);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <ResumeContext.Provider value={{ resume, setResume }}>
        <Header />
        {!resume && <h1>Loading...</h1>}
        {resume && <Main />}
        <Footer />
      </ResumeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
