import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadUserDataById } from "./Api";
import styles from "../AllStyles/JobPage.module.css";

export default function JobView() {
    const [data, setdata] = useState([]);
    const [apply, setApply] = useState(false);

    const handleApplyJob = () => {
        setApply(!apply);
        alert("Applied Successfully");
    };

    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        loadUserDataById(id)
            .then((res) => {
                console.log(res);
                setdata(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    console.log("hi", data);

    return (
        <div className={styles.mainhead}>
            <div>
                <div className={styles.main}>
                    <div>
                        <div className={styles.maindiv}>
                            <h2>{data.title}</h2>
                            <img className={styles.image2} src={data.img} alt="" />
                        </div>
                        <div>
                            <h3>{data.company} </h3>
                            <h3>₹{data.salary}</h3>
                            <img
                                className={styles.image}
                                src="https://t4.ftcdn.net/jpg/01/03/95/35/360_F_103953522_hk1NS5f9dkP4Rhj8I2uIuTDukfv6Chmj.jpg"
                                alt="location"
                            />
                            <h3>{data.location}</h3>
                        </div>
                        <div>
                            <img
                                className={styles.image}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIEBG4BHqBsjdhJ7jkunTe903SkPANWiTAbwmJSu3-e7415gizLZREoMcIdPk9RdP8T14&usqp=CAU"
                                alt="page"
                            />
                            <h3>{data.role}</h3>
                        </div>
                        <div>
                            <h3>Desktop Support . Laptop Support . Hardware Engineering</h3>
                        </div>
                        <div className={styles.maindiv}>
                            <h3>1 DAY AGO</h3>
                            <h3>☆ Save</h3>
                            <button onClick={handleApplyJob} className={styles.applybtn}>
                                {apply ? "Applied" : "Apply For This Job"}
                            </button>
                        </div>
                    </div>
                </div>

                <div></div>

                <div className={styles.description}>
                    <div className={styles.description1}>
                        <h1>Job Description</h1>
                        <p>
                            Enterprise Performance Analyst <br />
                            Find endless opportunities to solve our clients' toughest
                            challenges, as you work with exceptional people, the latest tech and
                            leading companies across industries. <br />
                            Practice: CFO & Enterprise Value, Industry Consulting, Capability
                            Network I Areas of Work: Enterprise Performance Management (EPM),
                            Enterprise Planning & Analytics | Level: Analyst | | <br />
                            Explore an Exciting Career at Accenture <br />
                            Are you an outcome-oriented problem solver? Do you enjoy working on
                            transformation strategies for global clients? Does working in an
                            inclusive and collaborative environment spark your interest? <br />
                            Then, Accenture Strategy and Consulting is the right place for you
                            to explore limitless possibilities. <br />
                            As a part of the Capability Network CFO & Enterprise Value team, you
                            will support CFOs and finance organizations to craft and implement
                            strategies anchored on digital disruption, new age operating models
                            and best-in-class practices, to drive market differentiation. <br />
                            Together, let’s enable enterprise innovation, and deliver tangible
                            results and outcomes for our clients. Help us unlock new value in a
                            disruptive world, with the following initiatives: <br />
                        </p>

                        <br />
                        <br />
                        <li>
                            Creating enterprise performance management process & blueprint for
                            the clients
                        </li>
                        <li>
                            Building and recommending planning, budgeting & forecasting solution
                            delivery approach, leading practices
                        </li>
                        <li>
                            Interacting with client, drive workshops to gather and analyse
                            business requirements
                        </li>
                        <li>
                            Aligning business requirements and best practices to implement a
                            technical solution
                        </li>
                        <li>Preparation and facilitation of application design sessions</li>
                        <li>
                            Configuration of planning application components to deliver solution
                        </li>
                        <li>
                            Support/lead individual work streams associated with planning
                            solution delivery. Examples include planning/ <br />{" "}
                            budgeting/forecasting workstream lead, functional test cycle lead,
                            application configuration and unit testing lead, training lead
                        </li>
                        <li>
                            Preparation of key deliverables such as design documents, test
                            documentation, training materials and administration/procedural{" "}
                            <br /> guides
                        </li>
                        <li>
                            Assistance with data validation, conversion, and interfacing
                            activities.
                            <br /> Bring your best skills forward to excel in the role:
                        </li>
                        <li>
                            {" "}
                            Strong understanding of planning, budgeting, and forecasting and
                            finance concepts
                        </li>
                        <li>
                            Aptitude with Microsoft spreadsheet, power point, process designing
                            etc.
                        </li>
                        <li>
                            {" "}
                            Proven ability to work creatively and analytically in a
                            problem-solving environment
                        </li>
                        <li>
                            Proven success in contributing to a team-oriented environment.
                            Client experience preferred
                        </li>
                        <li>
                            Strong communication (written and verbal), analytical and
                            organizational skills
                        </li>
                        <li>
                            Cross-cultural competence with an ability to thrive in a dynamic
                            consulting environment
                        </li>
                        {""}
                        {""}
                        {""}
                        <p>
                            Qualifications <br />
                            Your experience counts! <br />
                            Hands-on experience in planning tool implementations in any of the
                            following platforms: <br />
                            Oracle PBCS/E-PBCS/ Hyperion Planning <br />
                            Anaplan <br />
                            OneStream <br />
                            Tagetik <b></b>
                            Jedox <br />
                            1 to 3 years of relevant experience in Budgeting/Forecasting and/or
                            Financial Reporting/Analysis processes (FP&A) <br />
                            What s in it for you? <br />
                            An opportunity to work on transformative projects with key G2000
                            clients <br />
                            Potential to Co-create with leaders in strategy, industry experts,
                            enterprise function practitioners and, business intelligence
                            professionals to shape and recommend innovative solutions that
                            leverage emerging technologies. <br />
                            Ability to embed responsible business into everything from how you
                            service your clients to how you operate as a responsible
                            professional. <br />
                            Personalized training modules to develop your strategy & consulting
                            acumen to grow your skills, industry knowledge and capabilities{" "}
                            <br />
                            Opportunity to thrive in a culture that is committed to accelerate
                            equality for all. Engage in boundaryless collaboration across the
                            entire organization. <br />
                        </p>

                        <p>
                            RoleFinancial Analyst <br />
                            Industry TypeIT Services & Consulting <br />
                            Functional AreaFinance & Accounting <br />
                            Employment TypeFull Time, Permanent <br />
                            Role CategoryFinance <br />
                            Education <br />
                            UG :Any Graduate <br />
                            PG :Any Postgraduate <br />
                        </p>
                    </div>
                    <h3>Key Skills</h3>
                    <div className={styles.allbuttons}>
                        <button>✩ Enterprise Planning</button>
                        <button> ✩ Budegting</button>
                        <button>✩ Analytics</button>
                        <button>Financial Analysis</button>
                        <button>Financial Reporting</button>
                        <button>Anaplan</button>
                        <button>Oracle</button>
                        <button>Forecasting</button>
                        <button>Hyperion Planning</button>
                    </div>
            <div className={styles.description1}>
                <h2>About Company</h2>
                <p>
                    Accenture is a global professional services company with leading capabilities in digital, cloud and security. Combining unmatched  <br />
                    experience and specialized skills across more than 40 industries, we offer Strategy and Consulting, Interactive, Technology <br />
                    and Operations services€”all powered by the world€™s largest network of Advanced <br />
                    Technology and Intelligent Operations centers. Our 514,000 people deliver on the promise of technology and human <br />
                    ingenuity every day, serving clients in more than 120 countries. We embrace the power of change to create <br />
                    value and shared success for our clients, people, shareholders, partners and communities.
                </p>
                <p>Address {""} {"   "} {"     "} Plant 3,Godrej and Boyce Compound, MUMBAI, Maharashtra, India</p>
            </div>
                </div>
            </div>

        </div>
    );
}
