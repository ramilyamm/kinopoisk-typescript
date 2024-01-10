import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Film from '../../pages/Film/Film';

const Main: FC = () => {
    return (
        <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/film-detail/:name' element={<Film />} />
            </Routes>
        </main>
    );
};

export default Main;