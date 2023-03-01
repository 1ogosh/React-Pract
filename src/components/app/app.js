import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.scss';

function App() {

        const data = [
                { name: "Andrew", salery: 800, increase: false },
                { name: "Valeryi", salery: 1000, increase: true },
                { name: "Alexey", salery: 1900, increase: false },
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