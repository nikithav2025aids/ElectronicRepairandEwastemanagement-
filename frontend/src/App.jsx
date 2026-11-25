import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import RepairService from './pages/RepairService';
import BookRepair from './pages/BookRepair';
import SpareParts from './pages/SpareParts';

function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/repair-service" element={<RepairService />} />
                <Route path="/book-repair" element={<BookRepair />} />
                <Route path="/spare-parts" element={<SpareParts />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;