import Location from "./Location";
import { useContext } from "react";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import {ThemeContext} from  "./ThemeContex"

function Main() {
  let {darkMode} = useContext(ThemeContext)
  return (
    <section className={darkMode?"dark":"light"} id="section-one">
      <div className="grid">
        <SectionOne />
        <SectionTwo />
        <Location />
      </div>
    </section>
  );
}

export default Main;
