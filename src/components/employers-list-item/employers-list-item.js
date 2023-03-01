import './employers-list-item.scss';

const EmployersListItem = ({name, salery, increase}) => {
    
    let classNames = 'app-list-group-item';
    if (increase) {
        classNames += ' -increase';
    }
    
    return (
        <li className={classNames}>

            <span className="app-list-group-item-label">{name}</span>
            <input type="text" className="app-list-group-item-input" defaultValue={salery + '$'}/>
            <div className>
                <button type="button" className="btn-cookie"></button>

                <button type="button" className="btn-trash"></button>

            </div>

        </li>

    )
}

export default EmployersListItem;