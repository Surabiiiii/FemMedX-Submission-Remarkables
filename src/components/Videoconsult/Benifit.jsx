import React from "react";
import style from "./benifit.module.css";

const Benifit = () => {
  return (
    <div className={style.benifitsection}>
      <div className={style.wrap}>
        <h2 className={style.heading}>Benefits of Private Consultations</h2>
        <div className={style.card}>
          <div className={style.grid} id="benifit_card">
            <div className={style.gridcont}>
              <div className={style.gridcont1}>
                <h3 className={style.gridcont1head}>
                <img src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png" alt="a"
                className={style.tick}
                />
                  Consult Trust-worthy Doctors
                </h3>
                <p className={style.gridcont1para}>
                  Connect with a specialist or doctor securely with no hassles and full security
                </p>
              </div>
            </div>
            <div className={style.gridcont}>
              <div className={style.gridcont1}>
                <h3 className={style.gridcont1head}>
                <img src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png" alt="a"
                className={style.tick}
                />
                  Trouble-free and Anonymous
                </h3>
                <p className={style.gridcont1para}>
                  Start a consultation or do video consultation at the scheduled time as per your choice.
                </p>
              </div>
            </div>
            <div className={style.gridcont}>
              <div className={style.gridcont1}>
                <h3 className={style.gridcont1head}>
                <img src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png" alt="a"
                className={style.tick}
                />
                  Secure Consultations
                </h3>
                <p className={style.gridcont1para}>
                  Be confident that your session will be private and secure
                </p>
              </div>
            </div>
            <div className={style.gridcont}>
              <div className={style.gridcont1}>          
              </div>
            </div>
            <div className={style.gridcont}>
              <div className={style.gridcont1}>
                <h3 className={style.gridcont1head}>
                <img src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png" alt="a"
                className={style.tick}
                />
                  No Personal Questions asked
                </h3>
                <p className={style.gridcont1para}>
                Be as anonymous as you want, no personal questions asked except regarding health issue
                </p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};
export default Benifit;
