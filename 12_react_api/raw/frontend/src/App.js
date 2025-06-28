import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import NotFound from './components/NotFound'; // Импорт компонента NotFound

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Routes>
                        <Route path="/" element={<ProductList />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </header>
            </div>
        </Router>
    );
}

export default App;
