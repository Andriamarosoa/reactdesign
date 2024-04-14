import React, { useState } from "react";
import { connect } from "react-redux";

import { Slider } from "react-burgers";
import { useHistory } from "react-router-dom";
import AppMobileMenu from "../AppMobileMenu";

import {
  setEnableClosedSidebar,
  setEnableMobileMenu,
  setEnableMobileMenuSmall,
} from "../../reducers/ThemeOptions";

const HeaderLogo = ({
  enableClosedSidebar,
  setEnableClosedSidebar,
}) => {
  const [active, setActive] = useState(false);
  const history=useHistory()
  const toggleEnableClosedSidebar = () => {
    setEnableClosedSidebar(!enableClosedSidebar);
  };

  return (
    <>
      <div className="app-header__logo">
        <div className="logo-src" onClick={()=>history.push("/home")} />
        <div className="header__pane ms-auto">
          <div onClick={toggleEnableClosedSidebar}>
            <Slider
              width={26}
              lineHeight={2}
              lineSpacing={5}
              color="#6c757d"
              active={active}
              onClick={() => setActive(!active)}
            />
          </div>
        </div>
      </div>
      <AppMobileMenu />
    </>
  );
};

const mapStateToProps = (state) => ({
  enableClosedSidebar: state.ThemeOptions.enableClosedSidebar,
});

const mapDispatchToProps = (dispatch) => ({
  setEnableClosedSidebar: (enable) => dispatch(setEnableClosedSidebar(enable)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLogo);
