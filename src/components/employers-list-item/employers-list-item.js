import './employers-list-item.scss';

const EmployersListItem = () => {
    return (
        <div className='app-list-group-item'>

            <span className="app-list-group-item-label">John Smith</span>
            <input type="text" className="app-list-group-item-input" defaultValue="1000$" />
            <div className>
                <button type="button" className="btn-cookie"></button>

                <button type="button" className="btn-trash"></button>

            </div>

        </div>

    )
}

export default EmployersListItem;