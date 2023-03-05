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
                                { name: "Andrew", salary: 800, increase: false, rise: false, id: 1 },
                                { name: "Valeriy", salary: 1000, increase: true, rise: false, id: 2 },
                                { name: "Alexey", salary: 1900, increase: false, rise: false, id: 3 },
                        ]
                }
                this.maxId = 4;
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

        addItem = (name, salary) => {
                const newItem = {
                        name,
                        salary,
                        rise: false,
                        increase: false,
                        id: this.maxId++
                }
                this.setState(({ data }) => {
                        const newArr = [...data, newItem];
                        return {
                                data: newArr
                        }
                });
        }

        onToggleProp = (id, prop) => {
                this.setState(({ data }) => ({
                        data: data.map(item => {
                                if (item.id === id) {
                                        return { ...item, [prop]: !item[prop] }
                                }
                                return item;
                        })
                }))
        }



        render() {
                const employers = this.state.data.length;
                const increased = this.state.data.filter(item => item.increase).length;
                return (
                        <div className="app">
                                <AppInfo employers={employers} increased={increased} />

                                <div className="search-panel">
                                        <SearchPanel />

                                </div>

                                <EmployersList
                                        data={this.state.data}
                                        onDelete={this.deleteItem}
                                        onToggleProp={this.onToggleProp} />
                                <EmployersAddForm onAdd={this.addItem} />
                        </div>
                )
        }
}

export default App;