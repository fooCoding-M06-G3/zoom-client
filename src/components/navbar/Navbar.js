import React, { Component } from 'react';
import { Layout, Navigation, Drawer, Content, Header, Textfield } from 'react-mdl';

function Navbar() {
  return (
    <div style={{ height: '10vh', position: 'relative' }}>
      <Layout fixedHeader>
        <Header
          title={
            <span>
              <strong>Zoom</strong>
            </span>
          } >
          <Textfield
            value="What're you looking for?"
            onChange={() => { }}
            label="Search"
            expandable
            expandableIcon="search"
          />
          <Navigation>
            <a href="#">Sign In</a>
            <a href="#">Start Selling</a>
          </Navigation>
        </Header>
      </Layout>
    </div>
  );
}
export default Navbar;
