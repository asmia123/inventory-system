import { Fragment } from 'react';

// import MainNavigation from './mainNavigation';
import MainNavigation from "./nav&side"

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
