import { Stack } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './Output.css'
import { Link } from 'react-router-dom';

const Output = ({ data }) => {
    return (
        <Stack direction='row'
            flexWrap='wrap'
            justifyContent='space-evenly'>
            {
                data.map(el => (
                    <div className='Cards' key={el.idDrink}>
                        <Card id='card' sx={{ maxWidth: 400 }}>
                            <CardActionArea id='card_media' r>
                                <CardMedia
                                    component="img"
                                    height="350"
                                    image={el.strDrinkThumb}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography id='nameOfCoctail' gutterBottom variant="h5" component="div">
                                        {el.strDrink}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions style={{ background: 'rgba(0,0,0,0)' }} id='more'>
                                <Link id='button_placeholder' to={'/detail/' + el.idDrink}>
                                    <Button id='btn_text' size="small" color="primary">
                                        More...
                                    </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </div>
                ))
            }
        </Stack>
    );
};

export default Output;