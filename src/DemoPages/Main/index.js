import React, { useState } from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { withRouter } from "react-router-dom";

import ResizeDetector from "react-resize-detector";

import AppMain from "../../Layout/AppMain";
import MainPage from "../../pages/main";

const Main = ({
  colorScheme,
  enableFixedHeader,
  enableFixedSidebar,
  enableFixedFooter,
  enableClosedSidebar,
  closedSmallerSidebar,
  enableMobileMenu,
  enablePageTabsAlt,
}) => {
  const [width, setWidth] = useState(0);

  return (
    <ResizeDetector
      handleWidth
      onResize={(newWidth) => setWidth(newWidth)}
    >
      {() => (
        <>
          <div
            className={cx(
              "h100",
              "app-container app-theme-" + colorScheme,
              { "fixed-header": enableFixedHeader },
              { "fixed-sidebar": enableFixedSidebar || width < 1250 },
              { "fixed-footer": enableFixedFooter },
              { "closed-sidebar": enableClosedSidebar || width < 1250 },
              { "closed-sidebar-mobile": closedSmallerSidebar || width < 1250 },
              { "sidebar-mobile-open": enableMobileMenu },
              { "body-tabs-shadow-btn": enablePageTabsAlt }
            )}
          >
            <div className={"h100"}>
              <MainPage className={"h100"} />
            </div>
          </div>
        </>
      )}
    </ResizeDetector>
  );
};

const mapStateToProps = (state) => ({
  colorScheme: state.ThemeOptions.colorScheme,
  enableFixedHeader: state.ThemeOptions.enableFixedHeader,
  enableMobileMenu: state.ThemeOptions.enableMobileMenu,
  enableFixedFooter: state.ThemeOptions.enableFixedFooter,
  enableFixedSidebar: state.ThemeOptions.enableFixedSidebar,
  enableClosedSidebar: state.ThemeOptions.enableClosedSidebar,
  enablePageTabsAlt: state.ThemeOptions.enablePageTabsAlt,
});

export default withRouter(connect(mapStateToProps)(Main));

