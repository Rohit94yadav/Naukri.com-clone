import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../AllStyles/JobPage.module.css";

export default function JobPage() {
    const [data, setdata] = useState([]);
    const [value, setValue] = useState("");

    useEffect(() => {
        loadUserData();
    }, []);

    const loadUserData = async () => {
        return await axios
            .get("http://localhost:3000/data")
            .then((res) => setdata(res.data))
            .catch((err) => console.log(err));
    };

    console.log(data);

    const handleSearch = async(e) => {
        e.preventDefault();
        return await axios.get(`http://localhost:3000/data?q=${value}`)
        .then((res)=>{
            setdata(res.data)
            setValue("");
        })
        .catch((err)=> console.log(err))
    }

    return (
        <div>
            <div className={styles.top1}>
                <div>
                    <div className={styles.tophead}>
                        <h2>Search Jobs</h2>
                    </div>
                    <div className={styles.topinput}>
                        <form onSubmit={handleSearch} >
                        <input
                            type="text"
                            placeholder="Search Jobs By Skills, Designation, Companies"
                            value={value}
                            onChange={(e)=> setValue(e.target.value)}
                        />

                        <button type="submit">SEARCH</button>
                        </form>
                    </div>
                </div>
            </div>
            <div>
                {data.map((el) => (
                    <Link className={styles.forlink} to={`/jobview/${el.id}`}>
                    <div key={el.id} className={styles.main}>
                        <div >
                            <div className={styles.maindiv}>
                                <h2>{el.title}</h2>
                                <img className={styles.image2} src={el.img} alt="" />
                            </div>
                            <div>
                                <h3>{el.company} </h3>
                                <h3>₹{el.salary}</h3>
                                <img className={styles.image}
                                    src="https://t4.ftcdn.net/jpg/01/03/95/35/360_F_103953522_hk1NS5f9dkP4Rhj8I2uIuTDukfv6Chmj.jpg"
                                    alt="location"
                                />
                                <h3>{el.location}</h3>
                            </div>
                            <div>
                                <img className={styles.image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIEBG4BHqBsjdhJ7jkunTe903SkPANWiTAbwmJSu3-e7415gizLZREoMcIdPk9RdP8T14&usqp=CAU" alt="page" />
                                <h3>{el.role}</h3>
                            </div>
                            <div>
                                <h3>Desktop Support  .  Laptop Support  .  Hardware Engineering</h3>
                            </div>
                            <div className={styles.maindiv}>
                                <h3>1 DAY AGO</h3>
                                <h3>☆ Save</h3>
                            </div>

                        </div>


                    </div>
                    </Link>

                ))}
                

                <div>

                </div>

            </div>
        </div>
    );
}
