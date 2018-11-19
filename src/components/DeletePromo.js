import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Button from '@material-ui/core/Button';

class Delete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDeleted: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        const id = this.props.id;
        let ads = JSON.parse(localStorage.getItem('ads'));
        ads.forEach((e, i) => (e.id === id ? ads.splice(i, 1) : null));
        localStorage.setItem('ads', JSON.stringify(ads));
        this.setState({isDeleted: true});
    }
    
    render() {
        const isDeleted = this.state.isDeleted;
        return (
            <div>
                {isDeleted ? <Redirect to="/"/> :
                    <Button onClick={this.handleClick}
							variant="contained" 
							color="primary">Delete
					</Button>}
            </div>
        )
    }
}

export default Delete;