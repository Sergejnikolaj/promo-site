import React, {Component} from 'react';

const liStyle = {
	display: 'inline',
	padding: '0 5px'
};

class Pagination extends Component {
    render() {
        const adsAmount = this.props.length;
        const adsOnPage = 5;
        const links = [];
        const defRangeFrom = 0;
        const defRangeTo = adsOnPage;
        let pagesAmount = 0;
        
        if (adsAmount % adsOnPage === 0) {
            pagesAmount = adsAmount / adsOnPage;
        } else {
            pagesAmount = (adsAmount - (adsAmount % adsOnPage)) / adsOnPage + 1;
        }
        for (let i = 0; i < pagesAmount; i++) {
            const range = [defRangeFrom + (i * adsOnPage), defRangeTo + (i * adsOnPage)];
            
            links.push(<PaginationLink value={i + 1}
                                       range={range}
                                       key={i}
                                       onClick={this.props.onClick}/>)
        }
        return (
            <nav>
                <ul style={{padding: 0}}>
                    {links}
                </ul>
            </nav>
        )
    }
}

class PaginationLink extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.props.onClick(this.props.range);
        e.preventDefault();
    }
    render() {
        return <li style={liStyle}><a onClick={this.handleClick} href="#">{this.props.value}</a></li>
    }
}

export default Pagination;