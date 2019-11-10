import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import BadgeNew from "../pages/BadgeNew";
import Badges from '../pages/Badges';
import Layout from "./Layout";
import NotFound from "../pages/NotFound";

const App = () => {
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path={"/badges"} component={Badges} />
                        <Route exact path={"/badges/new"} component={BadgeNew} />
                        <Route component={NotFound} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        )
};

export default App;