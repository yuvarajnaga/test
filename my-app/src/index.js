import React, { Component } from "react";

import { render } from "react-dom";
import './index.css';
//npm install bootstrap --save

import "bootstrap/dist/css/bootstrap.css";

//npm install --save react-router-dom
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";

import { Categorylist } from './Component/Categorylist';

const App = () => (
    <div>
        <div className="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
            <div className="logo">
                <a href="http://www.creative-tim.com" class="simple-text logo-normal">
                    Creative Tim
                </a>
            </div>
            <div className="sidebar-wrapper">
                <ul className="nav">
                    <li className="nav-item active ">
                        <a className="nav-link" href="../examples/dashboard.html">
                            <i className="material-icons">dashboard</i>
                            <p>Dashboard</p>
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link" href="../examples/user.html">
                            <i className="material-icons">person</i>
                            <p>User Profile</p>
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link" href="../examples/table.html">
                            <i className="material-icons">content_paste</i>
                            <p>Table List</p>
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link" href="../examples/typography.html">
                            <i className="material-icons">library_books</i>
                            <p>Typography</p>
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link" href="../examples/icons.html">
                            <i className="material-icons">bubble_chart</i>
                            <p>Icons</p>
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link" href="../examples/maps.html">
                            <i className="material-icons">location_ons</i>
                            <p>Maps</p>
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link" href="../examples/notifications.html">
                            <i className="material-icons">notifications</i>
                            <p>Notifications</p>
                        </a>
                    </li>

                </ul>
            </div>
        </div>

    </div>


)
render(<App />, root)
