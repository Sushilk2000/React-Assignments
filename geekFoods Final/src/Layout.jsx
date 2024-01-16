import { useLocation, Outlet } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
function Layout() {
  const location = useLocation();
  return (
    <>
      <Header></Header>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={300}
          classNames="animate-fade animate-once"
        >
          <Outlet />
        </CSSTransition>
      </TransitionGroup>
      <Footer></Footer>
    </>
  );
}

export default Layout;
