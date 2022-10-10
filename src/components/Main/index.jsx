import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home';
import Detail from '../Detail/index';
import Ingredients from '../Ingredients/index';


const Main = () => {

    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/detail/:id' element={<Detail />} />
                <Route path='/ingredients/:ingredient' element={<Ingredients />} />
            </Routes>
        </div>
    );
};

export default Main;