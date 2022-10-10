import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DETAIL_COCTAIL_API } from '../API/index';
import './Detail.css'
import Button from '@mui/material/Button';
import Header from '../Header';


const Detail = () => {

    const { home } = useParams()
    const { id } = useParams()
    const [detail, setDetail] = useState({})

    const getDetailCoctal = async () => {
        const req = await fetch(DETAIL_COCTAIL_API + id)
        const res = await req.json()
        setDetail(res.drinks[0]);
        console.log(res.drinks[0]);
    }

    useEffect(() => {
        getDetailCoctal()
    }, [])

    return (
        <div className='card_style'>
            <div id='head'>
                <Header />
            </div>
            <div className='div_border'>
                <div>
                    <img id='img' src={detail.strDrinkThumb} alt="" />
                </div>
                <div className='description'>
                    <div className='title_position'>
                        <h1 className='title'>{detail.strDrink}</h1>
                    </div>
                    <div className='divs_position'>
                        <div>
                            <h2 className='title2'>Ingredients</h2>
                            <li className='all_li'>
                                <Link className='all_links' to={'/ingredients/' + detail.strIngredient1}>{detail.strIngredient1}</Link>
                            </li>
                            {detail.strIngredient2 && <li className='all_li'><Link className='all_links' to={'/ingredients/' + detail.strIngredient2}>{detail.strIngredient2}</Link></li>}
                            {detail.strIngredient3 && <li className='all_li'><Link className='all_links' to={'/ingredients/' + detail.strIngredient3}>{detail.strIngredient3}</Link></li>}
                            {detail.strIngredient4 && <li className='all_li'><Link className='all_links' to={'/ingredients/' + detail.strIngredient4}>{detail.strIngredient4}</Link></li>}
                            {/* {
                                detail.strIngredient4 ? li<Link to={'/ingredients/' + detail.strIngredient4}>{detail.strIngredient4}</Link> : <h2>Ничего не найденo...</h2>
                            } */}
                        </div>
                        <div className='title_div'>
                            <h2 className='title3'>{detail.strAlcoholic}</h2>
                            <h2 className='title3'>Category: {detail.strCategory}</h2>
                            <h2 className='title3'>Glass: {detail.strGlass}</h2>
                            <div className='button_array'>
                                <Link className='LinkStyle' to={'/'}>
                                    <Button variant="outlined">Вернуться назад</Button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Detail;