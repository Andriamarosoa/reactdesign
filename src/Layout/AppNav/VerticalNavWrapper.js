import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import MetisMenu from "react-metismenu";
import { setEnableMobileMenu } from "../../reducers/ThemeOptions";
import { 
  MainNav1,
  MainNav2,
  MainNav3,
  MainNav4,
  MainNav5,
  MainNav6,
  MainNav7,
  MainNav8,
  // ComponentsNav,
  // FormsNav,
  // WidgetsNav,
  // ChartsNav,
  // bilanAnalyseNav,
  // MenuInProgress
} from "./NavItems";

class Nav extends Component {
  state = {};

  toggleMobileSidebar = () => {
    let { enableMobileMenu, setEnableMobileMenu } = this.props;
    setEnableMobileMenu(!enableMobileMenu);
  };

  render() {
    return (
      <Fragment>
        {/* <h5 className="app-sidebar__heading">Dashoboard</h5> 
        <MetisMenu content={UpgradeNav} onSelected={this.toggleMobileSidebar} activeLink FromLocation
          className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/> */}

        <h5 className="app-sidebar__heading">Groupe 1</h5>
        <MetisMenu content={MainNav1} onSelected={this.toggleMobileSidebar} activeLink FromLocation
          className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
        
        <h5 className="app-sidebar__heading">Groupe 2</h5>
        <MetisMenu content={MainNav2} onSelected={this.toggleMobileSidebar} activeLink FromLocation
          className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
        <h5 className="app-sidebar__heading">Groupe 3</h5>
        <MetisMenu content={MainNav3} onSelected={this.toggleMobileSidebar} activeLink FromLocation
          className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
        <h5 className="app-sidebar__heading">Groupe 4</h5>
        <MetisMenu content={MainNav4} onSelected={this.toggleMobileSidebar} activeLink FromLocation
          className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
        <h5 className="app-sidebar__heading">Groupe 5</h5>
        <MetisMenu content={MainNav5} onSelected={this.toggleMobileSidebar} activeLink FromLocation
          className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
        <h5 className="app-sidebar__heading">Groupe 6</h5>
        <MetisMenu content={MainNav6} onSelected={this.toggleMobileSidebar} activeLink FromLocation
          className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
        <h5 className="app-sidebar__heading">Groupe 7</h5>
        <MetisMenu content={MainNav7} onSelected={this.toggleMobileSidebar} activeLink FromLocation
          className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
        <h5 className="app-sidebar__heading">Groupe 8</h5>
        <MetisMenu content={MainNav8} onSelected={this.toggleMobileSidebar} activeLink FromLocation
          className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
        
        {/* <h5 className="app-sidebar__heading">Estimation et devis</h5>
        <MetisMenu content={ComponentsNav} onSelected={this.toggleMobileSidebar} activeLink FromLocation
          className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/> */}

        {/* <h5 className="app-sidebar__heading">Affaires</h5>
        <MetisMenu content={WidgetsNav} onSelected={this.toggleMobileSidebar} activeLink FromLocation
          className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>

        <h5 className="app-sidebar__heading">Gestion planning</h5>
        <MetisMenu content={FormsNav} onSelected={this.toggleMobileSidebar} activeLink FromLocation
          className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>

        <h5 className="app-sidebar__heading">BILAN ET ANALYSE</h5>
        <MetisMenu content={bilanAnalyseNav} onSelected={this.toggleMobileSidebar} activeLink FromLocation
          className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
        
        <h5 className="app-sidebar__heading">COMPTES ET FINANCES</h5>
        <MetisMenu content={ChartsNav} onSelected={this.toggleMobileSidebar} activeLink FromLocation
          className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
        <h5 className="app-sidebar__heading">En Progression</h5>
        <MetisMenu content={MenuInProgress} onSelected={this.toggleMobileSidebar} activeLink FromLocation
          className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/> */}
        
      
      </Fragment>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}
const mapStateToProps = (state) => ({
  enableMobileMenu: state.ThemeOptions.enableMobileMenu,
});

const mapDispatchToProps = (dispatch) => ({
  setEnableMobileMenu: (enable) => dispatch(setEnableMobileMenu(enable)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Nav));
