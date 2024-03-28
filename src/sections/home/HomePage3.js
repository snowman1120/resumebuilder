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
const Summary = [
  {
    id:"Summary",
    title:'Matthew Marron',
    description:[
      '',
      `Experienced IT and Software Development professional with over 10 years in the industry, specializing in the .NET framework and adept at delivering robust solutions for large enterprises. 
      Proven expertise spans system analysis, technical leadership, and project management, with a focus on developing intricate applications for diverse sectors including ERP, healthcare, finance, HR, banking, e-commerce, inventory, and accounting.
      Proficient in data migration, technical documentation, UML designing, application architecture, and well-versed in Agile practices, test-driven development, and software engineering design patterns, holding certifications as a Microsoft Certified Professional Developer (MCPD) and Microsoft Certified Technology Specialist (MCTS).`
      // "Expert in software development with 7 years of contributions in various projects.",
      // "I strive to focus on the delivery of high-quality products and work.",
      // "I think that an employee's honesty is an important as one's skill, in hiring and building relationships.",  "Until now, it was my philosophy to keep honestly in the contract with my clients."
    ],
    type:'order1',
    time:''
  },
]
const Education = [
  {
    id:"Education",
    title: "Bachelor's Degree in Computer Science",
    description:[
      "From 2009 to 2013",
      "Drexel University",
      "Relevant Coursework: OS Architecture, Linux/Unix Programming, Usability in Website and Software Design, C++ Programming, Web Development, Database Design & SQL, Data Engineering, Advanced Software Programming",
    ],
    type:'order1',
    time:''
  },
]
const Experience = [
  {
    id: 'Senior Software Engineer in Winwire (TriNet) / Gilead',
    title: 'Senior Software Engineer in Winwire / Gilead',
    description: [
      "02/2024 – present",
      "● Improved user / manager experience in Absorb LMS system by applying Okta Universal Directory for user registration",
      "● Involved in the development of a Membership Management System and Community Health Outreach Program using C#, .NET and React / TypeScript for frontend.",
      "● Designed and developed Microservice architecture with ASP.NET, Node JS 18 and Django based services interacting through a combination of RESTful and Apache Kafka message brokers.",
      "● Developed a robust healthcare management system using ASP.NET MVC and Entity Framework, leveraging my expertise in full-stack development.",
      "● Utilized Entity Framework for seamless integration with a SQL Server database, optimizing data retrieval and manipulation processes.",
      "● Reduced system downtime by +13% and decreased the number of support tickets by 22% after revamping a 20-year-old software suite comprising two Classic ASP applications and 5 .NET 2.0 WinForms applications.",
    ]
  },
  {
    id:".NET Full Stack Engineer and Senior Software Engineer in Membersy",
    title:'.NET Full Stack Engineer and Senior Software Engineer in Membersy',
    description:[
      "01/2020 – 10/2023",
      "● Developed a modern software suite in .NET 6 with Azure Serverless Architecture with an React frontend, resulting in a +29% improvement in system performance, as evidenced by a 23% reduction in response times and a 17% increase in system reliability.",
      "● Involved in Design, Development and Testing of Windows Forms, Web Forms and Web Services using IIS, ASP.NET, XML Dataset and .NET Framework.",
      "● Optimized database performance by fine-tuning SQL queries, indexing tables, and implementing query caching techniques.",
      "● Created a Time and Budgeting system for a large construction company utilizing Blazor, ASP.Net Core, SQL Server, and C# Implemented a secure patient portal using React / TypeScript, enhancing user experience and ensuring HIPAA compliance through robust type-checking and structured component architecture.",
      "● Created Typescript reusable components and services to consume REST API's using Component-based architecture provided by React Worked with advance web development technologies like React, Node, Express, MongoDB, MySQL, ECh IAScript 6, Typescript, JavaScript, Immutable, P3thozt Bootstrap 4, CSS, HTML, JavaScript Object Notation.",
      "● Led the implementation of a robust Simple Query and Reply System (SQRS) using Azure Service Bus in a healthcare project, enabling seamless communication between diverse components, ensuring real-time data retrieval and processing for critical patient information.",
      "● Collaborated with cross-functional teams to integrate MongoDB / Cosmos with the project's .NET backend and frontend components, fostering a cohesive and efficient development process.",
      "● Implemented secure and efficient microservices architecture by deploying Azure Functions, including leveraging Azure Durable Functions to orchestrate complex workflows, ensuring seamless scalability to accommodate varying workloads and enhancing the project's overall efficiency and responsiveness.",
      "● Secured access to patient data with Azure Active Directory, reducing security threats by 20%, and utilized Azure Synapse Analytics and Power BI for data analytics, enhancing decision-making processes in patient care.",
      "● Implemented Apache Spark for processing large-scale healthcare data stored in Azure Blob Storage, optimizing data analytics workflows for a healthcare project. Leveraged Spark's distributed computing capabilities to efficiently analyze and extract valuable insights from diverse medical datasets, enhancing decision-making processes and contributing to improved patient outcomes.",
      "● Integrated GraphQL for efficient database management in a healthcare project on Azure DevOps, orchestrating seamless collaboration among development, operations, and testing teams, resulting in enhanced data accessibility and streamlined workflows.",
      "● Implemented data analytics and reporting features using Pandas and Matplotlib to derive insights and enable data-driven decision-making for the healthcare client.",
      "● Used GitLab for source control, data collection, reporting, and project tracking. Maintained Source Code, created pull requests, performed self and Peer Code Reviews and created branches by using GIT, Source Tree",
      "● Implemented CI/CD pipelines using Jenkins and Docker, streamlining development and release cycles.",
      "● Conducted manual testing using tools such as JIRA and TestRail to create and execute test cases, track defects, and manage test documentation.",
      "● Introduced the Scrum process for a new team, scaling it up from 10 developers to a robust team comprising 20 developers, two QA engineers, an architect, and a scrum master, resulting in a 28% faster project delivery.",
      // "● Implemented some of metaverse project with a deep understand about augmented, virtual and mixed reality and strong algorithm logic",
      // "● Excelled a good WebXR technologies and SDK experience for Metaverse development",
      // "● Have good computer graphics, animation and game development experience",
      // "● Always brought good ideas and solutions to the team with creative vision and thinking",
    ],
    type:'order1',
    time:''
  },
  {
    id:"Full Stack .NET Developer in TEKsystems / Comcast",
    title:'Full Stack .NET Developer in TEKsystems / Comcast',
    description:[
      "07/2015 – 11/2019",
      "● Involved in the development of a custom B2B e-commerce platform using various frameworks (ASP.NET Angular and React) , providing a seamless ordering process for wholesale customers.",
      "● Developed and deployed XPF Batch scripts in an e-commerce environment, automating data extraction, transformation, and loading processes, thereby achieving seamless integration between disparate systems and ensuring real-time inventory updates for a dynamic product catalog.",
      "● Built a real-time messaging service using MongoDB and ASP.NET, facilitating interactive communication among users during live sessions and boosting user engagement by 31%",
      "● Worked on an interactive map portal that displayed information about media appliance failures written in .NET Core and React, improving issue visibility by 26% and enabling faster response times.",
      "● Implemented reusable React and Vue JS components to create a modular and scalable frontend architecture.",
      "● Implemented real-time analytics using TypeScript and Angular, leading to a 11% improvement in data-driven decision-making for clients and stakeholders.",
      "● Created REST APIs and utilized Windows Communication Framework (WCF) services for seamless data exchange, improving system interoperability by 23%.",
      "● Designed and executed SQL Database Schema, procedures, and functions, providing stakeholders with detailed employee training status information and achieving a 9% increase in data-driven insights",
      "● Experience in SQL Server Database design developing T—SQL queries, functions, stored procedures, and triggers using SQL Server and used Data Adapter, Dataset, Data Correction, Data Command, and Data reader as a part of ADO.NET to access and update the database in ASP.NET environment.",
      "● Experienced in developing Windows-based and web-based applications using .NET technologies such as C#, VB.NET, ASP.NET, ADO.NET, win forms, Server controls, web services, .NET Framework, HTML/XHTML,  DHTML, CSS, and IIS.",
      "● Developed an algorithmic trading system using Python, implementing high-frequency trading strategies and optimizing trade execution algorithms for one of our financial clients",
      "● Built responsive pages on frontend frameworks like React, and Vue JS with Tailwind CSS, Headless UI, and other tools to create visually appealing and user-friendly interfaces.",
      "● Oversaw the ETL processes, including data extraction, transformation, and loading from various operational systems into the data warehouse.",
      "● Worked in a wide-area network to maintain all the device related data into PostgreSQL, Amazon RDS and Oracle database.",
      "● Leveraged AWS services, such as AWS Lambda and Amazon S3, for scalable infrastructure and storage of data, ensuring high availability and performance.",
      "● Implemented AWS deployment strategies, including using AWS Elastic Beanstalk and Amazon CloudFront for efficient application delivery.",
      "● Developed and executed test plans and test cases to validate the accuracy and completeness of ETL processes.",
      "● Proposed and implemented various DevOps methodologies and tools to automate and optimize their processes. This included implementing continuous integration and continuous deployment (CI/CD) pipelines using tools like Jenkins, and GitLab.",
      "● Containerized and orchestrated microservices using Docker, Kubernetes, and Apache Kafka.",
      "● Developed and trained Deep learning models using frameworks like TensorFlow or PyTorch, applying techniques such as convolutional neural networks (CNNs) and recurrent neural networks (RNNs) for image recognition.",
      "● Implemented Azure Virtual Networks, Subnets, and Network Security Groups (NSGs) to establish secure network connectivity.",
      "● Configured and managed Azure Virtual Machines (VMs) for various operating systems, including Windows and Linux.",
      "● Implemented all components using Test-Driven Development (TDD) methodology with JUnit, ensuring high quality code and efficient development.",
    ],
    type:'order1',
    time:''
  },
  {
    id:"C# (.NET) Developer in AGI (Analytical Graphics, Inc.) / Mythical Games",
    title:'C# (.NET) Developer in AGI (Analytical Graphics, Inc.) / Mythical Games',
    description:[
      "05/2013 – 06/2015",
      "● Implemented a Scrum development process with one-week iterations, resulting in a 20% increase in development speed and a 15% reduction in project delivery times.",
      "● Leveraged UI expertise in AngularJS to troubleshoot existing UI issues and develop new user-friendly forms, leading to a 28% improvement in user satisfaction.",
      "● Optimized the data access layer, reducing its size by 50%, resulting in a 13% improvement in data retrieval performance and a 18% reduction in database load times.",
      "● Consolidated multiple BL (Business Logic) class libraries into a single reusable library, reducing maintenance efforts by 28% and improving code reuse by 22%.",
      "● Introduced automated end-to-end (E2E) testing, which increased test coverage by 32%, reduced the number of software defects by 18%, and improved software quality.",
      "● Enhanced user experience (UX) with AngularJS, HTML5, and CSS, resulting in a 22% increase in user engagement and a 17% improvement in user retention.",
      "● Implemented a real-time messaging service using MongoDB and ASP.NET, facilitating seamless communication between users during live sessions, resulting in a 32% boost in user interaction and engagement",
      "● Developed business components using C#, WCF, BizTalk, and Entity Framework",

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
          <Grid item xs={12}
            sx={{
            '& .MuiTimelineItem-missingOppositeContent:before': {
              display: 'none',
            },padding:'10px'}}>
              <m.div>
                <m.div variants={varFade().inRight}>
                  <Typography variant="h3" sx={{ mb: 3 }}>
                    Summary
                  </Typography>
                </m.div>

                <Timeline>
                  {Summary.map((item, index) => (
                    <OrderItem key={item.id} item={item} isLast={index === Summary.length - 1} />
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
                    <OrderItem key={item.id} item={item} isLast={index === Summary.length - 1} />
                  ))}
                </Timeline>
              </m.div>
          </Grid>
          <Grid item xs={12}
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
                  <OrderItem key={item.id} item={item} isLast={index === Summary.length - 1} />
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
