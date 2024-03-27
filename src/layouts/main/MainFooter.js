// next
import NextLink from 'next/link';
import { m } from 'framer-motion';
// @mui
import { styled,alpha } from '@mui/material/styles';
import { Grid, Link, Divider, Container, Typography, Stack,Tooltip, IconButton,Button } from '@mui/material';
// components
import Logo from '../../components/Logo';
import SocialsButton from '../../components/SocialsButton';

import Iconify from '../../components/Iconify';
// ----------------------------------------------------------------------

const LINKS = [
  {
    title: 'Terms & Service',
    href: '/assets/pdf/Terms and Conditions.pdf'
  },
  {
    title: 'Disclaimer',
    href: '/assets/pdf/Disclaimer.pdf'
  },
  {
    title: 'Privacy Policy',
    href: '/assets/pdf/Privacy Policy.pdf'
  },
];

const SOCIALS = [
  {
    name: 'Email',
    icon: 'fa-envelope',
    socialColor: '#fff',
    path: 'maximum95628@gmail.com',
  },
  {
    name: 'Skype',
    icon: 'fa-skype',
    socialColor: '#fff',
    path: 'live:.cid.87867a3f9abed42c',
  },
  {
    name: 'Telegram',
    icon: 'fa-telegram',
    socialColor: '#fff',
    path: 'https://t.me/Maximum628',
  },
];

const header_color = 'linear-gradient(145deg, #e95151,#FF0800,#FF0800, #e95151)';
const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  paddingBottom:'30px',
  backgroundImage:header_color,
  backgroundColor: 'transparent'//theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  const simple = false;
  const initialColor = true;
  return (
      <RootStyle>
        <Container sx={{ pt: 0 }}>
          <Grid
            container
            justifyContent={{ xs: 'center', md: 'space-between' }}
            sx={{ textAlign: { xs: 'center', md: 'left' } }}
          >
            <Grid item xs={12} md={12}>
              <Stack spacing={5} direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" sx={{height:'100%',alignItems:'center'}}>
                {SOCIALS.map((social) => {
                  const { name, icon, path, socialColor } = social;
                  return simple ? (
                    <Link key={name} href={path}>
                      <Tooltip title={name} placement="top">
                        <IconButton
                          color="inherit"
                          sx={{
                            ...(initialColor && {
                              color: socialColor,
                              border: "2px solid "+socialColor,
                              '&:hover': {
                                bgcolor: alpha(socialColor, 0.08),
                              },
                            }),
                          }}
                        >
                          <Iconify icon={icon} sx={{ width: 20, height: 20 }} />
                          <m.span>{path}</m.span>
                        </IconButton>
                      </Tooltip>
                    </Link>
                  ) : (
                    <m.div key={name}>
                      <Button
                        href={path}
                        color="inherit"
                        variant="outlined"
                        size="small"
                        startIcon={<Iconify icon={icon} />}
                        sx={{
                          m: 0.5,
                          flexShrink: 0,
                          ...(initialColor && {
                            color: socialColor,
                            borderColor: socialColor,
                            '&:hover': {
                              borderColor: socialColor,
                              bgcolor: alpha(socialColor, 0.08),
                            },
                          }),
                          md:0.5
                        }}
                      >
                        {name}
                      </Button>
                      <m.span>{path}</m.span>
                    </m.div>
                  );
                })}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </RootStyle>
  );
}
