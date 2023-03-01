import './employers-list.scss';
import EmployersListItem from '../employers-list-item/employers-list-item';


const EmployersList = () => {
        return (
                <ul className="app-list-group">
                        <EmployersListItem />
                        <hr />
                        <EmployersListItem />
                        <hr />
                        <EmployersListItem />
                </ul>
        )
}

export default EmployersList;