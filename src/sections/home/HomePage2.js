import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Card,CardHeader,CardContent, Container, Typography, LinearProgress } from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
// utils
import { fPercent } from '../../utils/formatNumber';
// _mock_
// import { _skills } from '../../_mock';
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}));

const _skills_frontend = [
  {label:"JavaScript",value:98},
  {label:"TypeScript",value:90},
  {label:"React",value:90},
  {label:"Next.js",value:95},
  {label:"Angular",value:90},
  {label:"Gatsby.js",value:70},
  {label:"HTML",value:95},
  {label:"CSS & CSS3",value:95},
  {label:"Tailwind CSS",value:80},
  {label:"SCSS",value:80},
]
const _skills_backend = [
  {label:"C# / Python / Node JS",value:95},
  {label:"ASP.NET / C#.NET / ADO.NET",value:95},
  {label:"SQL/ Python / PySpark",value:95},
  {label:"Express.js",value:95},
  {label:"MongoDB / Couchbase / Cosmos",value:90},
  {label:"REST APIs / Web API",value:90},
  {label:".Net Framework 6/4.5/4.0 / C# / ASP.NET MVC 5.0",value:90},
  {label:"Selenium / JUnit",value:80},
  {label:"Jenkins / JUnit / Mockito / Cosmos",value:80},
  {label:"AWS S3 / EC2 / Lambda / RDS / EKS",value:80},
  {label:"Azure Virtual Machines (VMs)",value:65},
  {label:"Python/Django/Flask",value:60},
]
const _skills_devops = [
  {label:"Docker / Kubernetes",value:95},
  {label:"Webpack",value:70},
  {label:"Docker",value:60},
  {label:"AWS",value:80},
]
  
const _skills_blockchain = [
  {label:"Tokenomics(Minting, Presale, Pubilc Sale,Staking, Loan)",value:95},
  {label:"NFT(Minting, Presale, PublicSale, Royalty, Rarity)",value:70},
  {label:"Smart Contract (Solidty)",value:90},
  {label:"Web3.js",value:80},
  {label:"Metaverse",value:70},
  {label:"Marketplace",value:60},
  {label:"Dex",value:60},
  {label:"Dapp",value:70},
]
// ----------------------------------------------------------------------

export default function HomePage2() {
  const theme = useTheme();

  const isDesktop = useResponsive('up', 'md');

  const isLight = theme.palette.mode === 'light';

  const shadow = `-40px 40px 80px ${alpha(isLight ? theme.palette.grey[500] : theme.palette.common.black, 0.48)}`;

  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <Grid container spacing={3} sx={{marginBottom:'70px'}}>
          {isDesktop && (
            <Grid item xs={12} md={5} lg={5} sx={{ pr: { md: 7 } }}>
              <Grid container spacing={3} alignItems="flex-end">
                <Grid item xs={6}>
                  <m.div variants={varFade().inUp}>
                    <Image
                      alt="our office 1"
                      src="https://minimal-assets-api-dev.vercel.app/assets/images/about/what-1.jpg"
                      ratio="3/4"
                      sx={{
                        borderRadius: 2,
                        boxShadow: shadow,
                      }}
                    />
                  </m.div>
                </Grid>
                <Grid item xs={6}>
                  <m.div variants={varFade().inUp}>
                    <Image
                      alt="our office 2"
                      src="https://minimal-assets-api-dev.vercel.app/assets/images/about/what-2.jpg"
                      ratio="1/1"
                      sx={{ borderRadius: 2 }}
                    />
                  </m.div>
                </Grid>
              </Grid>
            </Grid>
          )}
          <Grid item xs={12} md={7} lg={7}>
            <m.div variants={varFade().inRight}>
              <Typography variant="h3" sx={{ mb: 3 }}>
              Senior .NET Full Stack Enginee
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 3 }}>
              Talented senior software engineer with a B.S in Computer Science.
              <br/>
              Worked on various projects over the last 10 years.
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <Typography
                sx={{
                  color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                }}
              >
                I've been working in software engineering for over 10 years and I'm constantly looking
                for innovative solutions to everyday problems.<br/>
                Able to work well and collaborate with others on a team of Designers, Developers,
                and Programmers using effective interpersonal skills.<br/>
                As a team leader, can typically manage 5 developers at any given time.<br/>
                I always follow the client's requirement in detail and loyal to software workflow, and providing helpful advice to grow client's business.
              </Typography>
            </m.div>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Card sx={{width:"100%"}}>
              <CardContent>
              <m.div style={{position:'relative',width:'fit-content'}}>
                <h1 className="gold-text" data-text="Skills">
                  <span className="gold-text__highlight" data-text="Skills">Skills</span>
                </h1>
              </m.div>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6} lg={6} sx={{padding:'10px'}}>
                    <m.div variants={varFade().inRight}>
                      <Typography variant="h3" sx={{ mb: 3 }}>
                        Back End
                      </Typography>
                    </m.div>

                    <Box sx={{ my: 5 }}>
                      {_skills_backend.map((progress) => (
                        <m.div key={progress.label} variants={varFade().inRight}>
                          <ProgressItem progress={progress} />
                        </m.div>
                      ))}
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6} lg={6} sx={{padding:'10px'}}>
                    <m.div variants={varFade().inRight}>
                      <Typography variant="h3" sx={{ mb: 3 }}>
                        Front End
                      </Typography>
                    </m.div>

                    <Box sx={{ my: 5 }}>
                      {_skills_frontend.map((progress) => (
                        <m.div key={progress.label} variants={varFade().inRight}>
                          <ProgressItem progress={progress} />
                        </m.div>
                      ))}
                    </Box>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6} lg={6} sx={{padding:'10px'}}>
                    <m.div variants={varFade().inRight}>
                      <Typography variant="h3" sx={{ mb: 3 }}>
                        DevOps
                      </Typography>
                    </m.div>

                    <Box sx={{ my: 5 }}>
                      {_skills_devops.map((progress) => (
                        <m.div key={progress.label} variants={varFade().inRight}>
                          <ProgressItem progress={progress} />
                        </m.div>
                      ))}
                    </Box>
                  </Grid>
                  {/* <Grid item xs={12} md={6} lg={6} sx={{padding:'10px'}}>
                    <m.div variants={varFade().inRight}>
                      <Typography variant="h3" sx={{ mb: 3 }}>
                        Blockchain
                      </Typography>
                    </m.div>

                    <Box sx={{ my: 5 }}>
                      {_skills_blockchain.map((progress) => (
                        <m.div key={progress.label} variants={varFade().inRight}>
                          <ProgressItem progress={progress} />
                        </m.div>
                      ))}
                    </Box>
                  </Grid> */}
                </Grid>
              </CardContent>

          </Card>
        </Grid>

      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

ProgressItem.propTypes = {
  progress: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number,
  }),
};

function ProgressItem({ progress }) {
  const { label, value } = progress;

  return (
    <Box sx={{ mt: 3 }}>
      <Box sx={{ mb: 1.5, display: 'flex', alignItems: 'center' }}>
        <Typography variant="subtitle2">{label}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary',marginLeft:'auto' }}>
          {value}%
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={value}
        color={
          (progress.label === 'Total Income' && 'info') ||
          (progress.label === 'Total Expenses' && 'warning') ||
          'primary'
        }
        sx={{
          '& .MuiLinearProgress-bar': { bgcolor: 'primary' },
          '&.MuiLinearProgress-determinate': { bgcolor: 'divider' },
        }}
      />
    </Box>
  );
}
