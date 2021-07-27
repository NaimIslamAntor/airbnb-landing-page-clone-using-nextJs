import Header from '../../../components/online/Header'

import OnlineExperience from '../../../components/online/OnlineExperience'

import Filter from '../../../components/online/Filter'

import Visit from '../../../components/online/Visit'

// import VisitCard from '../../../components/online/VisitCard'

import ScardContainer from '../../../components/online/ScardContainer';

import NtwContainer from '../../../components/online/NtwContainer';

import BottomBar from '../../../components/BottomBar';
import Load from '../../../components/online/Load';
import Footer from '../../../components/Footer';

const Online = ({ sliderDatas }) => {

   //console.log(sliderDatas);

    const btnListForFilter = [
        {
            url:"#",
            text: 'Great for groups',
        },

        {
            url:"#",
            text: 'Family friendly',
        },


        {
            url:"#",
            text: 'Animals',
        },

        {
            url:"#",
            text: 'Arts & writing',
        },


        {
            url:"#",
            text: 'Booking',
        },

        {
            url:"#",
            text: 'Cooking',
        },


        {
            url:"#",
            text: 'Dance',
        },

        {
            url:"#",
            text: 'Drinks',
        },

        {
            url:"#",
            text: 'Entertainment',
        },

        {
            url:"#",
            text: 'Fitness',
        },


        {
            url:"#",
            text: 'History & culture',
        },

        {
            url:"#",
            text: 'Magic',
        },

        
        {
            url:"#",
            text: 'Music',
        },


        {
            url:"#",
            text: 'Social impact',
        },

        {
            url:"#",
            text: 'Wellness',
        },

        {
            url:"#",
            text: 'Olympions & paralympions',
        },


        {
            url:"#",
            text: 'Designed for accessibilty',
        },



    ];

    return (
        <div className="get__margin__padding_for_online">

        <Header btns={btnListForFilter} />
        <OnlineExperience/>
        <Filter btns={btnListForFilter} />

        <Visit
        heading="Celebrate Pride around the world"
        datas={sliderDatas.firstSlider}
        />

        <Visit
        heading="Best Sellers"
        datas={sliderDatas.firstSlider}
        />

        <ScardContainer heading="Starting in the next 6 hours"
        datas={sliderDatas.thirdSlider}
        />


        <NtwContainer/>


        <Visit
        heading="Make plans this weekend"
        datas={sliderDatas.firstSlider}
        />

        <Load/>

        <BottomBar/>

        <Footer/>
        </div>
    )
}


export async function getStaticProps(){

    const req = await fetch('http://localhost:3000/api/online');

    const json = await req.json();

    return {
        props:{
           sliderDatas: json,
        }
    }
}

export default Online
