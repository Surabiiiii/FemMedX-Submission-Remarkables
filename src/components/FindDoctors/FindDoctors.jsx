import React, { useState } from "react";
import styles from "./FindDoctors.module.css";
import SearchBar from "../SearchBar/Searchbar";
import cart from "./shopping-cart-simple.png";
import record from "./notebook.png";
import article from "./book-open.png";

export default function FindDoctors() {
  const [position, setPosition] = useState(0);
  const [position1, setPosition1] = useState(0);

  

  
  const handleNext1 = () => {
    if (position1 >= 0 && position1 < 4) {
      setPosition1(position1 + 1);
    }
  };

  const handleNext = () => {
    if (position >= 0 && position < 3) {
      setPosition(position + 1);
    }
  };
  const handlePrev1 = () => {
    if (position1 >= 1) {
      setPosition1(position1 - 1);
    }
  };
  const handlePrev = () => {
    if (position >= 1) {
      setPosition(position - 1);
    }
  };

  return (
    <>
      <div className={styles.headerDiv}>
        <div className={styles.header}>
          <div className={styles.headerTitle}>
            <h1>Healthcare At Your Doorsteps</h1> 
            <br></br>
            <h2>Find Trustworthy Doctors Instantly</h2>
          </div>
          <div className={styles.headerSmallTitle}>
            
          </div>
          <div className={styles.headerSearchBar}>
            <div>
              <SearchBar />
              <div className={styles.headerPopularSearchDiv}>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.headerIconDiv}>
        <div>
          <div className={styles.headerIcon}>
            <div> 
            
            <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8478 7.07227H17.6956V8.23798H18.8478V15.2323H17.4598C17.1636 15.7855 16.6147 16.1831 15.9674 16.2711V16.5338L15.5646 16.2894H9.14501C9.29266 16.3591 9.45724 16.398 9.63065 16.398H13.5036L17.1196 18.5936V16.398H18.8478C19.4832 16.398 19.9999 15.8752 19.9999 15.2323V8.23798C19.9999 7.59509 19.4832 7.07227 18.8478 7.07227ZM8.47852 15.2336V8.23673C8.47852 8.23715 8.47852 8.23757 8.47852 8.23798V15.2323C8.47852 15.2327 8.47852 15.2331 8.47852 15.2336Z" fill="white"/>
            <path d="M16.8256 4H4.53618C3.68898 4 3 4.68898 3 5.53618V14.7533C3 15.6005 3.68898 16.2894 4.53618 16.2894H6.84045V19.1828L11.6618 16.2894H16.8256C17.6728 16.2894 18.3618 15.6005 18.3618 14.7533V5.53618C18.3618 4.68898 17.6728 4 16.8256 4ZM16.8256 14.7533H11.2362L8.37663 16.4684V14.7533H4.53618V5.53618H16.8256V14.7533Z" fill="white"/>
            <path d="M6.84033 7.84033H14.5213V9.37651H6.84033V7.84033ZM6.84033 10.9127H12.217V12.4489H6.84033V10.9127Z" fill="white"/>
            </svg>
            

              <div>Consult with a doctor privately</div>
            </div>
            <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 7H18.8767L17.0989 15H8.5C7.11929 15 6 13.8807 6 12.5V7Z" stroke="white"/>
            <path d="M4 4H6V7.5" stroke="white"/>
            <path d="M9 19.5C9.82843 19.5 10.5 18.8284 10.5 18C10.5 17.1716 9.82843 16.5 9 16.5C8.17157 16.5 7.5 17.1716 7.5 18C7.5 18.8284 8.17157 19.5 9 19.5Z" fill="white"/>
            <path d="M15 19.5C15.8284 19.5 16.5 18.8284 16.5 18C16.5 17.1716 15.8284 16.5 15 16.5C14.1716 16.5 13.5 17.1716 13.5 18C13.5 18.8284 14.1716 19.5 15 19.5Z" fill="white"/>
            </svg>
            

              <div>Order Medicines</div>
            </div>
            <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 4.5H7C6.17157 4.5 5.5 5.17157 5.5 6V18C5.5 18.8284 6.17157 19.5 7 19.5H18C18.8284 19.5 19.5 18.8284 19.5 18V6C19.5 5.17157 18.8284 4.5 18 4.5Z" stroke="white"/>
            <path d="M8.5 5V19" stroke="white"/>
            <path d="M13.5 9V14" stroke="white"/>
            <path d="M16 11.5H11" stroke="white"/>
            <path d="M16 16.5H11" stroke="white"/>
            </svg>
            

              
              <div>Book test</div>
            </div>
           
          </div>
        </div>
      </div>
      <div className={styles.secondPage}>
        <div className={styles.secondPageSubject}>
          <div className={`${styles.secondPageFlexbox} ${styles.content}`}>
            <div className={styles.flex1}>
              <div>
                <div className={styles.flex1Heading}>
                  <h2>Don't Worry</h2>
                  <h2>You are Safe and Secure</h2>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>Anonymity</span>
                  </div>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>Personal Information stored on Highly Secured Servers  </span>
                  </div>
                </div>
                <div className={styles.readMoreBox}>
                  <a href="/">Read more</a>
                </div>
              </div>
            </div>
            <div className={styles.flex2}>
              <div>
                <div>
                  <img
                    src="https://img.freepik.com/free-vector/happy-woman-escaping-freedom-from-birdcage-free-female-person-coming-out-cage-flat-vector-illustration-depression-domestic-violence-abuse-recovery-concept-banner-landing-web-page_74855-21912.jpg?w=996&t=st=1668278215~exp=1668278815~hmac=47268dec462394a171dc4f88fe0324be8bea2f0b4a2a7a821159dc923e2ea695"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.iconBox}>
          </div>
        </div>
      </div>
      <div className={styles.thirdPage}>
        <div className={styles.secondPageSubject}>
          <div className={`${styles.secondPageFlexbox} ${styles.content}`}>
            <div className={styles.flex1}>
              <div style={{ position: "relative" }}>
                <div className={styles.flex1Heading}>
                  <h2 styles={{ display: "inline" }}>
                   <strong>Anonymous</strong>  Online Consultancy With Doctors.
                  </h2>
                  <div className={styles.flex1Heading2ndH2}></div>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span><span className={styles.bold_txt}>1500+</span> Verified doctors</span>
                  </div>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span><span className={styles.bold_txt}></span> Safety Guranteed</span>
                  </div>
                </div>
                <div className={`${styles.readMoreBox} ${styles.readMoreBox2}`}>
                  <a href="/">Book Your Appointment Right Now</a>
                </div>
                <div style={{ position: "relative" }}>
                  <div className={styles.testimonials}>
                    <div
                      className={styles.slide1}
                      style={{
                        left: `${position1 * -460}px`,
                      }}
                    >
                      
                    </div>
                  </div>
                  
                  
                </div>
              </div>
            </div>
            <div className={styles.flex2}>
              <div>
                <img src="https://img.freepik.com/free-vector/woman-setting-her-dates-appointment-booking_23-2148552955.jpg?w=740&t=st=1668283636~exp=1668284236~hmac=f358609d55fde6d162f7a96b9f27fd41755d6bf39497eccfd06550ee82aa81f5"></img>
              </div>
            </div>
          </div>
          <div className={styles.iconBox}>
            <a href="/"> </a>
            <a href="/"> </a>
            <a href="/"> </a>
            <a href="/"> </a>
            <a href="/"> </a>
            <a href="/"> </a>
          </div>
        </div>
      </div>

      <div className={styles.fifthPage}>
        <div className={styles.secondPageSubject}>
          <div className={`${styles.secondPageFlexbox} ${styles.content}`}>
            <div className={styles.flex1}>
              <div>
                <div className={styles.flex1Heading}>
                  <h2>Get Precise Consultations  </h2>
                  <h2>
                    <strong>With Your chosen level of Privacy .</strong>
                  </h2>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>100% Secured</span>
                  </div>
                </div>
                <div className={styles.tickBox}>
                  <div>
                    <i className="ion-checkmark-round"></i>
                    <span>No Personal Information</span>
                  </div>
                </div>

                <div className={styles.readMoreBox4}>
                  <div
                    className={`${styles.readMoreBox} ${styles.readMoreBox3}`}
                  >
                    <a href="/">Book Consultation</a>
                  </div>
                  

                </div>
              </div>
            </div>
            <div className={styles.flex2}>
              <div>
                <div>
                  <img
                    src="https://img.freepik.com/free-vector/professional-consulting-service-research-recommendation-idea-strategy-management-troubleshooting-help-clients-with-business-problems-isolated-flat-vector-illustration_613284-1560.jpg?w=1060&t=st=1668284745~exp=1668285345~hmac=3462c7ec0b9d86b978db467758014e5d2e69a3f132cebafaf0402b34e59180bd"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
