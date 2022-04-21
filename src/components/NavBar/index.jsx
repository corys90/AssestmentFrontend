import { React } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const NavBar = (props) => {
  const aLink = [
    {
      id: 0,
      name: "Home",
      route: "/homepage",
    },
    {
      id: 1,
      name: "About",
      route: "/aboutpage",
    },
  ];
  /*     
  <div className="divBar">
      <div></div>
      <div className="opciones">
        <p>Home</p>
      </div>
      <div className="opciones"></div>
      <div className="opciones">
        <p>About</p>
      </div>
      <div></div>
    </div>
 */
  return (
    <nav>
      <div className="divBarNB">
        <figure>
          <img
            src="https://th.bing.com/th/id/OIP.NtQhPq1wp6Zi6NZfys_aFgHaHa?pid=ImgDet&rs=1"
            alt="logo"
            width="80px"
            height="70px"
          />
        </figure>
        <div className="divBarNB__opciones">
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                textDecoration: "none",
                color: isActive ? "Whitesmoke" : "yellow",
              };
            }}
            to={aLink[0].route}>
            {aLink[0].name}
          </NavLink>
        </div>
        <div className="divBarNB__opciones">
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                textDecoration: "none",
                color: isActive ? "Whitesmoke" : "yellow",
              };
            }}
            to={aLink[1].route}>
            {aLink[1].name}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
