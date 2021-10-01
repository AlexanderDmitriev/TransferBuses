import React from 'react';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import MenuIcon from '@material-ui/icons/Menu';

import { MAIN_ROUTE } from '../../utils/constants';
import { Sidebar, LanguageSelector } from '..';
import CurrenciesSelector from '../CurrenciesSelector/CurrenciesSelector';
import { useStyles } from '../../utils/useStyles';
import css from './Navbar.module.css';
import { setSidebarAction } from '../../redux/actions/app-actions';
// import {useTranslation} from "react-i18next";

// const Navbar = ({ changeLanguage }) => {
const Navbar = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      {/*<Container maxWidth="lg" fixed >*/}
      {/*<Container maxWidth={'false !important'}>*/}
      {/*<Container className={classes.toolbarContainer}>*/}
      {/*<Container style={{maxWidth: '100% !important', width: '100% !important'}}>*/}
        <Toolbar className={classes.toolbar}>
          <a className={css.logo} href={MAIN_ROUTE}>TransferBuses</a>
          <nav className={`${classes.nav} ${css.option_block}`}>
            <LanguageSelector />
            <CurrenciesSelector />
            <IconButton
              onClick={() => dispatch(setSidebarAction(true))}
              edge="end"
              color="inherit"
              aria-label="menu"
              className={classes.menuButton}>
              <MenuIcon />
            </IconButton>
          </nav>
        </Toolbar>
      <Sidebar />
    </AppBar>
  );
};

export default Navbar;
