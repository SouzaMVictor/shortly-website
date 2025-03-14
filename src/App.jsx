/* eslint-disable react/prop-types */
import "./App.css";
import { AllItemsContainer } from "./AllItemsContainer";
import { LeftMenu } from "./LeftMenu";
import { Logo } from "./Logo";
import { LogoMenuContainer } from "./LogoMenuContainer";
import { NavContainer } from "./NavContainer";
import { RightButtonsMenu } from "./RightButtonsMenu";
import { Hero } from "./Hero";
import { HeroText } from "./HeroText";
import { HeroImage } from "./HeroImage";
import { Shorten } from "./Shorten";

function App() {
  return (
    <>
      <NavContainer>
        <AllItemsContainer>
          <LogoMenuContainer>
            <Logo />
            <LeftMenu />
          </LogoMenuContainer>
          <RightButtonsMenu />
          {/* todo hamburger menu */}
        </AllItemsContainer>
        {/*todo mobile menu */}
      </NavContainer>
      <Hero>
        <HeroText />
        <HeroImage />
      </Hero>
      <Shorten />
    </>
  );
}
export default App;
