import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Delete from './DeletePromo';

const adStyle = {
	boxShadow: '0 20px 40px 0 rgba(0,0,0,.3)',
	padding: '5px'
};
 const editLinkStyle = {
	padding: '20px 0px',
	display: 'block',
	color: 'green'
};

class Ad extends Component {
    render() {
        const id = this.props.id;
        return (
            <div style={adStyle}>
                {this.props.withLink ?
                    <Link to={id}>
                        <h3>{this.props.title}</h3>
                    </Link> :
                    <h3>{this.props.title}</h3>}
                <span>{this.props.author} </span>
                <span>({this.props.created_at})</span>
                <p>{this.props.description}</p>
					{
						localStorage.authorizedUser === this.props.author ?
							<div>
								<Delete id={id}/>
								<Link to={'/edit/' + id} style={editLinkStyle}>Edit</Link>
							</div> : null
					}
            </div>
        )
    }
}

export default Ad;