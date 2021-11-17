import { NetworkBar, Overlay } from "@govtechsg/tradetrust-ui-components";
import React, { useEffect, useState } from "react";
import { Footer } from "./components/Layout/Footer";
import { NavigationBar, leftNavItems, rightNavItems } from "./components/Layout/NavigationBar";
import { NETWORK } from "./config";
import { Routes, routes } from "./routes";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Main = styled.main`
  background-image: url("/static/images/common/wave-lines.png");
  background-size: cover;
`;

const AppContainer = (): React.ReactElement => {
  const router = useRouter();
  const [toggleNavBar, setToggleNavBar] = useState(false);

  useEffect(() => {
    setToggleNavBar(false);
    window.scrollTo(0, 0);
  }, [router]);

  return (
    <div className="flex flex-col min-h-full" data-location={router.pathname}>
      <NetworkBar network={NETWORK}>
        You are currently on <span className="capitalize">{NETWORK}</span> network.
      </NetworkBar>
      <NavigationBar
        toggleNavBar={toggleNavBar}
        setToggleNavBar={setToggleNavBar}
        leftItems={leftNavItems}
        rightItems={rightNavItems}
      />
      <Main className="bg-cerulean-50 flex-1">
        <Routes routes={routes} />
      </Main>
      <Footer />
      <Overlay />
    </div>
  );
};

export default AppContainer;
