import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.scss';

class App extends Component {
        constructor(props) {
                super(props);
                this.state = {
                        data: [
                                { name: "Andrew", salery: 800, increase: false, id: 1 },
                                { name: "Valeriy", salery: 1000, increase: true, id: 2 },
                                { name: "Alexey", salery: 1900, increase: false, id: 3 },
                        ]
                }
        }

        deleteItem = (id) => {
                this.setState(({ data }) => {
                        // const index = data.findIndex(elem => elem.id === id);
                        // const before = data.slice(0, index);
                        // const after = data.slice(index + 1);
                        // const newArr = [...before, ...after];
                        return {
                                data: data.filter(item => item.id !== id) //Аналогично верхним четырем строчкам
                        }
                })
        }

        render() {
                return (
                        <div className="app">
                                <AppInfo />

                                <div className="search-panel">
                                        <SearchPanel />

                                </div>

                                <EmployersList
                                        data={this.state.data}
                                        onDelete={this.deleteItem} />
                                <EmployersAddForm />
                        </div>
                )
        }
}

export default App;