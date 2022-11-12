import React from "react";
import style from "./howitworks.module.css";

const Howitworks = () => {
  return (
    <div className={style.howitworks}>
      <div className={style.howitworkswrap}>
        <h2 className={style.howitworkshead}>How it works</h2>
        <div className={style.howitworkssection}>
          <div className={style.eachprop}>
            <div className={style.eachpropimg}>
            <img src="https://img.freepik.com/free-vector/select-concept-illustration_114360-393.jpg?w=740&t=st=1668267586~exp=1668268186~hmac=2563d2e2b67d4c6ccdf5a5f7fd1e96dcbe0f3f88b310a32a2178d528bdd37305 "></img>

            </div>
            <div className={style.eachpropcontent}>
              <p className={style.desc}>Select symptoms or issue</p>
            </div>
          </div>
          <div className={style.eachprop}>
            <div className={style.eachpropimg}>
            <img src="https://img.freepik.com/free-vector/private-data-concept-illustration_114360-5172.jpg?w=740&t=st=1668270833~exp=1668271433~hmac=310ceba40acf68a539d98ba8b8c97157734015e51cc468839663f49c6c70b309"></img>

            </div>
            <div className={style.eachpropcontent}>
              <p className={style.desc}>Choose level of privacy</p>
            </div>
          </div>
          <div className={style.eachprop}>
            <div className={style.eachpropimg}>
            <img src="https://img.freepik.com/free-vector/medical-video-call-consultation-illustration_88138-415.jpg?w=826&t=st=1668267907~exp=1668268507~hmac=6baacab95491894f2e3ae08bc740ff93d453bda98f295a430654b5e11501fb91 " alt="Audio Call"></img>

            </div>
            <div className={style.eachpropcontent}>
              <p className={style.desc}>
                Audio/ video call based upon choice of anonymity 
              </p>
            </div>
          </div>
          <div className={style.eachprop}>
            <div className={style.eachpropimg}>
            <img src="https://cdn-icons-png.flaticon.com/512/1047/1047636.png?w=740&t=st=1668270997~exp=1668271597~hmac=71c73040027ede3d1e2ce7cb4c0bacb20d961a31b3890a0c5eb7309450ddc0e2" alt="prescription"></img>

            </div>
            <div className={style.eachpropcontent}>
              <p className={style.desc}>
                Get prescription and follow-up details
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howitworks;
