import React from "react"; 
import Header from "./components/header/header";
import NavDropdown from "./components/nav-dropdown/nav-dropdown";
import HomePageTabs from "./components/home-page-tabs/home-page-tabs";
import HomePagePanel from "./components/home-page-help-banner/home-page-help-banner";
import HomePageComic from "./components/home-page-comic/home-page-comic";
import HomePageHelpBanner from "./components/home-page-help-banner/home-page-help-banner";
import NewsPanel from "./components/news-panel/news-panel";
import Divider from "./components/divider/divider";
import FreeTrialPanel from "./components/free-trial-panel/free-trial-panel";
import AboutUs from "./components/about-us/about-us";
import Footer from "./components/footer/footer";
export default function Home() {
    const navProps = {
        navLinks: [
            { navTitle: "Home", links: [{title:"title1",link:'link1'},{title:"title2",link:'link2'},{title:"title3",link:'link3'},{title:"title4",link:'link4'}]},
            { navTitle: "About", links: [{title:"title1123123",link:'link1123123'},{title:"title2dasdasd",link:'link2'},{title:"title3",link:'link3'},{title:"title4",link:'link4'}] },
            { navTitle: "Services", links: [{title:"title1",link:'link1'},{title:"title2",link:'link2'},{title:"title3",link:'link3'},{title:"title4",link:'link4'}] },
            { navTitle: "Contact", links: [{title:"title1",link:'link1'},{title:"title2",link:'link2'},{title:"title3",link:'link3'},{title:"title4",link:'link4'}] },
        ]
  }
  return (
    <div>
        <Header></Header>
        <NavDropdown navLinksProps={navProps.navLinks}></NavDropdown>
        <HomePageTabs></HomePageTabs> 
        <HomePagePanel></HomePagePanel>
        <HomePageComic></HomePageComic>
        <HomePageHelpBanner></HomePageHelpBanner>
        <NewsPanel></NewsPanel>
        <Divider></Divider>
        <FreeTrialPanel></FreeTrialPanel>
        <AboutUs></AboutUs>
        <Footer></Footer>
    </div>  
  );
}
