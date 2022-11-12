import React from "react";
import style from "./black.module.css"
const Black=()=>{
    return (
        <div className={style.trustmetrics}>
            <div className={style.black}>
                <div className={style.wrap} >
                <div className={style.eachmetric}>
                  <p className={style.metriccount}>50,000+</p>
                  <p className={style.namemetric}>Carefree Female Patients</p>
                </div>
                <div className={style.eachmetric}>
                  <p className={style.metriccount}>1,500+</p>
                  <p className={style.namemetric}>Trustworthy Doctors</p>
                </div>
                <div className={style.eachmetric}>
                  <p className={style.metriccount}>15+</p>
                  <p className={style.namemetric}>Specialities</p>
                </div>
                
                </div>
            </div>

        </div>
    )
}

export default Black