import Header from "./components/Header/Header";
import About from "./components/About/About";
import MenuContainer from "./components/MenuContainer/MenuContainer";
import Footer from './components/Footer/Footer'
import WhereContainer from "./components/Where/Where";

export default function Home() {
  return (
    <>
      <Header/>
      <About/>
      <MenuContainer/>
      <WhereContainer/>
      <Footer/>
    </>
  );
}
