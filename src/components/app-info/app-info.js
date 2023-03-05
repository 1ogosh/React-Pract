import './app-info.scss'

const AppInfo = ({increased, employers}) => {
        return (
                <div className="app-info">
                        <h1>Учет сотрудников в компании</h1>
                        <h2>Общее число сотрудников {employers}</h2>
                        <p>Премию получат: {increased}</p>
                </div>
        )
}

export default AppInfo;