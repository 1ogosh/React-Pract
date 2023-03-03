import { Component } from 'react';
import './employers-list-item.scss';


class EmployersListItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            increase: false
        }
    }
    
    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }));
    }
    
  render() {
    const {name, salery} = this.props;
    const {increase} = this.state;
    
    let classNames = 'app-list-group-item';
    if (increase) {
        classNames += ' increase';
    }

    return (
        <li className={classNames}>
            <span className="app-list-group-item-label">{name}</span>
            <input type="text" className="app-list-group-item-input" defaultValue={salery + '$'} />
            <div>
                <button type="button" 
                        className="btn-cookie" 
                        onClick={this.onIncrease}>            
                </button>

                <button type="button" 
                        className="btn-trash">
                </button>

            </div>

        </li>

    )
  }
}

export default EmployersListItem;