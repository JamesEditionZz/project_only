"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Components/dashboard/page";
import Profile from "./Components/profile/page";
import Settings from "./Components/setting/page";
import Help from "./Components/help/page";

function page() {
  const [pageComponent, setPageComponent] = React.useState(1);

  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-1 bg-body-secondary border-2 border-end"
          style={{ height: "100vh" }}
        >
          <div className="row">
            <div className="col-12 text-center h5 mt-2">JamesEdition</div>
            <div className="border-1 border-bottom"></div>
            <div
              className="col-12 px-3 pt-2 pb-2 menu-cursor border-1 border-bottom"
              onClick={() => setPageComponent(0)}
            >
              Dashboard
              {pageComponent === 0 && <span>{" < "}</span>}
            </div>
            <div
              className="col-12 px-3 pt-2 pb-2 menu-cursor border-1 border-bottom"
              onClick={() => setPageComponent(1)}
            >
              Profile
              {pageComponent === 1 && <span>{" < "}</span>}
            </div>
            <div
              className="col-12 px-3 pt-2 pb-2 menu-cursor border-1 border-bottom"
              onClick={() => setPageComponent(2)}
            >
              Settings
              {pageComponent === 2 && <span>{" < "}</span>}
            </div>
            <div
              className="col-12 px-3 pt-2 pb-2 menu-cursor border-1 border-bottom"
              onClick={() => setPageComponent(3)}
            >
              Help
              {pageComponent === 3 && <span>{" < "}</span>}
            </div>
          </div>
        </div>
        <div className="col-11">
          {pageComponent === 0 && <Dashboard />}
          {pageComponent === 1 && <Profile />}
          {pageComponent === 2 && <Settings />}
          {pageComponent === 3 && <Help />}
        </div>
      </div>
      <div className="horizontal"></div>
    </div>
  );
}

export default page;
