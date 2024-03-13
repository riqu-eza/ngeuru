import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Box from './Box';
import BoxPage from './BoxPage';

export default function BoxesRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Box />} />
                <Route path="/boxes/box-page" element={<BoxPage />} />
            </Routes>
        </BrowserRouter>
    );
}