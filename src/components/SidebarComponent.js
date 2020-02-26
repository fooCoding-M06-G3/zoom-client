import React, { Component } from "react";
import { Layout, Navigation, Drawer, Content } from "react-mdl";

function SidebarComponent() {
  return (
    <div className='sidebarComponent'>
      <Layout fixedDrawer>
        <Drawer title="Categories">
          <Navigation>
            <a href="/">Job</a>
            <a href="/">
              <i class="fa fa-car" aria-hidden="true"></i> Vehicle{" "}
            </a>
            <a href="/">Residence</a>
            <a href="/">For the Home</a>
            <a href="/">Electronics</a>
            <a href="/">Personal</a>
            <a href="/">Sparetime Hobby</a>
            <a href="/">Training</a>
            <a href="/">Other</a>
          </Navigation>
        </Drawer>
        <Content />
      </Layout>
    </div>
  );
}

export default SidebarComponent;