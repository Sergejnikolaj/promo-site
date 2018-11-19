import React from 'react';
import Button from '@material-ui/core/Button';

function LogOutForm(props) {
    return (
        <div>
            <p>
                <span>{props.userName}</span>
            </p>
            <Button variant="contained" type="submit" color="secondary"
                    onClick={props.logout}>LogOut
            </Button>
        </div>
    )
}

export default LogOutForm;