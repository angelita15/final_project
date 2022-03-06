import IndexPage from './../pages/Indexpage/IndexPages';
import EventsListPage from './../pages/EventsPage/EventsListPage'
import EventDetailsPage from '../pages/EventDetailsPage/EventDetailsPage';

import CreateEventPage from '../pages/CreateEventPage/CreateEventPage';
import EventEditPage from '../pages/EventEditPage/EventEditPage';

import SignupPage from '../pages/SignupPage/SignupPage';
import LoginPage from '../pages/LoginPage/LoginPage';

import ContactPage from '../pages/ContactPage/ContactPage';

import ProductListPage from '../pages/ProductsListPage/ProductListPage';
import ProductDetailsPage from '../pages/ProductDetailsPage/ProductDetailsPage';

import { Routes, Route } from 'react-router-dom'

function App() {
    return (
        <>

            <Routes>
                <Route element={<IndexPage />} path="/" />
                <Route element={<EventsListPage />} path="/getAllEvents" />
                <Route element={<EventDetailsPage />} path="detalles/:events_id" />
                <Route element={<CreateEventPage />} path="/crear" />
                <Route element={<EventEditPage />} path="/editEvent" />

                <Route element={<ProductListPage />} path="/getAllProducts" />
                <Route element={<ProductDetailsPage />} path="detalles/:products_id" />

                <Route element={<SignupPage />} path="/registro" />
                <Route element={<LoginPage />} path="/inicioSesion" />
                <Route element={<ContactPage />} path="/contact" />

                
                
            </Routes>

        </>
    );
}

export default App;
