import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { Element } from 'react-scroll';

const Publications = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Element name="publications">
      <div className={`flex flex-col items-center justify-center gap-5 p-5 mt-10 ${isVisible ? 'animate__slideInUp animate__animated animate-slower' : ''}`}>
        <h3 className="text-3xl mt-10">Recent Publications</h3>

        <div className="flex flex-wrap items-center justify-center gap-5 ${isVisible ? 'animate__slideInUp animate__animated animate-slower' : ''}`">
        {[...Array(4)].map(() => (
         <>
         <Card sx={{ maxWidth: 300}}>
          <CardHeader
           avatar={
            <Avatar className='bg-red-500 text-red-700'>
              B
            </Avatar>
          }
          title="Dr. Balaji Babu"
          subheader="September 14, 2016"
          >
          </CardHeader>
          <CardMedia
            component="img"
            height="150"
            image="https://wallpapers.com/images/hd/doddle-chemistry-chemical-formulas-tuy5q0hvwki0yyli.jpg"
            alt="Paella dish"
          />
          <CardContent>
          <Typography variant="subtitle1" color="text.primary">
            Quantum Computing
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing
        className='justify-center'
        >
        <Button variant="outlined">Read Article</Button>
      </CardActions>
         </Card>
         </>
        ))}
        </div> 
      </div>
    </Element>
  );
};

export default Publications;
