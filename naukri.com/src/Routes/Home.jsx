import React from "react";

import styles from "../AllStyles/Home.module.css";
export default function Home() {
  return (
    <div>
      <div className={styles.top1}>
        <div>
          <div className={styles.tophead}>
            <h2>Search Jobs</h2>
          </div>
          <div className={styles.topinput}>
            <input
              type="text"
              placeholder="Search Jobs By Skills, Designation, Companies"
            />
            <button>SEARCH</button>
          </div>
        </div>
      </div>

      <div className={styles.second}>
        <div className={styles.second1}>
          <h1>Trending on Naukri today</h1>
        </div>
        <div className={styles.second2}>
            <div className={styles.second3}>
          <button><img src="https://static.naukimg.com/s/0/0/i/trending-naukri/remote.svg" alt="first" /><h2>Remote {">"} </h2></button>
          <button><img src="https://static.naukimg.com/s/0/0/i/trending-naukri/mnc.svg" alt="scnd" /><h2>MNC {">"}</h2></button>
          <button><img src="https://static.naukimg.com/s/0/0/i/trending-naukri/temporary-wfh.svg" alt="third" /><h2>Temp WFH {">"}</h2></button>
          <button><img src="https://static.naukimg.com/s/0/0/i/trending-naukri/sales.svg" alt="fourth" /><h2>Sales {">"}</h2></button>
          <button><img src="https://static.naukimg.com/s/0/0/i/trending-naukri/data-science.svg" alt="fifth" /><h2>Data Sci... {">"}</h2></button>
          <button><img src="https://static.naukimg.com/s/0/0/i/trending-naukri/hr.svg" alt="sixth" /><h2>HR {">"}</h2></button>

            </div>
            <div className={styles.second3}>
          <button><img src="https://static.naukimg.com/s/0/0/i/trending-naukri/software.svg" alt="seventh" /><h2>Software &... {">"}</h2></button>
          <button><img src="https://static.naukimg.com/s/0/0/i/trending-naukri/fortune-500.svg" alt="eighth" /><h2>Fortune 500 {">"}</h2></button>
          <button><img src="https://static.naukimg.com/s/0/0/i/trending-naukri/marketing.svg" alt="ninth" /><h2>Marketing {">"}</h2></button>
          <button><img src="https://static.naukimg.com/s/0/0/i/trending-naukri/supplychain.svg" alt="tenth" /><h2>Supply Ch... {">"}</h2></button>
          <button><img src="https://static.naukimg.com/s/0/0/i/trending-naukri/analytics.svg" alt="eleventh" /><h2>Analytics {">"}</h2></button>
          </div>
        </div>
      </div>





      
    
    



    </div>
  );
}
