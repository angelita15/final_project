import IndexPage from './../pages/Indexpage/IndexPages';
import EventsListPage from './../pages/EventsPage/EventsListPage'
import EventDetailsPage from '../pages/EventDetailsPage/EventDetailsPage';

import ProductListPage from '../pages/ProductsListPage/ProductListPage';
import ProductDetailsPage from '../pages/ProductDetailsPage/ProductDetailsPage'

import { Routes, Route } from 'react-router-dom'

function App() {
    return (
        <>

            <Routes>
                <Route element={<IndexPage />} path="/" />
                <Route element={<EventsListPage />} path="/getAllEvents" />
                <Route element={<EventDetailsPage />} path="detalles/:events_id" />
                
                <Route element={<ProductListPage />} path="/getAllProducts" />
                <Route element={<ProductDetailsPage />} path="detalles/:products_id" />
            </Routes>

        </>
    );
}

export default App;
