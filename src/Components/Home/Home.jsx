
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { Link as RouterLink } from 'react-router-dom'
import { theme } from '../../Theme/index'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Melisa Parera Portfolio
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const tiers = [
  {
    title: 'Experiencia',
    description: [
      '¡Trabaje grupal e individualmente en proyectos de Desarrollo Web que fueron aprobados exitosamente durante mis estudios en Soy Henry!'
    ],
    buttonText: 'mirá mi trabajo',
    buttonVariant: 'outlined',
    route: 'https://github.com/pareramelisa?tab=repositories'
  },
  {
    title: 'Sobre mí',
    image: 'https://drive.google.com/file/d/1trG4TdHG5G8Ue34kFvJ27OgUYR9EHSTe/view',
    description: [
      "Empecé en 2022 estudiando Analisís de Sistemas, di mis primeros pasos con Python y ahí descubrí que la parte que mas me gustaba era programar, eso me abrió el camino a empezar Henry en 2023.",
    ],
    buttonText: 'mirá mi cv',
    buttonVariant: 'contained',
    route: 'https://www.linkedin.com/feed/update/urn:li:activity:7128012595705303040/'
  },
  {
    title: 'Hobbies',
    description: [
      "En 2022, además, me recibí como Maquilladora Profesional, y es un oficio que me apasiona y lo ejerzo desde los 17 años de manera autodidacta, en mi Home Studio o a domicilio.",
    ],
    buttonText: 'mirá mi trabajo',
    buttonVariant: 'outlined',
    route: 'https://www.instagram.com/melisapmakeup/'
  },
];

export default function Pricing() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Company name
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Features
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Enterprise
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Support
            </Link>
          </nav>
          <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          ¡Bienvenido!
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" component="p">
        ¡Hola! Soy Melisa, una desarrolladora argentina de 21 años, enfocada en crear experiencias digitales impactantes. Mi amor por la tecnología se fusiona con mi creatividad para construir soluciones innovadoras. Me encanta transformar ideas en código y convertir desafíos en oportunidades. ¡Bienvenido a mi mundo de desarrollo!
        </Typography>
      </Container>

      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (

            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  image={tier.image}
                  titleTypographyProps={{ align: 'center' }}
                  TypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}
                  component={RouterLink}
                  to={tier.route}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}