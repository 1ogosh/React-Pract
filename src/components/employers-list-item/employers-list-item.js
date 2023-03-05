import { Component } from 'react';
import './employers-list-item.scss';


class EmployersListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            like: false
        }
    }

    onIncrease = () => {
        this.setState(({ increase }) => ({
            increase: !increase
        }));
    }

    onLike = () => {
        this.setState(({ like }) => ({
            like: !like
        }));
    }

    render() {
        const { name, salery } = this.props;
        const { increase } = this.state;
        const { like } = this.state;

        let classNames = 'app-list-group-item';
        if (increase) {
            classNames += ' increase';
        }

        if (like) {
            classNames += ' like';
        }

        return (
            <li className={classNames}>
                <span className="app-list-group-item-label" onClick={this.onLike}>{name}</span>
                <input type="text" className="app-list-group-item-input" defaultValue={salery + '$'} />
                <div>
                    <button type="button"
                        className="btn-like"
                        onClick={this.onLike}>
                    </button>

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