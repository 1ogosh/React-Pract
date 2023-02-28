import './app-filter.scss';


const AppFilter = () => {
        return (
                <div className="btn-group">
                        <button className='btn-group-filter'>Все сотрудники</button>

                        <button className='btn-group-filter'>Сотрудники на повышение</button>

                        <button className='btn-group-filter'>з/п больше 1000$</button>

                </div>
        );
}

export default AppFilter;