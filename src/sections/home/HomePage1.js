import { useRef,useEffect,useState } from 'react';
import PropTypes from 'prop-types';
import { m, useScroll } from 'framer-motion';
import NextLink from 'next/link';
import Slider from 'react-slick';
import Typewriter from 'typewriter-effect';
import gsap from "gsap";
// @mui
import { Button, Box, Link, Container, Typography, Stack,Grid } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
// hooks
import useResponsive from '../../hooks/useResponsive';
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import TextIconLabel from '../../components/TextIconLabel';
import { MotionContainer, varFade,varBgKenburns } from '../../components/animate';
import { CarouselDots, CarouselArrows } from '../../components/carousel';
import VideoRightContextMenu from '../../components/VideoRightContextMenu';

const CONTACTS = [
  {
    name: 'Email',
    icon: 'fa-envelope',
    address: 'maximum95628@gmail.com',
  },
  {
    name: 'Skype',
    icon: 'fa-skype',
    address: 'live:.cid.87867a3f9abed42c',
  },
  {
    name: 'Telegram',
    icon: 'fa-telegram',
    address: 'https://t.me/Maximum628',
  },
  {
    name: 'Github',
    icon: 'fa-github',
    address: 'https://github.com/maximum628',
  },
];
// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: '#fff',
  [theme.breakpoints.up('md')]: {
    width: '100%',
    height: '100vh',
    top: 0,
    left: 0,
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
  },
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: 1920,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(0),
  paddingBottom: theme.spacing(0),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left',
  },
}));

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
export default function HomePage1() {
  const isDesktop = useResponsive('up', 'md');
  const theme = useTheme();
  const carouselRef = useRef(null);

  const description = "Immigrate Canada,where immigration is easier than ever with our unique approach to have you get a PR(Permanent Residency) card issued that no other competitor of our Industry has access to do so";
  const [count, setCount] = useState(1);
  const [vctrlview, setVctrlview] = useState(false);
  const pages = [1, 2, 3, 4, 5,6];
  
  function preloaderEnd () {
    gsap.timeline().to(".immigration__pre-loader", 2, { duration: 2, opacity: 0, autoAlpha: 0, delay: 0.1, display: "none" })
  }
  function preload() {
        
    gsap.timeline().to(".immigration__progress_loader__loading", { width: "100%", duration: 5 })

    var preloader_text = document.querySelector(".immigration__pre-loader__copy")
    var tl_preloader = gsap.timeline({ onComplete: preloaderEnd, repeat: 0, yoyo: true })

    tl_preloader.to(preloader_text, {scale: 25})
    .to(preloader_text, {autoAlpha: 1})
    .to(preloader_text, {duration: 2, scale: 1, ease:  "expoScale(25,1, power4.in)"},"<")
    .to(preloader_text, { duration: 2, scale: 1, ease: "none", })
    .to('.immigration__pre-loader__wrap', { duration: 2, scale: 0, ease: "fade.out", });

    // tl_preloader.set(preloader_text, {
    //     opacity: 0,
    //     scale: 0.01,
    //     x: 0,
    //     y:  0,
    //   })
    //   .to(preloader_text,{
    //     opacity: 1,
    //     scale: 1,
    //     ease: "elastic.out",
    //     x: 0,
    //     y: 0,
    //     delay: 1,
    //     duration: 3,
    //   })
    //   .to(preloader_text, { duration: 2, scale: 1, ease: "none", })
    // we are immigration
    // tl_preloader.to(".immigration__pre-loader__wrap", { opacity: 0, height: 0 })
    //     .to(".immigration__pre-loader__intro", { duration: .5, opacity: 1, ease: "none", })
    //     .to(".immigration__pre-loader__heading", { duration: 4, scale: 1.2, ease: "none", })
    //     .to(".immigration__pre-loader__heading", { duration: 3, scale: 1, ease: "none", })
    //     .to(".immigration__pre-loader__heading", { duration: 4, scale: 1, ease: "none", })
  }
  useEffect(() => {
    preload();
    document.querySelector(".immigration__pre-loader__wrap").style.display = "block";
    // document.querySelector(".immigration__pre-loader__intro").style.display = "block";
    setCount(1);
  }, [count]);
  const textShadow_css = "rgb(217, 217, 217) 0px 0px 0px, rgb(217, 217, 217) -1px 1px 0px";
  
  const viewController = (value)=>{
    setVctrlview(value);
  }
  // const cubeboxscale = isDesktop ? 1 : 0.7;
  // const cubemargintop = isDesktop ? '0%' : '15%';
  return (
      <MotionContainer>
        <RootStyle>
          <Container maxWidth={false} style={{padding:0}}>
            <ContentStyle>
              <m.div id="video_component" variants={varFade().in} style={{width:'100%',marginTop:'0px'}}>
                <m.img src="/assets/images/home/fotis-fotopoulos-LJ9KY8pIH3E-unsplash.jpg"/>
              </m.div>
              <Stack spacing={2.5} alignItems="center" style={{marginTop:'0px!important'}} direction={{ xs: 'column', md: 'row' }}>
                <m.div style={{backgroundColor:'#ff0800',zIndex:11,width:'100%',textAlign:'center'}}>
                  <m.div className="immigration__pre-loader">
                      <m.div className="immigration__pre-loader__wrap" style={{display:'block'}}>
                          <m.div className="immigration__pre-loader__text">
                              <m.div className="immigration__pre-loader__copy">
                                
                              <m.img style={{width:'200px', margin:'auto'}} src="/favicon/android-chrome-512x512.png"/>
                                Full Stack Web Developer
                              </m.div>
                          </m.div>
                          <m.div className="immigration__progress_loader">
                              <m.div className="immigration__progress_loader__info" style={{color:'#fff'}}></m.div>
                              <m.div className="immigration__progress_loader-wrapper">
                                  <m.div className="immigration__progress_loader__loading"></m.div>
                              </m.div>
                          </m.div>
                      </m.div>

                      {/* <m.div className="immigration__pre-loader__intro" style={{display:'block'}}>
                          <m.div className="immigration__pre-loader__content" style={{padding:'5% 5%'}}>
                              <h2 className="immigration__pre-loader__heading">ImmigrateCanada where immigration is easier than ever with our unique approach to have you get a PR(Permanent Residency) card issued that no other competitor of our Industry has access to do so</h2>
                          </m.div>
                      </m.div> */}
                  </m.div>
                
                  <m.div className="videocaption">

                    <m.div className="videotext aos-init aos-animate" data-aos="fade-up">
                      <m.div style={{color:'#fff',fontSize:'2em'}}>Jackson Liang</m.div>
                      <Typography variant={isDesktop ? "h1" : "h2"}>Full Stack Web Developer</Typography>
                      <Grid container spacing={5} sx={{ mt: 5, color: 'common.white',justifyContent:'center' }}>
                        {CONTACTS.map((contact) => (
                          <Grid key={contact.country} item xs={12} sm={6} md={3} lg={2} sx={{ pr: { md: 5 } }}>
                            <m.div variants={varFade().in}>
                              <Iconify icon={contact.icon} sx={{ width: 20, height: 20 }} />
                              <Typography variant="h6" paragraph>
                                {contact.name}
                              </Typography>
                            </m.div>
                            <m.div variants={varFade().inRight}>
                              <Typography variant="body2">
                                {contact.address}
                              </Typography>
                            </m.div>
                          </Grid>
                        ))}
                      </Grid>
                    </m.div>
                  </m.div>
                </m.div>
              </Stack>
            </ContentStyle>
          </Container>
        </RootStyle>
        <Box sx={{ height: { md: '100vh' } }} />
      </MotionContainer>
  );
}
// ----------------------------------------------------------------------

CarouselItem.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
  }),
};


function CarouselItem({ item }) {
  const [count, setCount] = useState(1);
  const { src, title,type } = item;

  if(type === "video"){
    return(
      <ContentStyle>
        <m.div variants={varFade().inRight} style={{width:'100%',marginTop:'0px'}}>
          <video className='col-12' style={{width:'100%'}} playsInline="" autoPlay={true} muted={true} loop={true}>
            <source alt={title} src={src} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </m.div>
      </ContentStyle>
    )
  }
  else{
    return (
      <ContentStyle>
        <m.div style={{width:'100%',marginTop:'0px'}}  animate="visible"
          variants={{
            hidden: {
              scale: .8,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: .4
              }
            }
          }}>
          <Image variants={varBgKenburns().top} alt={title} src={src} />
        </m.div>
      </ContentStyle>
    );
  }
}

