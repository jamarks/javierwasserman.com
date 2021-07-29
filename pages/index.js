import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../public/images/JavierWasserman.jpg'
import profilePic2 from '../public/images/JavierWasserman2.jpeg'
import coverPic from '../public/images/cover.jpg'
import dreamly from '../public/images/dreamly.png'
import caece from '../public/images/universidad-caece.svg'
import ort from '../public/images/world-ort.svg'
import coursera from '../public/images/coursera.svg'
import coderhouse from '../public/images/coderhouse.png'
import vercel from '../public/images/vercel.svg'
import regrow from '../public/images/regrow.png'
import regrowlarge from '../public/images/regrowacademy.png'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Javier Wasserman - Full Stack Developer in Berlin | Entrepreneur</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name='description' content='This is me > Javier Wasserman'></meta>
        <meta name='keyworkds' content='Javier Wasserman - Full Stack Developer in Berlin | Entrepreneur'></meta>
        <meta property="og:title" content='Javier Wasserman - Full Stack Developer in Berlin | Entrepreneur' key="ogtitle" />
        <meta property="og:description" content='This is me >' key="ogdesc" />
        <meta property="og:url" content='https://www.javierwasserman.com/' key="ogurl" />
        <meta property="og:image" content='https://www.javierwasserman.com/images/JavierWasserman2.jpeg' key="ogimage" />
        <meta property="og:site_name" content='Javier Wasserman  - Full Stack Developer in Berlin | Entrepreneur' key="ogsitename" />
      </Head>
      <div className='w-full' style={{ height: '400px', position: 'relative' }}>
        <Image style={{ height: '150px' }} src={coverPic} layout='fill' objectFit='cover' objectPosition='center' quality={100}></Image>
      </div>

      <div style={{ position: 'relative', top: '-40px' }} className='container sm:w-8/12 mx-auto '>
        <Image src={profilePic} width='138' height='150'></Image>
      </div>

      <div className='container mx-auto px-2 sm:px-0 sm:w-8/12'>
        <h1 className='font-roboto font-bold my-3'>Hi! Hello! Hallo!</h1>
        <div className='flex flex-col sm:flex-row mb-2'>
          <div className='p-3 font-normal text-base bg-blue-300 bg-opacity-50 mr-2 rounded-sm '><a href='#about'>Me</a></div>
          <div className='p-3 font-normal text-base bg-blue-300 bg-opacity-50 mr-2 rounded-sm '><a href='#contact'>Contact</a></div>
          <div className='p-3 font-normal text-base bg-blue-300 bg-opacity-50 mr-2 rounded-sm '><a href='#freelance'>Freelance</a></div>
          <div className='p-3 font-normal text-base bg-blue-300 bg-opacity-50 mr-2 rounded-sm '><a href='#work'>Work</a></div>
          <div className='p-3 font-normal text-base bg-blue-300 bg-opacity-50 mr-2 rounded-sm '><a href='#lang'>Languages</a></div>
          <div className='p-3 font-normal text-base bg-blue-300 bg-opacity-50 mr-2 rounded-sm '><a href='#training'>Training</a></div>
          <div className='p-3 font-normal text-base bg-blue-300 bg-opacity-50 mr-2 rounded-sm '><a href='#education'>Education</a></div>
         </div>
        <div className='w-full p-4 bg-gray-100 font-mono text-xs '>

          <pre className='overflow-auto'>{`
  const me = () => {
    const name = 'Javier Alberto Wasserman';
    const birthDate = 'December 13/1984';
    const birthLocation = 'Buenos Aires, Argentina';
    
    return <>
      Hola! Hi! Hallo! I am {name}, I was born in {birthLocation}, {birthDate}
    </>
  }
  `}</pre>

        </div>
        <a id='about'/>
        <div className='sm:border-l-4 sm:pl-10 w-full py-3 mt-2'>
          <p className='leading-6'>I am an Entrepreneur and Full-Stack Developer, born in Buenos Aires, Argentina 🇦🇷, now living in Berlin 🇩🇪 with more than 15 years of coding experience (PHP, Node, React,  Next.js enthusiast).</p>
          <p className='leading-6 mt-4'>In 2013 I have co-founded EntrenaYa, a B2C & B2B fitness subscriptions marketplace, with more than 800 gyms and fitness centers from LATAM working with us.</p>
          <p className='leading-6 mt-4'>Trained by great business accelerators such us 500 Startups & Startup Chile.<br /> Problem solver. Optimistic. Lateral thinking. Sagittarius. Musician. Cook. Wine Geek.</p>

        </div>
        <a id='contact'/>
        <h2 className='font-roboto font-bold mt-10'>Contact information</h2>        
        <div className='w-full border-b pb-6 '>
          <div className='flex flex-col sm:flex-row' >
            <div className='p-3 font-normal text-sm bg-blue-300 bg-opacity-50 mr-2 rounded-sm'>jamarks at gmail dot com</div>
            <div className='p-3 font-normal text-sm bg-blue-300 bg-opacity-50 mr-2 rounded-sm'><a href='https://www.linkedin.com/in/javier-wasserman-45a195a/'>Linkedin</a></div>
            <div className='p-3 font-normal text-sm bg-blue-300 bg-opacity-50 mr-2 rounded-sm'><a href='https://twitter.com/javierwasserman'>Twitter</a></div>
            <div className='p-3 font-normal text-sm bg-blue-300 bg-opacity-50 mr-2 rounded-sm'><a href='https://github.com/jamarks/'>Github</a></div>
          </div>
        </div>
        <a id='qiqr'/>
        <h2 className='font-roboto font-bold mt-8 mb-4'>Something I've been working on the last few weeks</h2>
        <div className='w-full pb-10 border-b'>
          <h4>Bye, Business Card. <b>Hello, QIQR.</b></h4>
          <ul className='list-disc ml-8 mt-2'>
            <li className='leading-8'>Nextjs (React Framework) + TailwindCSS - Deployed in Vercel.</li>
            <li className='leading-8'>vCard + QR Generator, using S3 Bucket and Firebase. </li>
            <li className='leading-8'>Using NextAuth for authentication </li>
          </ul>
          <div className='flex flex-col sm:flex-row p-2 border-2 mt-6'>
            <div className='w-full sm:w-3/5 p-1'>
              <div className='text-gray-500'>QIQR</div>
              <div className='w-full'>Its QIQR because it is „Quicker“.  <br/>Business Cards are an obsolete technology. How many of your phone contacts are no longer valid? Get your innovated QIQR on your phone, share your data and be aware whenever any contact change any of their contact data. <a target='_blank' className='underline text-blue-600' href='https://qiqr.app/u/776vRrdj4TVfa8lZ6mUC'>This is my QIQR!</a> </div>
              <div className='text-sm text-gray-400 '>7-2021 | <a className='underline' href='https://qiqr.app'>qiqr.app</a></div>
            </div>
            <div className='invisible sm:visible sm:w-2/12'></div>
            <div className='w-full sm:w-2/12 mt-1 p-4 sm:pl-2 '>
              <a href='https://qiqr.app'><img src='/images/qiqr-logo.png'></img></a>
            </div>
          </div>
        </div>
        <a id='freelance'/>
        <h2 className='font-roboto font-bold mt-8'>Last Freelance Projects</h2>
        <div className='w-full pb-10 border-b'>
          <h4>Dreamly | Main Full-Stack Developer</h4>
          <ul className='list-disc ml-8 mt-2'>
            <li className='leading-8'>Nextjs (React Framework) + TailwindCSS - Deployed in Vercel.</li>
            <li className='leading-8'>NodeJS Express Server: API Rest - PostgreSQL with Sequelize ORM - Deployed in Heroku.</li>
          </ul>
          <div className='flex flex-col sm:flex-row p-2 border-2 mt-6'>
            <div className='w-full sm:w-3/5 p-1'>
              <div className='text-gray-500'>Dreamly</div>
              <div className='w-full'>Out of the thousand offers out there, we want to make sure that the one that really suits you finds you while keeping your inbox clear of spam.</div>
              <div className='text-sm text-gray-400 '>12/2020 - 4/2021 | <a className='underline' href='https://dream-ly.com'>dream-ly.com</a></div>
            </div>
            <div className='invisible sm:visible sm:w-2/12'></div>
            <div className='w-full sm:w-2/12 mt-4 p-8 sm:pl-2 '>
              <a href='https://dream-ly/com'><img src='/images/dreamly.png'></img></a>
            </div>
          </div>
        </div>
        <a id='work'/>
        <h2 className='font-roboto font-bold mt-10'>Work Experience</h2>
        <div className='w-full my-8  pb-3'>
          <h3 className='text-gray-600 font-semibold'>BEON Tech Studio | Growth Manager</h3>

          <div className='leading-8 text-gray-500 py-1'>5/2020 - 6/2021 | <a className='underline' href='https://beon.studio'>https://beon.studio</a></div>
          <span>I introduced and implemented growth strategy techniques to scale Sales and Hiring processes of one of the most promising IT staff augmentation companies in Latam, in an already very overcrowded and growing industry.</span>
          <div>
            <ul className='list-disc ml-8 mt-2'>
              <li className='leading-8'>Initiate and orchestrate lead-generation programs across different and connected platforms and help grow Beon's sales funnel and IT candidates audience.</li>
              <li className='leading-8'>Create original sales-enablement tools to help the sales team deliver a compelling story to prospect customers.</li>
              <li className='leading-8'>Develop original content and copywriting for emails, website, blogs, presentations and other collateral.</li>
            </ul>
          </div>
        </div>
        <div className='w-full my-8 pb-3'>
          <h3 className='text-gray-600 font-semibold'>ENTRENAYA | Co-founder & Full-Stack Developer</h3>
          <div className='leading-8 text-gray-500 py-1'>Buenos Aires (AR), Santiago de Chile (CL), Mexico DF (MX) 2013-2020 | <a className='underline' href='https://www.entrenaya.com.ar'>https://www.entrenaya.com.ar</a></div>
          <span>The largest B2C fitness platform in Latin America, with more than 4,500 fitness and wellness plans available in over 700 gyms in the region. We also offer a B2B membership as a corporate benefit for employees, with access to more than 350 fitness, spa and beauty facilities. </span>
          <div className='mt-6'>
            <ul className='list-disc ml-8 mt-2'>
              <li className='leading-8'>Over 60,000 transactions in the last 4 years and USD 500.000 revenue.</li>
              <li className='leading-8'>MVC based on JAVA Groovy on Rails and PHP-MYSQL hosted in AWS (Elastic Beanstalk, RDS, S3, etc.).</li>
              <li className='leading-8'>Integration with Payment Systems in Argentina (MercadoPago), Chile (PuntoPagos) and México (Conekta).</li>
              <li className='leading-8'>Accelerated in Mexico DF with <a href='https://latam.500.co/latam/' className='underline'>500 Startups</a> (2014). </li>
              <li className='leading-8'>Backed by Startup Chile Gen 10 (2015). <a className='underline' href='https://www.contxto.com/en/market-map/15-south-american-sports-tech-startups-innovating-wellness-and-fitness/](https://www.contxto.com/en/market-map/15-south-american-sports-tech-startups-innovating-wellness-and-fitness/'>Press release here</a>. </li>
              <li className='leading-8'>Recognized as one of the <a href='https://contxto.com/en/market-map/15-south-american-sports-tech-startups-innovating-wellness-and-fitness/' className='underline'>best Sports-Tech Startups</a> and featured in many press articles, such as <a className='underline' href='https://www.insightssuccess.com/entrenaya-assisting-in-accomplishing-fitness-goals/'>this one by Insight Success</a>.</li>
            </ul>
          </div>
        </div>
        <div className='w-full my-8 pb-3'>
          <h3 className='text-gray-600 font-semibold'>CONSULT-AR | Tech Lead & Full-Stack Developer</h3>
          <div className='leading-8 text-gray-500 py-1'>Buenos Aires (AR) 2010-2013 | <a className='underline' href='https://consult-ar.info'>https://consult-ar.info</a></div>
          <span>Developed, mantained and scaled an in-house e-commerce content manager system for over 100 LATAM travel agencies. We experienced an average of 65%</span>
          <div className='mt-4'>
            <ul className='list-disc ml-8 mt-2'>
              <li className='leading-8'>MVC based on PHP & MySQL.</li>
              <li className='leading-8'>XML Web Services - API REST integrations with airlines, cruises, cars, tours and hotels reservation systems.</li>
            </ul>
          </div>
        </div>

        <div className='w-full my-8 pb-3'>
          <h3 className='text-gray-500 font-semibold text-sm'>FREELANCE | Full-Stack Developer</h3>
          <div className='leading-8 text-gray-500 py-1'>Buenos Aires (AR) | Los Angeles (US) 2006-2010</div>
          <div className='mt-2'>
            <ul className='list-disc ml-8 mt-2'>
              <li className='leading-8'>PHP / MYSQL, ASP, ASP.net, SQL Server - Bootstrap UI  - JS CSS HTML.</li>
              <li className='leading-8'>Marketing Email Senders / Email themes.</li>
              <li className='leading-8'>Wordpress Themes development.</li>
              <li className='leading-8'>Wordpress WooCommerce custom wigets and integrations.</li>
              <li className='leading-8'>Backend and Frontend.</li>
              <li className='leading-8'>Integrations with 3rd party services: CRM's, Bulk SMS Services.</li>
              <li className='leading-8'>Cross-browser Responsive Web Apps.</li>
              <li className='leading-8'>Social Networks scraper for B2B growth.</li>
              <li className='leading-8'>SEO Optimization, SEM, A/B Testing.</li>
            </ul>
          </div>
        </div>
        <div className='w-full my-8 pb-3'>
          <h3 className='text-gray-500 font-semibold text-sm'>TEVELES ASOCIADOS | ASP.NET & SQL Server Full-Stack Developer</h3>
          <div className='leading-8 text-gray-500 py-1'>Buenos Aires (AR) 2005-2006</div>
          <ul><li className='list-disc ml-8 mt-2'>Migrated a huge Visual Basic ERP to a ASP.NET web based cloud ERP.</li></ul>
        </div>
        <div className='w-full my-8 pb-3'>
          <h3 className='text-gray-500 font-semibold text-sm'>OMINT | ASP.NET & SQL Server Full-Stack Developer</h3>
          <div className='leading-8 text-gray-500 py-1'>Buenos Aires (AR) 2004-2005</div>
          <ul><li className='list-disc ml-8 mt-2'>ASP.NET + SQL SERVER Backend developer.</li></ul>
        </div>
        <div className='w-full my-8 pb-3'>
          <h3 className='text-gray-500 font-semibold text-sm'>SMS | Visual Basic & SQL Server Developer Jr.</h3>
          <div className='leading-8 text-gray-500 py-1'>Buenos Aires (AR) 2002-2004</div>
          <ul><li className='list-disc ml-8 mt-2'>Visual Basic and MQ SQL Server based in-house ERP for mid-large size companies.</li></ul>
        </div>

        <a id='lang'/>
        <div className='pt-8 border-b border-t'>
          <h2 className='font-roboto font-bold mt-0'>Language</h2>
          <div className='w-full my-4 pb-3'>
            <ul className='list-none'>
              <li className='m-0 leading-8'><span className='text-gray-700 font-medium'>Spanish</span> 🇦🇷 Native speaker. </li>
              <li className='m-0 leading-8'><span className='text-gray-700 font-medium'>English</span>  🇺🇸 Fluent speaker. </li>
              <li className='m-0 leading-8'><span className='text-gray-700 font-medium'>German</span> 🇩🇪 A2 Level and studying. Aspiring to be fluent.</li>

            </ul>
          </div>
        </div>
        <a id='training'/>
        <div className='pt-8 border-b'>
          <h2 className='font-roboto font-bold mt-0'>Recent training</h2>
          <div className='w-full my-4 pb-3'>
            <div className='mr-4 float-left'><Image src={coursera} width='120' height='70'></Image></div>
            <div className='leading-8 text-gray-700 font-medium'>NodeJS, Express & MongoDB (oAuth, Performance, Testing, Api REST, etc)
            </div>


            <div className='clear visible sm:invisible'></div>
            <div className='leading-8 text-gray-500'><a className='underline' target='_blank' href='https://www.coursera.org/'>Coursera</a> 10/2020</div>

            <div className='w-full p-4 my-3 bg-gray-100 font-mono text-sm'>
              Certificate: <a className='underline' target='_blank' href='https://drive.google.com/file/d/1D7vaiLDjXzN2HM8qL-PUfsld6YHW-mO5/view?usp=sharing'>Here</a>
            </div>
          </div>

          <div className='w-full pb-3'>
            <div className='mr-4 mt-3 float-left'><Image src={coderhouse} width='125' height='35'></Image></div>
            <div className='leading-8 text-gray-700 font-medium'>React JS Intensive Training
            </div>
            <div className='clear visible sm:invisible'></div>
            <div className='leading-8 text-gray-500'><a className='underline' target='_blank' href='https://www.coderhouse.es/'>CoderHouse</a> 08/2020</div>
            <div className='w-full p-4 my-3 bg-gray-100 font-mono text-sm'>
              Certificate: <a className='underline' target='_blank' href='https://drive.google.com/file/d/1HDqtQqvYNucFhes5yIQJFYN_oSFENrKy/view?usp=sharing'>Here</a>
            </div>
          </div>

          <div className='w-full pb-3'>
            <div className='mr-4 mt-3 float-left content-center'><Image src={regrowlarge} width='125' height='43'></Image></div>
            <div className='leading-8 text-gray-700 font-medium'>B2B Growth Marketing
            </div>
            <div className='clear visible sm:invisible'></div>
            <div className='leading-8 text-gray-500'><a className='underline' target='_blank' href='https://regrow.academy/'>Regrow Academy</a> 06/2020 </div>
            <div className='w-full p-4 my-3 bg-gray-100 font-mono text-sm'>
              Certificate: <a className='underline' target='_blank' href='https://drive.google.com/file/d/1z6YbdlK5d8SXlNnvyuuRylNQ5yLq6RFs/view?usp=sharing'>Here</a>
            </div>
          </div>
        </div>
        <a id='education'/>
        <div className='pt-8'>
          <h2 className='font-roboto font-bold mt-0'>Formal education</h2>
          <div className='w-full my-4 pb-3'>

            <div className='mr-4 float-left'><Image src={caece} width='50' height='50'></Image></div>
            <div className='leading-8 text-gray-700 font-medium'>Information Systems Engineer</div>
            <div className='leading-8 text-gray-500'><a target='_blank' className='underline' href='https://www.ucaece.edu.ar/es/'>Universidad CAECE</a> (AR) 2004-2008</div>
          </div>
          <div className='w-full my-4 pb-3'>
            <div className='mr-4 float-left'><Image src={ort} width='50' height='50'></Image></div>
            <div className='leading-8 text-gray-700 font-medium'>Bachelor's Degree Information Technology & Computer Science</div>
            <div className='leading-8 text-gray-500'><a href='' target='_blank' className='underline'>ORT Argentina</a> (AR) 1998-2002 </div>
          </div>
        </div>




      </div>

      <footer className=''>
        <div className='container w-full mx-auto px-2 sm:px-0 border-t content-center'>
          <p className='py-4 text-md mt-4 mb-4 text-gray-400'>This portfolio was written by me in JSX, under React Library with <a href='https://nextjs.org/'>Nextjs</a> and <a href='https://tailwindcss.com/'>tailwindcss</a> frameworks, hosted for free in <a href='https://vercel.com/'>vercel</a>.
            <br /> Whant this template for yourself? Sure, just contact me!</p>
        </div>
      </footer>

    </div>
  )
}