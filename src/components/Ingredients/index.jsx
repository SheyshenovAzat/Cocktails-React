import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { SEARCH_BY_INGR } from '../API';
import Header from '../Header';
import './Ingredients.css'

const Ingredients = () => {

    const { ingredient } = useParams()
    const [nameIngr, setNameIngr] = useState({})


    const ingr = async () => {
        const req = await fetch(SEARCH_BY_INGR + ingredient)
        const res = await req.json()
        setNameIngr(res.ingredients[0]);
        console.log(res.ingredients[0]);
    }


    useEffect(() => {
        ingr()
    }, [])

    return (
        <div className='div_1'>
            <Header />
            <div className='ingr_div'>
                {
                    nameIngr.strDescription ? <p>{nameIngr.strDescription}</p> : <h2>Ничего не найдено...</h2>

                }
                <Link className='LinkStyle' to={'/'}>
                    <Button variant="outlined">Вернуться назад</Button>
                </Link>
            </div>
        </div>
    );
};

export default Ingredients;