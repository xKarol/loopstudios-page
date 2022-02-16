import GlobalStyles from "./components/styles/global-styles";
import Theme from "./components/styles/theme";
import Hero from "./components/hero";
import Header from "./components/header";
import Layout from "./components/layout";
import Interactive from "./components/interactive";

function App() {
  return (
    <Theme>
      <GlobalStyles />
      <Hero />
      <Header />
      <Layout>
        <Interactive />
      </Layout>
      {/* Our creations See all Deep earth Night arcade Soccer team VR The grid From up
      above VR Pocket borealis The curiosity Make it fisheye About Careers
      Events Products Support © 2021 Loopstudios. All rights reserved. */}
    </Theme>
  );
}

export default App;
