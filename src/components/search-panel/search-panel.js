import './search-panel.scss';
import AppFilter from '../app-filter/app-filter';

const searchPanel = () => {
        return (
                <div className="form-template">
                        <input type="text"
                                className="form-template-panel"
                                placeholder="Найти сотрудника" />
                        <AppFilter />
                </div>

        )
}

export default searchPanel;