import React from "react";
import style from "./faq.module.css"

const Faq=()=>{
    return(
        <div className={style.section}>
            <div className={style.wrap}>
                <h2 className={style.heading}>Q&A</h2>
                <div className={style.container} >
                    <div className={style.gridrow}>
                        <section className={style.gridrowcol} >
                            <div className={style.cont}>
                              <h3 className={style.accodiantext}>Why secure doctor consultation?</h3>
                              <p className={style.accodiantextsub}>
                                  <span>Woman usually do not feel free to talk about their health issues and there is taboo around the topic. Hence private and secure doctor consultations are needed to solve these issues </span>
                                    <a className={style.link1} href="/video-consult">Read More</a>
                              </p>
                            </div>
                        </section>
                        <section className={style.gridrowcol} >
                            <div className={style.cont}>
                              <h3 className={style.accodiantext}>Why secure doctor consultation?</h3>
                              <p className={style.accodiantextsub}>
                                  <span>Woman usually do not feel free to talk about their health issues and there is taboo around the topic. Hence private and secure doctor consultations are needed to solve these issues</span>
                                    <a className={style.link1} href="/video-consult">Read More</a>
                              </p>
                            </div>
                        </section>
                        <section className={style.gridrowcol} >
                            <div className={style.cont}>
                              <h3 className={style.accodiantext}>Why secure doctor consultation?</h3>
                              <p className={style.accodiantextsub}>
                                  <span>Woman usually do not feel free to talk about their health issues and there is taboo around the topic. Hence private and secure doctor consultations are needed to solve these issues </span>
                                    <a className={style.link1} href="/video-consult">Read More</a>
                              </p>
                            </div>
                        </section>
                        <section className={style.gridrowcol} >
                            <div className={style.cont}>
                              <h3 className={style.accodiantext}>Why secure doctor consultation?</h3>
                              <p className={style.accodiantextsub}>
                                  <span>Woman usually do not feel free to talk about their health issues and there is taboo around the topic. Hence private and secure doctor consultations are needed to solve these issues </span>
                                    <a className={style.link1} href="/video-consult">Read More</a>
                              </p>
                            </div>
                        </section>
                        
                      
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Faq