import { useContext } from "react";
import {ThemeContext} from "./ThemeContex"

function Header() {
  
  let  {darkMode,setMode} = useContext(ThemeContext)
  
  return (
    <header className={darkMode?"head-dark":"head-ligth"}>
      <div className="header-content">
        <h1>ERROR BOUNDARY</h1>
        <p>Make sure to test error boundary in production build!</p>
        <button onClick={()=>setMode(!darkMode)}>Mode</button>
      </div>
    </header>
  );
}

export default Header;
