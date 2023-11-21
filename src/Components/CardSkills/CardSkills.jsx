import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import skillsAndProjectsData from '../../api.json'; 

export default function CardSkills() {
  const { skills } = skillsAndProjectsData;
  return (
    <Container sx={{ py: 8, marginTop: 4 }} maxWidth="md">
          <Grid container spacing={4}>
            {skills.map((skill, index) => (
              <Grid item key={`skill-${index}`} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      pt: '56.25%',
                    }}
                    image={skill.foto}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {skill.nombre}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
  )
}


