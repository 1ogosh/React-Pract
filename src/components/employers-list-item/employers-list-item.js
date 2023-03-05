import './employers-list-item.scss';


const EmployersListItem = (props) => {


    const { name, salary, onDelete, onToggleProp, increase, rise } = props;

    let classNames = 'app-list-group-item';
    if (increase) {
        classNames += ' increase';
    }

    if (rise) {
        classNames += ' rise';
    }

    return (
        <li className={classNames}>
            <span className="app-list-group-item-label" onClick={onToggleProp} data-toggle="rise">{name}</span>
            <input type="text" className="app-list-group-item-input" defaultValue={salary + '$'} />
            <div>
                <button type="button"
                    className="btn-cookie"
                    onClick={onToggleProp}
                    data-toggle="increase">
                </button>

                <button type="button"
                    className="btn-trash"
                    onClick={onDelete}>
                </button>

            </div>

        </li>

    )
}


export default EmployersListItem;