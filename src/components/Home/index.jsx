import React, { useState } from 'react';
import { useEffect } from 'react';
import { ALLCOCTAILS_API, FILTER, SEARCH_COCTAIL_BY_NAME } from '../API';
import Header from '../Header';
import Output from '../Output';
import './Home.css'

const Home = () => {

    const [data, setData] = useState([])

    const getAllCoctails = async () => {
        const req = await fetch(ALLCOCTAILS_API)
        const res = await req.json()
        setData(res.drinks);
    }

    const getCoctailByName = async (name) => {
        const req = await fetch(SEARCH_COCTAIL_BY_NAME + name)
        const res = await req.json()
        setData(res.drinks);
    }

    const getByFilter = async (category) => {
        const req = await fetch(FILTER + category)
        const res = await req.json()
        setData(res.drinks);
        // console.log(category);
        // console.log(category);
    }

    useEffect(() => {
        getAllCoctails()
    }, [])

    return (
        <div>
            <div className='Header_position'>
                <Header all={getAllCoctails} search={getCoctailByName} filter={getByFilter} />
            </div>
            <Output data={data} />
        </div>
    );
};


export default Home;