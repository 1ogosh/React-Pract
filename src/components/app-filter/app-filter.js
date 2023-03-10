import './app-filter.scss';


const AppFilter = (props) => {
        const buttonsData = [
                { name: 'all', label: 'Все сотрудники' },
                { name: 'rise', label: 'На повышение' },
                { name: 'moreThen1000', label: 'з/п больше 1000$' }
        ];

        const buttons = buttonsData.map(({ name, label }) => {
                const active = props.filter === name;
                const clazz = active ? 'btn-group-filter-active' : 'btn-group-filter';
                return (
                        <button type='button'
                                className={`btn ${clazz}`}
                                key={name}
                                onClick={() => props.onFilterSelect(name)}>
                                {label}
                        </button>
                )
        })

        return (
                <div className="btn-group">
                        {buttons}
                </div>
        );
}

export default AppFilter;