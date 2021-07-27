import st from '../../styles/online/Filter.module.css'
import TuneIcon from '@material-ui/icons/Tune';


import FilterList from './FilterList';


const Filter = ({btns}) => {
    return (
        <div className={st.filter}>
            <div className={st.filter__btndiv}>

            <button className={`${st.btn} ${st.btn__filter}`}><TuneIcon/>
            <span className={st.filterbtn__text}>Filter</span></button>

            <button className={`${st.btn} ${st.btn__filter}`}>Dates</button>

            <button className={`${st.btn} ${st.btn__filter}`}>Group Size</button>

            </div>

{/* 
            <div className={st.filter__listdiv}>

{
    btns.map(btn =>  <button data-url={btn.url} className={st.list__btn}>{btn.text}</button>)
}
           

            </div> */}
            {/* <div className={st.filterList__container}> */}
            <FilterList 
             status={{}}
            btns={btns}
            btnsStatus={{}}
            />
            {/* </div> */}
        </div>
    )
}

export default Filter
