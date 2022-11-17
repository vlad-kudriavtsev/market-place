import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect } from "react";



const App = () => {
  const navigatge = useNavigate();

  useEffect(() => {
    navigatge('home')
  }, [])

  return (
    <>
      <Header />
      <div className="container">
        <Outlet />  
      </div>
      <Footer />
    </>
  );
}

export default App;
