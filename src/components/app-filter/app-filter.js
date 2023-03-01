import './app-filter.scss';


const AppFilter = () => {
        return (
                <div className="btn-group">
                        <button className='btn-group-filter_first'>Все сотрудники</button>

                        <button className='btn-group-filter'>На повышение</button>

                        <button className='btn-group-filter_last'>з/п больше 1000$</button>

                </div>
        );
}

export default AppFilter;