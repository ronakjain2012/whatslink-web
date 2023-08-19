import { Routes, Route } from "react-router-dom";
import {
  HomeIcon,
  CubeTransparentIcon,
  AtSymbolIcon,
  ChatBubbleBottomCenterIcon
} from "@heroicons/react/24/solid";
import { Navbar, Footer } from "@/widgets/layout";
import routes from "@/routes";

export function Main() {
  const navbarRoutes = [
    {
      name: "home",
      path: "/",
      icon: HomeIcon,
    },
    {
      name: "tools",
      path: "/tools",
      icon: CubeTransparentIcon,
    },
    {
      name: "about",
      path: "/about",
      icon: AtSymbolIcon,
    },
    {
      name: "contact",
      path: "/contact",
      icon: ChatBubbleBottomCenterIcon,
    },
  ];

  return (
    <div className="relative min-h-screen w-full">
      <div className="container relative z-40 mx-auto p-4">
        <Navbar routes={navbarRoutes} />
      </div>
      <Routes>
        {routes.map(
          ({ layout, pages }) =>
            pages.map(({ path, element }) => (
              <Route exact path={path} element={element} />
            ))
        )}
      </Routes>
      <div className="container absolute bottom-8 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
        <Footer />
      </div>
    </div>
  );
}

Main.displayName = "/src/layout/main.jsx";

export default Main;
