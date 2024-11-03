import ParentKonstuct from "../components/parentKonstuct/ParentKonstuct";
import Header from "../layouts/header/Header";
import Story from "../components/story/Story";
import Capabilities from "../components/capabilities/Capabilities";
import Build from "../components/build/Build";
import SignUp from "../components/signup/SignUp";
import Footer from "../layouts/footer/Footer";
import LastSect from "../components/lastSect/LastSect";
export default function HomePage() {
  return (
    <>
      <ParentKonstuct />
      <Header />
      <Story />
      <Capabilities/>
      <Build />
      <SignUp />
      <Footer/>
      <LastSect />
    </>
  );
}
