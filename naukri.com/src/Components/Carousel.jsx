import React, { Component } from "react";
import Slider from "react-slick";
import styles from "../AllStyles/Caraousel.module.css"

export default function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        autoplay:true,
        autoplaySpeed:1300,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div >
          
            <Slider className={styles.firsttop} {...settings}>
                <div className={styles.first}>
                    <div className={styles.firstinner}>
                        <button><h2>Full Stack Developer</h2><h3>24.6K+ Jobs {">"}</h3></button>
                        <button><h2>Frontend Developer</h2><h3>3.1K+ Jobs {">"}</h3></button>
                        <button><h2>Engineering Manager</h2><h3>1.5K+ Jobs{">"}</h3></button>
                  
                        <button><h2>Mobile / App Developer</h2><h3>2.3K+ Jobs {">"}</h3></button>
                        <button><h2>DevOps Engineer</h2><h3>1.8K+ Jobs {">"}</h3></button>
                        <button><h2>Technical Lead</h2><h3>14.5K+ Jobs {">"}</h3></button>
                    </div>
                </div>

                <div className={styles.first}>
                    <div className={styles.firstinner}>
                        <button><h2>Automatic Test Engineer</h2><h3>2.2K+ Jobs {">"}</h3></button>
                        <button><h2>Technical Architect</h2><h3>8.5K+ Jobs {">"}</h3></button>
                        <button><h2>Data Scientist</h2><h3>773+ Jobs{">"}</h3></button>
                  
                        <button><h2>Cyber Security</h2><h3>436+ Jobs {">"}</h3></button>
                        <button><h2>Business Analyst</h2><h3>5.7K+ Jobs {">"}</h3></button>
                        <button><h2>Program Manager - Technology / IT</h2><h3>877K+ Jobs {">"}</h3></button>
                    </div>
                </div>

                <div className={styles.first}>
                    <div className={styles.firstinner}>
                        <button><h2>Product Manager</h2><h3>2.8K+ Jobs {">"}</h3></button>
                        <button><h2>Research Analyst</h2><h3>290+ Jobs {">"}</h3></button>
                        <button><h2>Functional Consultant</h2><h3>3.7K+ Jobs{">"}</h3></button>
                   
                        <button><h2>UI / UX Designer</h2><h3>905+ Jobs {">"}</h3></button>
                        <button><h2>Branch Manager</h2><h3>858+ Jobs {">"}</h3></button>
                        <button><h2>Chartered Accountant</h2><h3>1.6K+ Jobs {">"}</h3></button>
                    </div>
                </div>
            </Slider>
        </div>
    );
}
