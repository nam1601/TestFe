import './App.css';
import Content from './Content/Content';
import Header from './Header/Header';
function App() {
    return (
        <div className="App" style={{ display: 'flex' }}>
            <Header />
            <Content />
        </div>
    );
}

export default App;
