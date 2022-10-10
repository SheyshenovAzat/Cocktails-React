import { Button, MenuItem, Select, Stack, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = ({ search, all, filter }) => {

    const [name, setName] = useState('')
    // console.log(category);

    return (
        <header>
            <Stack spacing={2}
                direction='row'
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Link to='/'>
                    <img onClick={all} width={150} src="https://freesvg.org/img/MojitoCocktail.png" alt="" />
                </Link>
                <h1 className='h1_coctail'>Coctails || React</h1>
                <TextField
                    onChange={(e) => setName(e.target.value)}
                    id="filled-basic"
                    label='Coctail name'
                    variant="filled" />

                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value='Categories'
                    onChange={(e) => filter(e.target.value)}
                >
                    <MenuItem value='Alcoholic'>Alcoholic</MenuItem>
                    <MenuItem value='Non_Alcoholic'>Non_Alcoholic</MenuItem>
                    <MenuItem value='Categories'>Categories</MenuItem>
                </Select>

                {/* <select onChange={(e) => filter(e.target.value)}>
                    <option value="Alcoholic">Алкогольный</option>
                    <option value="Non_Alcoholic">Безалкогольный</option>
                </select> */}

                <Button onClick={() => search(name)} variant='outlined'>Поиск</Button>

            </Stack>
        </header>
    );
};

export default Header;