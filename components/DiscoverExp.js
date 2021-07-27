import Link from 'next/link';
import st from '../styles/DiscoverExp.module.css';
import DiscoverBox from './DiscoverBox';


const DiscoverExp = ({ heading, subheading, datas }) => {

    return (
        <div className={st.discoverexp__section}>
           <h2 className={st.doscover__heading}>{heading}</h2>
           <h3 className={st.discover__subheading}>{subheading}</h3>

           <div className={st.discover__content__box}>

          {
              datas.map(data =>  <Link href={data.url}><a><DiscoverBox key={data.id} img={data.img} heading={data.heading} subheading={data.subheading}/></a></Link>)
          }


           </div>
        </div>
    )
}

export default DiscoverExp;