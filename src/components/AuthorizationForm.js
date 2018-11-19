import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

class AuthorizationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        const name = this.state.userName;
        const password = this.state.password;
        
        if (name !== '' && password !== '') {
            this.props.onAuthorization(name, password);
        } else {
            alert('Please fill in all the fields');
        }
        
        e.preventDefault();
    }
    
    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        
        this.setState({
            [name]: value
        });
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <Input name="userName"
                           type="text"
                           placeholder="name"
                           autoFocus
                           value={this.state.userName}
                           onChange={this.handleChange}/>
                    <Input name="password"
                           type="password"
                           placeholder="password"
                           value={this.state.password}
                           onChange={this.handleChange}/>
                    <Button variant="contained" 
							type="submit" 
							color="primary">LogIn / Registration
					</Button>
                </form>
            </div>
        )
    }
}

export default AuthorizationForm;