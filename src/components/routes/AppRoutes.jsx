import { Route, Routes } from 'react-router-dom';

import HomePage from '../home/HomePage';
import Heroes from '../pages/heroes/Heroes';
import HeroDetails from '../pages/heroes/HeroDetails';
import About from '../pages/about/about';
import Contact from '../pages/contact/Contact';
import UniversePage from '../pages/universe/UniversePage';
import ApiComponent from '../pages/api/ApiComponent';
import HeroDetailPage from '../pages/heroes/HeroDetailPage';
import Me from '../pages/me/me';

import NotFound from '../error/NotFound';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/heroes" element={<Heroes />} />
            <Route path="/hero/:id" element={<HeroDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/universe/:universe" element={<UniversePage />} />
            <Route path="/hero" element={<ApiComponent />} />
            <Route path="/heroe/:heroName" element={<HeroDetailPage />} /> 
            <Route path='/me' element={<Me />} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    );
}