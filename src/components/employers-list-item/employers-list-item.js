

const EmployersListItem = () => {
        return (
                <li className="list-group-item d-flex justuify-content-between">
                        <span className="list-group-item-label">Vasya Vasya</span>
                        <input type="text" className="list-group-item-input"
                                dafaultValue="1000$" />
                        <div className="d-flex justify-content-center align-items-center">
                                <button type="button"
                                        className="btn-cookie btn-sm">
                                        <i className="fas fa-cookie"></i>
                                </button>

                                <button type="button"
                                        className="btn-cookie btn-sm">
                                        <i className="fas fa-cookie"></i>
                                </button>
                                <i className="fas fa-star"></i>
                        </div>
                </li>
        )
}

export default EmployersListItem;