import './search-panel.scss';
import AppFilter from '../app-filter/app-filter';
import { Component } from 'react';

class searchPanel extends Component {
        constructor(props) {
                super(props);
                this.state = {
                        term: ''
                }
        }

        onUpdateSearch = (e) => {
                const term = e.target.value;
                this.setState({ term });
                this.props.onUpdateSearch(term)
        }

        render() {
                return (
                        <div className="form-template">
                                <input type="text"
                                        className="form-template-panel"
                                        placeholder="Найти сотрудника"
                                        value={this.state.term}
                                        onChange={this.onUpdateSearch} />

                                <AppFilter />
                        </div>

                )
        }
}

export default searchPanel;