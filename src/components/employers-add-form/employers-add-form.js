import { Component } from 'react';

import './employers-add-form.scss';

class EmployersAddForm extends Component {
        constructor(props) {
                super(props);
                this.state = {
                        name: '',
                        salary: ''
                }
        }

        onValueChange = (e) => {
                this.setState({
                        [e.target.name]: e.target.value
                })
        }

        onSubmit = (e) => {
                e.preventDefault();
                this.props.onAdd(this.state.name, this.state.salary);
                this.setState({
                        name: '',
                        salary: ''
                })
        }

        render() {

                const { name, salary } = this.state;

                return (
                        <div className="form">
                                <h3>Добавьте нового сотрудника</h3>
                                <form className="add-form"
                                        onSubmit={this.onSubmit}>
                                        <input type="text"
                                                className="add-form-input"
                                                placeholder="Как его зовут?"
                                                name="name"
                                                value={name}
                                                onChange={this.onValueChange} />
                                        <input type="text"
                                                className="add-form-input"
                                                placeholder="З/П в $"
                                                name="salary"
                                                value={salary}
                                                onChange={this.onValueChange} />
                                        <button type="submit"
                                                className="add-form-btn">Добавить</button>
                                </form>
                        </div>
                )
        }
}

export default EmployersAddForm;