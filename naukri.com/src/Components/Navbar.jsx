import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <div>
            <div className={styles.navbar}>
                <div className={styles.dropdown}>
                    <div>
                        <Link to="/">
                            <img className={styles.navlogo}
                                src="https://static.naukri.com/s/4/100/i/naukri_Logo.png"
                                alt="navlogo"
                            />
                        </Link>
                    </div>
                </div>

                <div className={styles.dropdown}>
                    <button className={styles.dropbtn}>JOBS</button>
                    <div className={styles.dropdowncontent}>
                        <div>
                            <a>Search Jobs</a>
                            <a>Create Free Job ALert</a>
                        </div>
                        <div>
                            <a>Jobs By Location</a>
                            <a>Job By Skill</a>
                            <a>Job By Designation</a>
                            <a>Job By Company</a>
                            <a>Job By Catagory</a>
                            <a>Browse All Jobs</a>
                        </div>
                    </div>
                </div>

                <div className={styles.dropdown}>
                    <button className={styles.dropbtn}>RECRUITERS</button>
                    <div className={styles.dropdowncontent}>
                        <div>
                            <a>Browse All Recruiters</a>
                            <a>Recruiter Connection</a>
                            <a>Go To Naukri Recruiter</a>
                        </div>
                    </div>
                </div>

                <div className={styles.dropdown}>
                    <button className={styles.dropbtn}>COMPANIES</button>
                    <div className={styles.dropdowncontent}>
                        <div>
                            <a>Browse All Companies</a>
                            <a>About Companies</a>
                            <a>Write Company Review</a>
                            <a>Write Company Advice</a>
                            <a>Company Reviews</a>
                            <a>Company Salaries</a>
                        </div>
                    </div>
                </div>

                <div className={styles.dropdown}>
                    <button className={styles.dropbtn}>TOOLS</button>
                    <div className={styles.dropdowncontent}>
                        <div>
                            <a>Career Dashboard</a>
                            <a>Your Next Career Move</a>
                            <a>Skills Trends</a>
                            <a>Naukri Lab</a>
                        </div>
                    </div>
                </div>

                <div className={styles.dropdown}>
                    <button className={styles.dropbtn}>Services</button>
                    <div className={styles.dropdowncontent}>
                        <div>
                            <div>
                                <h3>Resume Writing</h3>
                                <a>Text Resume</a>
                                <a>Visual Resume</a>
                                <a>Resume Quality Score - Free</a>
                                <a>Resume Samples</a>
                            </div>
                            <div>
                                <h3>Jobs For You</h3>
                                <a>Jobs4U</a>
                            </div>
                        </div>

                        <div>
                            <div>
                                <h3>Recruiter Reach</h3>
                                <a>Resume Display</a>
                                <a>Priority Applicant</a>
                                <a>Recruiter Connection</a>
                                <a>Job Search Booster</a>
                            </div>
                            <div>
                                <h3>Other</h3>
                                <a>Help/FAQ</a>
                                <a>Career Advice</a>
                                <a>Contact Us</a>
                            </div>
                            <div>
                                <h3>Monthly Subscription</h3>
                                <a>Basic & Premium Plans</a>
                            </div>
                        </div>

                        <div>
                            <div>
                                <h3>Courses / Certifications</h3>
                                <a>Data Science</a>
                                <a>Machine Learning</a>
                                <a>Big Data</a>
                                <a>Programming</a>
                                <a>Business Analytics</a>
                                <a>Project Management</a>
                                <a>Web Design</a>
                                <a>DevOps And Cloud Computing</a>
                                <a>Marketing</a>
                                <a>Accounting and Finance</a>
                                <a>Banking</a>
                                <a>Logistics And Supply Chain</a>
                                <a>Strategy And Leadership</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.dropdown}>
                    <button className={styles.dropbtn}>TOOLS</button>
                    <div className={styles.dropdowncontent}>
                        <div>
                            <div>
                                <h3>career Tools</h3>
                                <a>Naukri Blog</a>
                                <a>FAQ</a>
                                <a>Take Home Calculator</a>
                            </div>
                            <div>
                                <h3>Study Abroad</h3>
                                <a>MBA</a>
                                <a>MS</a>
                                <a>SOP</a>
                                <a>GMAT</a>
                                <a>IELTS</a>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3>Top Courses & Colleges</h3>
                                <a>MBA</a>
                                <a>MBA Colleges In India</a>
                                <a>Top MBA Colleges</a>
                                <a>Engineering</a>
                                <a>Engineering Colleges</a>
                                <a>Top Engineering Colleges</a>
                                <a>BBA/BBM</a>
                                <a>BHM</a>
                                <a>BCA,DCA,BSc CS/IT</a>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3>Top Exams</h3>
                                <a>JEE Main</a>
                                <a>JEE Advanced</a>
                                <a>BCECE</a>
                                <a>GATE</a>
                                <a>CAT</a>
                                <a>SNAP</a>
                                <a>MAT</a>
                                <a>NEET</a>
                                <a>SBI PO</a>
                                <a>IBPS PO</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.dropdown}>
                    <img
                        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogIDxwYXRoIGQ9Im0yMzYuNjQgNDU2LjM4YzAgMy40OTIyIDEuNjU2MiA2Ljc5MyA0LjQ2ODggOC44OTQ1IDIuODEyNSAyLjEwMTYgNi40NTMxIDIuNzM4MyA5LjgxMjUgMS43MzA1IDIuMTQ0NS0wLjYzNjcyIDQuMzk0NS0wLjk3NjU2IDYuNjg3NS0wLjk3NjU2aDIzNi43OWMyLjI5MyAwIDQuNTQzIDAuMzM5ODQgNi42ODc1IDAuOTc2NTYgMy4zNTk0IDEuMDA3OCA3IDAuMzcxMDkgOS44MTI1LTEuNzMwNSAyLjgxMjUtMi4xMDE2IDQuNDY4OC01LjQwMjMgNC40Njg4LTguODk0NXYtMTEwLjAyYzAtMzYuOTM4LTE0LjY4LTcyLjM4My00MC44MTYtOTguNTA0LTI2LjEyMS0yNi4xMzctNjEuNTY2LTQwLjgxNi05OC41MDQtNDAuODE2aC0wLjA4OTg0NGMtMzYuOTM4IDAtNzIuMzgzIDE0LjY4LTk4LjUwNCA0MC44MTYtMjYuMTM3IDI2LjEyMS00MC44MTYgNjEuNTY2LTQwLjgxNiA5OC41MDR2MTEwLjAyem0yNTYuNTMtMTIuNTUxaC0yMzQuMzN2LTk3LjQ2OWMwLTMxLjA2MiAxMi4zNDQtNjAuODU1IDM0LjMwNS04Mi44MTYgMjEuOTYxLTIxLjk2MSA1MS43NTQtMzQuMzA1IDgyLjgxNi0zNC4zMDVoMC4wODk4NDRjMzEuMDYyIDAgNjAuODU1IDEyLjM0NCA4Mi44MTYgMzQuMzA1IDIxLjk2MSAyMS45NjEgMzQuMzA1IDUxLjc1NCAzNC4zMDUgODIuODE2eiIvPgogIDxwYXRoIGQ9Im01NDAuMDIgNDg5LjQ4di0wLjA0Mjk2OWMwLTEyLjA5LTQuNzk2OS0yMy42OTUtMTMuMzQ4LTMyLjI0Ni04LjU1NDctOC41NTQ3LTIwLjE1Ni0xMy4zNjMtMzIuMjYyLTEzLjM2M2gtMjM2LjgyYy0xMi4xMDUgMC0yMy43MDcgNC44MDg2LTMyLjI2MiAxMy4zNjMtOC41NTQ3IDguNTU0Ny0xMy4zNDggMjAuMTU2LTEzLjM0OCAzMi4yNDZ2MC4wNDI5NjljMCAxMi4wOSA0Ljc5NjkgMjMuNjk1IDEzLjM0OCAzMi4yNDYgOC41NTQ3IDguNTU0NyAyMC4xNTYgMTMuMzYzIDMyLjI2MiAxMy4zNjNoMjM2LjgyYzEyLjEwNSAwIDIzLjcwNy00LjgwODYgMzIuMjYyLTEzLjM2MyA4LjU1NDctOC41NTQ3IDEzLjM0OC0yMC4xNTYgMTMuMzQ4LTMyLjI0NnptLTIyLjE5OS0wLjA0Mjk2OXYwLjA0Mjk2OWMwIDYuMjE0OC0yLjQ1NyAxMi4xNjQtNi44NTE2IDE2LjU1OS00LjM5NDUgNC4zNzg5LTEwLjM0NCA2Ljg1MTYtMTYuNTU5IDYuODUxNmgtMjM2LjgyYy02LjIxNDggMC0xMi4xNjQtMi40NzI3LTE2LjU1OS02Ljg1MTYtNC4zOTQ1LTQuMzk0NS02Ljg1MTYtMTAuMzQ0LTYuODUxNi0xNi41NTl2LTAuMDQyOTY5YzAtNi4xOTkyIDIuNDU3LTEyLjE2NCA2Ljg1MTYtMTYuNTQ3IDQuMzk0NS00LjM5NDUgMTAuMzQ0LTYuODY3MiAxNi41NTktNi44NjcyaDIzNi44MmM2LjIxNDggMCAxMi4xNjQgMi40NzI3IDE2LjU1OSA2Ljg2NzIgNC4zOTQ1IDQuMzc4OSA2Ljg1MTYgMTAuMzQ0IDYuODUxNiAxNi41NDd6Ii8+CiAgPHBhdGggZD0ibTMzNy44NSAyMTguMTRjMC0yMS4wOSAxNy4xMDktMzguMjI3IDM4LjE5NS0zOC4yMjcgMjEuMDc0IDAgMzguMTg0IDE3LjEzNyAzOC4xODQgMzguMjI3IDAgNi4xMjg5IDQuOTcyNyAxMS4wOTggMTEuMDk4IDExLjA5OCA2LjEyODkgMCAxMS4wOTgtNC45NzI3IDExLjA5OC0xMS4wOTggMC0zMy4zNDQtMjcuMDU1LTYwLjQyNi02MC4zODMtNjAuNDI2LTMzLjMyOCAwLTYwLjM5NSAyNy4wODItNjAuMzk1IDYwLjQyNiAwIDYuMTI4OSA0Ljk3MjcgMTEuMDk4IDExLjA5OCAxMS4wOTggNi4xMjg5IDAgMTEuMDk4LTQuOTcyNyAxMS4wOTgtMTEuMDk4eiIvPgogIDxwYXRoIGQ9Im00MjQuMSA1MjRjMCAyNi41NTEtMjEuNTQ3IDQ4LjA5OC00OC4wOTggNDguMDk4cy00OC4wOTgtMjEuNTQ3LTQ4LjA5OC00OC4wOThjMC02LjEyODktNC45NzI3LTExLjA5OC0xMS4wOTgtMTEuMDk4LTYuMTI4OSAwLTExLjA5OCA0Ljk3MjctMTEuMDk4IDExLjA5OCAwIDM4LjgwNSAzMS40OTIgNzAuMjk3IDcwLjI5NyA3MC4yOTcgMzguODA1IDAgNzAuMjk3LTMxLjQ5MiA3MC4yOTctNzAuMjk3IDAtNi4xMjg5LTQuOTcyNy0xMS4wOTgtMTEuMDk4LTExLjA5OC02LjEyODkgMC0xMS4wOTggNC45NzI3LTExLjA5OCAxMS4wOTh6Ii8+CiA8L2c+Cjwvc3ZnPgo="
                        alt="bellicon"
                    />
                </div>

                <div className={styles.dropdown}>
                    <Link to="/login">Login</Link>
                </div>

                <div className={styles.dropdown}>
                    <Link to="/signup">SignUp</Link>
                </div>
            </div>
        </div>
    );
}
