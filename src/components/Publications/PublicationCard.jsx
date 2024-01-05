import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';

const PublicationCard = () => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardHeader
        avatar={
          <Avatar className='bg-red-500 text-red-700'>
            R
          </Avatar>
        }
        title="Dr. Balaji Babu"
        subheader="September 14, 2016"
      />
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
      <CardActions disableSpacing className='justify-center'>
        <Button variant="outlined">Read Article</Button>
      </CardActions>
    </Card>
  );
};

export default PublicationCard;
