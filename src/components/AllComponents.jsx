import React from 'react';
import SideNavPage from './SideNavPage';
import UserDetails from './UserDetails';
import { Switch, Route } from 'react-router-dom';
import HomeComponets from './HomeComponets';

function AllComponents(props) {
    return (
        <div>
            <SideNavPage />
            <Switch>
                <Route path="/home" component={HomeComponets} />
                <Route path="/user" component={UserDetails} />
            </Switch>
        </div>
    )
}

export default AllComponents
