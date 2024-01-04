import {AppBar, Toolbar, styled, Box} from '@mui/material';

import LoginDialog from "./accounts/LoginDialog";

const Header = styled(AppBar)`
    height: 220px;
    background-color: #1EBEA5;
    box-shadow: none;
`
const Component = styled(Box)`
    height: 160vh;
    background-color: #DCDCDC;
`
const Messenger = () => {


    return (
        <Component>
            <Header>
                <Toolbar>

                </Toolbar>
            </Header>
            <LoginDialog />
        </Component>
    )
}

export default Messenger;