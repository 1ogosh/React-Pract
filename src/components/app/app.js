import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';

import EmployersList from '../employers-list/employers-list';

import './app.scss';

function App() {
        return (
                <div className="app">
                        <AppInfo />

                        <div className="search-panel">
                                <SearchPanel />
                                
                        </div>

                        <EmployersList />
                </div>
        )
}

export default App;