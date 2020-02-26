import React, { Component } from "react";
import { Layout, Navigation, Drawer, Content } from "react-mdl";

function SidebarComponent() {
  return (
    <div style={{ height: "600px", position: "relative" }}>
      <Layout fixedDrawer>
        <Drawer title="Categories">
          <Navigation>
            <a href="/">
              <i class="fa fa-briefcase" aria-hidden="true"></i> Job
            </a>
            <a href="/">
              <i class="fa fa-car" aria-hidden="true"></i> Vehicle{" "}
            </a>
            <a href="/">
              <i class="fa fa-home" aria-hidden="true"></i> Residence
            </a>
            <a href="/">
              {" "}
              <i class="fa fa-couch" aria-hidden="true"></i> For the Home
            </a>
            <a href="/">
              {" "}
              <i class="fa fa-mobile" aria-hidden="true"></i> Electronics
            </a>
            <a href="/">
              {" "}
              <i class="fas fa-business-time" aria-hidden="true"></i> Business
            </a>
            <a href="/">
              {" "}
              <i class="fa fa-tshirt" aria-hidden="true"></i> Personal
            </a>
            <a href="/">
              {" "}
              <i class="fa  fa-futbol" aria-hidden="true"></i> Sparetime Hobby
            </a>
            <a href="/">
              <i class="fas fa-book-reader" aria-hidden="true"></i> Training
            </a>
            <a href="/">
              <i class="fa  fa-plane-departure" aria-hidden="true"></i> Travel
            </a>
            <a href="/">Other</a>
          </Navigation>
        </Drawer>
        <Content />
      </Layout>
    </div>
  );
}

export default SidebarComponent;
