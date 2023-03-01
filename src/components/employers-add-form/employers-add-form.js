import './employers-add-form.scss';

const EmployersAddForm = () => {
        return (
                <div className="form">
                        <h3>Добавьте нового сотрудника</h3>
                        <form className="add-form">
                                <input type="text" className="add-form-input" placeholder="Как его зовут?" />
                                <input type="number" className="add-form-input" placeholder="З/П в $" />
                                <button type="submit" className="add-form-btn">Добавить</button>
                        </form>
                </div>
        )
}

export default EmployersAddForm;