import React from "react";

import styles from "../AllStyles/Login.module.css";

import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../Context/AuthContext";

import axios from "../api/axios";
const LOGIN_URL = "/auth";

export default function Login() {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg("");
    }, [user, pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                LOGIN_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });
            setUser("");
            setPwd("");
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg("No Server Response");
            } else if (err.response?.status === 400) {
                setErrMsg("Missing Username or Password");
            } else if (err.response?.status === 401) {
                setErrMsg("Unauthorized");
            } else {
                setErrMsg("Login Failed");
            }
            errRef.current.focus();
        }
    };

    return (
        <div className={styles.firstmain}>
            <div className={styles.first}>
                <div className={styles.first1}>
                    <h2>New to Naukri?</h2>
                    <h4>
                        <img
                            className={styles.firsttick}
                            src="https://i.pinimg.com/originals/72/bc/c0/72bcc094f146262fc26464c300253c87.jpg"
                            alt="tick"
                        />{" "}
                        click apply using naukri profile.
                    </h4>
                    <h4>
                        <img
                            className={styles.firsttick}
                            src="https://i.pinimg.com/originals/72/bc/c0/72bcc094f146262fc26464c300253c87.jpg"
                            alt="tick"
                        />{" "}
                        Get relevant job recommendations.
                    </h4>
                    <h4>
                        <img
                            className={styles.firsttick}
                            src="https://i.pinimg.com/originals/72/bc/c0/72bcc094f146262fc26464c300253c87.jpg"
                            alt="tick"
                        />{" "}
                        Showcase profile to top companies and consultants.
                    </h4>
                    <h4>
                        <img
                            className={styles.firsttick}
                            src="https://i.pinimg.com/originals/72/bc/c0/72bcc094f146262fc26464c300253c87.jpg"
                            alt="tick"
                        />
                        Know application status on applied jobs.
                    </h4>

                    <button className={styles.firstbutton}>Register For Free</button>
                </div>
                <div className={styles.first1}>
                    <img
                        className={styles.firstimg}
                        src="https://static.naukimg.com/s/5/105/i/register.png"
                        alt="logo"
                    />
                </div>
            </div>

            <div className={styles.second}>
                {success ? (
                    <section>
                        <h1>You are logged in!</h1>
                        <br />
                        <p>
                            <a href="http://localhost:3002/">Go to Home</a>
                        </p>
                    </section>
                ) : (
                    <section>
                        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                        <h2>Login</h2>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="">Email ID / Username</label>
                            <input
                                className={styles.secondinput}
                                type="text"
                                id="username"
                                placeholder="Enter Email ID / Username"
                                ref={userRef}
                               
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                required
                            />
                            <br />
                            <br />
                            <label htmlFor="">Password</label>
                            <input
                                className={styles.secondinput}
                                id="password"
                                placeholder="Enter Password"
                                type="password"
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                required
                            />
                                
                            <button className={styles.secondbutton1}>Login</button>
                        </form>
                        <h4>Use OTP to Login</h4>
                        <h4>Or</h4>
                        
                        <button className={styles.secondbutton2}>
                            <img
                                className={styles.secondimg}
                                src="https://static.naukimg.com/s/5/105/i/ic-google.png"
                                alt="icon"
                            />
                            Sign in with Google
                        </button>
                    </section>
                )}
            </div>
        </div>
    );
}
