import st from '../../styles/online/OnlineExperience.module.css'

const OnlineExperience = () => {
    return (
        <div className={st.online__experienc}>

       {/* text blcok */}
           <div className={st.text__image__block}>
           <div className={st.text}>
           <h1 className={st.exp__headline}>
           Online<br/> Experiences
           </h1>

           <p className={st.exp__paragraph}>
           Find unique activities led by one-of-a-kind<br/> hosts — all without leaving home.
           </p>
           </div>
           </div>



        </div>
    )
}

export default OnlineExperience
