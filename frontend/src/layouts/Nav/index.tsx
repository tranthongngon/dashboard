import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import routes from '../../routes/routes';
import { useTheme } from '@mui/material';
import { makeStyles } from '@mui/material';
import { css } from '@emotion/css';

export default function Nav () {
  const theme = useTheme();
  console.log(theme);
  
  return (
   <nav>
    <div className={css`
      padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
      &:hover {
        color: ${theme.palette.primary.main};
      }
    `}>aaaaa</div>
    {routes.map((route, index:number) => (
      <NavLink to={route.route} key={index}>{route.icon}{route.name}</NavLink>
    ))}
   </nav>
  )
}
