import React from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';

function EditForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <div>
                <Input name="title"
                       type="text"
                       autoFocus
                       placeholder="title"
                       value={props.title}
                       onChange={props.onInput}/>
                <TextField name="description"
                          placeholder="description"
                          value={props.description}
                          onChange={props.onInput}/>
                <Button type="submit"
						variant="contained">
						{props.btnValue}
				</Button>
            </div>
        </form>)
}

export default EditForm;