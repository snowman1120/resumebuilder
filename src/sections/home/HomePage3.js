import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Card,CardHeader,CardContent, Container, Typography, LinearProgress } from '@mui/material';
import { Timeline, TimelineDot, TimelineItem, TimelineContent, TimelineSeparator, TimelineConnector } from '@mui/lab';
// hooks
import useResponsive from '../../hooks/useResponsive';
// _mock_
// import { _skills } from '../../_mock';
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}));
const Sumary = [
  {
    id:"Sumary",
    title:'Jackson Liang',
    description:[
      "Expert in software development with 7 years of contributions in various projects.",
      "I strive to focus on the delivery of high-quality products and work.",
      "I think that an employee's honesty is an important as one's skill, in hiring and building relationships.",  "Until now, it was my philosophy to keep honestly in the contract with my clients."
    ],
    type:'order1',
    time:''
  },
]
const Education = [
  {
    id:"Education",
    title:'Bachelor of Computer Science',
    description:[
      "From 2012 to 2016",
      "HUAZHONG UNIVERSITY OF SCIENCE AND TECHNOLOGY Guanshan Subdistrict, Hongshan District, Wuhan, Hubei province",
      "Relevant Coursework: OS Architecture, Linux/Unix Programming, Usability in Website and Software Design, C++ Programming, Web Development, Database Design & SQL, Data Engineering, Advanced Software Programming",
    ],
    type:'order1',
    time:''
  },
]
const Experience = [
  {
    id:"Metaverse Developer",
    title:'Metaverse Developer',
    description:[
      "From November 2020 to December 2022 Dragon Trail China",
      "● Implemented some of metaverse project with a deep understand about augmented, virtual and mixed reality and strong algorithm logic",
      "● Excelled a good WebXR technologies and SDK experience for Metaverse development",
      "● Have good computer graphics, animation and game development experience",
      "● Always brought good ideas and solutions to the team with creative vision and thinking",
    ],
    type:'order1',
    time:''
  },
  {
    id:"WebGL Expert",
    title:'WebGL Expert',
    description:[
      "From January 2019 to October 2020 campoallecomete Italy",
      "● Implemented great 3D scenes and animations using 3D library.",
      "● Created a web virtual showroom where user can experience and enjoy products in a new environment.",
      "● Excelled in using camera, lights, geometry, materials, particles, shaders, physics and animations with libraries like WebGL, Three.js, Babylon.js,GLSL",
      "● Experience in optimizing 3D modeling and textures for web performance.",
    ],
    type:'order1',
    time:''
  },
  {
    id:"Full Stack Developer",
    title:'Full Stack Developer',
    description:[
      "From March 2015 to December 2018 Freelancer (Remote)",
      "● Full stack web developer responsible for end-to-end web app development and creative cloud engineering.",
      "● Developed an ecommerce web app, healthcare site, real-estate website, customer web portal, documentary launch website, etc.",
      "● Implemented structured coding style & simply page content and designed optimized database & backend API. So decreased rework by 15% and costs by 12%.",
      "● Excelled in user experience and user interfaces.",
      "● Implement tasks in accordance with schedule budget goals.",
    ],
    type:'order1',
    time:''
  },
]
// ----------------------------------------------------------------------

export default function HomePage3() {
  const theme = useTheme();

  const isDesktop = useResponsive('up', 'md');

  const isLight = theme.palette.mode === 'light';

  const shadow = `-40px 40px 80px ${alpha(isLight ? theme.palette.grey[500] : theme.palette.common.black, 0.48)}`;

  return (
    <RootStyle>
      <Container component={MotionViewport}>
      <Grid item md={12} sx={{marginBottom:'48px'}}>
        <m.div style={{position:'relative',margin:'auto',width:'fit-content'}}>
          <h1 className="gold-text" data-text="Resume">
            <span className="gold-text__highlight" data-text="Resume">Resume</span>
          </h1>
        </m.div>
      </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={6}
            sx={{
            '& .MuiTimelineItem-missingOppositeContent:before': {
              display: 'none',
            },padding:'10px'}}>
              <m.div>
                <m.div variants={varFade().inRight}>
                  <Typography variant="h3" sx={{ mb: 3 }}>
                    Sumary
                  </Typography>
                </m.div>

                <Timeline>
                  {Sumary.map((item, index) => (
                    <OrderItem key={item.id} item={item} isLast={index === Sumary.length - 1} />
                  ))}
                </Timeline>
              </m.div>
              <m.div>
                <m.div variants={varFade().inRight}>
                  <Typography variant="h3" sx={{ mb: 3 }}>
                    Education
                  </Typography>
                </m.div>
                <Timeline>
                  {Education.map((item, index) => (
                    <OrderItem key={item.id} item={item} isLast={index === Sumary.length - 1} />
                  ))}
                </Timeline>
              </m.div>
          </Grid>
          <Grid item xs={12} md={6} lg={6}
            sx={{
              '& .MuiTimelineItem-missingOppositeContent:before': {
                display: 'none',
              },padding:'10px'}}>
            <m.div variants={varFade().inRight}>
              <Typography variant="h3" sx={{ mb: 3 }}>
                Professional Experience
              </Typography>
            </m.div>
            <m.div>
              <Timeline>
                {Experience.map((item, index) => (
                  <OrderItem key={item.id} item={item} isLast={index === Sumary.length - 1} />
                ))}
              </Timeline>
            </m.div>
          </Grid>
        </Grid>

      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

OrderItem.propTypes = {
  isLast: PropTypes.bool,
  item: PropTypes.shape({
    time: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
  }),
};

function OrderItem({ item, isLast }) {
  const { type, title, description, time } = item;
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
          color={
            (type === 'order1' && 'primary') ||
            (type === 'order2' && 'success') ||
            (type === 'order3' && 'info') ||
            (type === 'order4' && 'warning') ||
            'error'
          }
        />
        <TimelineConnector />
      </TimelineSeparator>

      <TimelineContent>
        <Typography variant="h4">{title}</Typography>
        {description.map((content, index)=>(
          <Typography key={index} variant="subtitle2" sx={{color:index === 0 ? 'red' : 'text.secondary'}}>{content}</Typography>
        ))}

        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          {time}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
}
