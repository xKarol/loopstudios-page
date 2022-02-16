import GlobalStyles from "./components/styles/global-styles";
import Theme from "./components/styles/theme";
import Hero from "./components/hero";
import Header from "./components/header";
import Layout from "./components/layout";
import Interactive from "./components/interactive";
import Creations from "./components/creations";
import Footer from "./components/footer";

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
      <Footer />
    </Theme>
  );
}

export default App;
