import { useState } from 'react';
import Head from 'next/head'
import Navbar from '../components/Navbar';
import HeaderImage from '../components/HeaderImage';
import styles from '../styles/Home.module.css'
import NearBy from '../components/NearBy';
import LiveAnyWhereContainer from '../components/LIveAnyWhereContainer'
import GreatestOutdoor from '../components/GreatestOutdoor';
import DiscoverExp from '../components/DiscoverExp';

import InspirationForFuture from '../components/InspirationForFuture';
import Footer from '../components/Footer';

export default function Home({nearby, liveanywhere, discoverexp}) {

  console.log(discoverexp)
  const greatestCompSecObjFisStyle = {
    "color": "#fff"
  }

  const greatestCompSecObjSecStyle =   {
    "backgroundColor": "#fff",
    "color": "rgb(34, 34, 34)"
  
  }

  return (
    <div>
      <Head>
        <title>Airbnb landing page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <div className={styles.covid_bar}>
         <a className={styles.covid_link} href="https://www.airbnb.com/resources/hosting-homes?persona=guest">
         Get the latest on our COVID-19 response</a>
       </div>

       <Navbar/>

       <HeaderImage
       image="/images/headerbg1.webp"
        imageBottomLine="Made possible by Hosts" />
       <NearBy nearbyHeading="Explore nearby" datas={nearby} />

      <LiveAnyWhereContainer datas={liveanywhere}/>

      <GreatestOutdoor
      key={"1"}
      image={{img1: "greatestlocation.webp", img2: "greatestlocation2.webp"}}
      greatestOutDoorHeadingpartone="the"
      greatestOutDoorHeadingparttwo="greatest outdoors"
      greatestOutDoorSubHeading="Whishlists Curated by Airbnb"
      greatestOutDoorBtnText="Get inspired"
      outdoorStyleObject={{}}
      btnStyleObject={{}} />
       

      <DiscoverExp
      heading="Discover Experiences"
      subheading="Unique activities with local experts—in person or online."
      datas={discoverexp} />
      

      <GreatestOutdoor
      key={"2"}
      image={{img1: "h2.webp", img2: "h1.webp"}}

      greatestOutDoorHeadingpartone="Become a host"
      greatestOutDoorHeadingparttwo=""

      greatestOutDoorSubHeading={["Earn extra income and unlock new", <br/>, 
                                   "opportunities by sharing your space."]}
      greatestOutDoorBtnText="Learn more"

      outdoorStyleObject={greatestCompSecObjFisStyle}

      btnStyleObject={greatestCompSecObjSecStyle} />


      <InspirationForFuture
        inspirationHeading="Inspiration for future getaways"
      />

      <Footer/>


    </div>
  )
}


export async function getStaticProps(){
  const req1 = await fetch("http://localhost:3000/api/nearby");

  const req2 = await fetch("http://localhost:3000/api/liveanywhere");

 const req3 = await fetch("http://localhost:3000/api/discoverexp");

  const result1 = await req1.json();

  const result2 = await req2.json();

const result3 = await req3.json();

  return{
      props:{
        nearby: result1,
        liveanywhere: result2,
      discoverexp: result3,
      }
  }
}
