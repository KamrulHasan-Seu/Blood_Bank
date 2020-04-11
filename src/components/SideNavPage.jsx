import React from 'react';
import SideNav, {  NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
import { Route } from 'react-router-dom';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faUser } from '@fortawesome/free-solid-svg-icons'

function SideNavPage(props) {
  return (
    <Route render={({ location, history }) => (
            <SideNav
                onSelect={(selected) => {
                    const to = '/' + selected;
                    if (location.pathname !== to) {
                        history.push(to);
                    }
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            {/* <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /> */}
                            <i style={{ fontSize: '1.75em' }} ><FontAwesomeIcon icon={faHome}/></i>
                        </NavIcon>
                        <NavText>
                            Home
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="user">
                        <NavIcon>
                        <i style={{ fontSize: '1.75em' }} ><FontAwesomeIcon icon={faUser}/></i>
                        </NavIcon>
                        <NavText>
                            User
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
    )}
    /> 
  )
}

export default SideNavPage
