import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.scss';

function App() {
        const data = [
                { name: "Andrew", salery: 800, increase: false, id: 1 },
                { name: "Valeriy", salery: 1000, increase: true, id: 2 },
                { name: "Alexey", salery: 1900, increase: false, id: 3 },
        ];

        return (
                <div className="app">
                        <AppInfo />

                        <div className="search-panel">
                                <SearchPanel />

                        </div>

                        <EmployersList data={data} />
                        <EmployersAddForm />
                </div>
        )
}

export default App;