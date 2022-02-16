import GlobalStyles from "./components/styles/global-styles";
import Theme from "./components/styles/theme";
import Hero from "./components/hero";
import Header from "./components/header";
import Layout from "./components/layout";
import Interactive from "./components/interactive";
import Creations from "./components/creations";

function App() {
  return (
    <Theme>
      <GlobalStyles />
      <Hero />
      <Header />
      <Layout>
        <Interactive />
        <Creations />
      </Layout>
      {/*  About Careers
      Events Products Support © 2021 Loopstudios. All rights reserved. */}
    </Theme>
  );
}

export default App;
