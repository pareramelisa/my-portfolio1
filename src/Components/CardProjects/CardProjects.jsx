import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import skillsAndProjectsData from '../../api.json'; 
import { Container, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'

export default function CardProjects() {
  const { proyectos } = skillsAndProjectsData;
  return (
    <Container sx={{ py: 8, marginTop: 4 }} maxWidth="md">
          <Grid container spacing={4}>
            {proyectos.map((proyecto, index) => (
              <Grid item key={`project-${index}`} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '700px', display: 'flex', flexDirection: 'column', boxShadow: 3 }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      pt: '56.25%',
                    }}
                    image={proyecto.foto}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {proyecto.nombre}
                    </Typography>
                    <Typography>
                      {proyecto.descripcion}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" variant="contained" color="primary" component={RouterLink}
                  to={proyecto.repositorio}>Repo</Button>
                    <Button size="small" variant="contained" color="primary" component={RouterLink}
                  to={proyecto.deploy}>Deploy</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
  );
}
