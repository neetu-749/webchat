import { Dialog } from "@mui/material";

// object css (camelcase)
const dialogstyle = {
    height: '96%',
    marginTop: '11%',
    width: '65.5%',
    maxWidth: '100%',
    // maxHeight: '100%',
    boxShadow: 'none',
    overflow: 'hidden'
}

const LoginDialog= () => {

    return (
        <Dialog
            open={true}
            PaperProps={ {sx: dialogstyle} }
        >
            Hello
        </Dialog>
    )
}

export default LoginDialog;