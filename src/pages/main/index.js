import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
import ThemeOptions from "../../Layout/ThemeOptions/";
import AppFooter from "../../Layout/AppFooter/"; 
import "./main.css"
import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";

import Maintenance from "../../DemoPages/UserPages/maintenance";
import Login from "../../DemoPages/UserPages/Login";
import Register from "../../DemoPages/UserPages/Register";
import ClientPage from "../client";
import AddClient from "../add.client";
import PostePage from "../poste";
import BilanMensuel from "../bilan.mensuel";
import CategorieCoutPage from "../categorie.cout";
import HomePage from "../home";

export function MainPage(props){
    return   <div {...(props||{}) } >
            
            
            
                

                        <Route path="/maintenance">
                            <ThemeOptions />
                            <AppHeader />
                            <div className="app-main">            
                                <AppSidebar />
                                <div className="app-main__outer">
                                    <div className="app-main__inner"> 
                                        <Maintenance />
                                    </div>                    
                                    <AppFooter />
                                </div>
                            </div> 
                        </Route>
                        
                        <Route path="/client">
                            <ThemeOptions />
                            <AppHeader />
                            <div className="app-main">            
                            <AppSidebar />
                            <div className="app-main__outer">
                                <div className="app-main__inner"> 
                                    <ClientPage />
                                </div>                    
                                <AppFooter />
                                </div> 
                            </div>
                        </Route>
                        <Route path="/job">
                            <ThemeOptions />
                            <AppHeader />
                            <div className="app-main">            
                            <AppSidebar />
                            <div className="app-main__outer">
                                <div className="app-main__inner"> 
                                    <PostePage />
                                </div>                    
                                <AppFooter />
                                </div> 
                            </div>
                        </Route>
                        <Route path="/categories-cout">
                            <ThemeOptions />
                            <AppHeader />
                            <div className="app-main">            
                            <AppSidebar />
                            <div className="app-main__outer">
                                <div className="app-main__inner"> 
                                    <CategorieCoutPage />
                                </div>                    
                                <AppFooter />
                                </div> 
                            </div>
                        </Route>
                        
                        <Route path="/add-client">
                        <ThemeOptions />
                            <AppHeader />
                            <div className="app-main">            
                                <AppSidebar />
                                <div className="app-main__outer">
                                    <div className="app-main__inner"> 
                                        <AddClient />
                                    </div>                    
                                    <AppFooter />
                                </div> 
                            </div>
                        </Route>
                        <Route path="/home">
                            <AppHeader />
                                <div className="app-main">            
                                    <AppSidebar />
                                    <div className="app-main__outer">
                                        <div className="app-main__inner"> 
                                            <HomePage />
                                        </div>                    
                                        <AppFooter />
                                    </div>
                                </div>
                        </Route>
                        <Route path="/bilan-mensuel">
                            <AppHeader />
                                <div className="app-main">            
                                    <AppSidebar />
                                    <div className="app-main__outer">
                                        <div className="app-main__inner"> 
                                            <BilanMensuel />
                                        </div>                    
                                        <AppFooter />
                                    </div>
                                </div>
                        </Route>
                        
                        <Route path="/login">
                            <div className="app-main__outer">
                                <div className="app-main__inner"> 
                                    <Login />
                                </div>           
                            </div>
                        </Route>
                        <Route path="/register">
                            <div className="app-main__outer">
                                <div className="app-main__inner"> 
                                    <Register />
                                </div>          
                            </div>
                        </Route>
                        
   
                        <Route exact path="/" render={() => (
                            <Redirect to="/home"/>
                        )}/>
                   
    </div> 
}
export default MainPage;