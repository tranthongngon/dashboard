import React from "react";
import { Link, NavLink } from "react-router-dom";
import routes from "../../routes/routes";
import { useTheme } from "@mui/material";
import { css } from "@emotion/css";
import Logo from "../../assets/images/logo.png";

export default function Nav() {
  const theme = useTheme();
  console.log(theme);
  const headerCss = css`
      position: fixed;
      top: 15px;
      bottom: 15px;
      left: 15px;
      display: flex;
      width: 250px;
      padding: 15px;
      border-radius: 15px;
      -webkit-border-radius: 15px;
      -moz-border-radius: 15px;
      -ms-border-radius: 15px;
      -o-border-radius: 15px;
      background-color: ${theme.palette.primary.dark};
      overflow: auto;
      .header-wrap {
        display: flex;
        flex-direction: column;
        flex: 1;
        .header-logo {
          max-width: 200px;
          img {
            max-width: 200px;
            height: auto;
          }
        }
        .header-nav {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
      }
  `;
  return (
    <header className={`site-header ${headerCss}`}>
      <div className="header-wrap">
        <div className="header-logo">
          <Link to="/">
            {" "}
            <img src={Logo} alt="dashboard" />
          </Link>
        </div>
        <nav className="header-nav">
          {routes.map((route, index: number) => (
            <NavLink to={route.route} key={index}>
              {route.icon}
              {route.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
