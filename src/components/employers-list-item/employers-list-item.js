import './employers-list-item.scss';

const EmployersListItem = () => {
        return (
                <li >
                        <span >Vasya Vasya</span>
                        <input  dafaultValue="1000$" />
                        <div >
                                <button className='employ-btn'>
                                        <i>del</i>
                                </button>

                                <button className='employ-btn'>
                                        <i>add</i>
                                </button>
                                <i></i>
                        </div>
                </li>
        )
}

export default EmployersListItem;