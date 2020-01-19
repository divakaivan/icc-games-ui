import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Header, Icon, Image, Menu, Segment, Sidebar} from 'semantic-ui-react'
import "../stylesheets/SideBar.css";
import MenuButton from "./MenuButton";

const SideBar = () => {
    const [visible, setVisible] = useState(false);

    return (
        <React.Fragment>
            <MenuButton color="white" open={false} onClick={() => {setVisible(true)}}/>

            <Sidebar
                className="side-bar"
                as={Menu}
                icon='labeled'
                animation="overlay"
                inverted
                vertical
                visible={visible}
            >
                <Menu.Item>
                    <MenuButton color="white" open={true} onClick={() => setVisible(false)}/>
                </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='gamepad'/>
                    <Link to="/new">NEW GAME</Link>
                </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='camera'/>
                    Channels
                </Menu.Item>
            </Sidebar>
        </React.Fragment>
    )
};

export default SideBar;