import React, { Component } from 'react';
import { Layout, Navigation, Header, Textfield } from 'react-mdl';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div style={{ height: '50px', position: 'relative' }}>
      <Layout fixedHeader>
        <Header
          title={
            <span style={{ color: '#ddd' }}>
              <strong>Zoom</strong>
            </span>
          }
        >
          <Navigation>
            <Textfield
              value="What're you looking for?"
              onChange={() => {}}
              label="Search"
              expandable
              expandableIcon="search"
            />
            <Textfield
              value="Which city?"
              onChange={() => {}}
              label="Search"
              expandable
              expandableIcon="search"
            />
            <NavLink to="/signin">Sign in</NavLink>
            <NavLink to="/signup">Sign up</NavLink>
            <NavLink to="/"></NavLink>
          </Navigation>
        </Header>
      </Layout>
    </div>
  );
}
export default Navbar;
