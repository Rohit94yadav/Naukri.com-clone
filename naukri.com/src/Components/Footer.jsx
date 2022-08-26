import React from 'react'
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <div>
      <div className={styles.footer}>


        <div className={styles.footer1}>
            <div>
                <h3>Information</h3>
                <p>About Us</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Careers with Us</p>
                <p>Sitemap</p>
                <p>Contact Us</p>
                <p>FAQs</p>
                <p>Summons / Notices</p>
                <p>Grievances</p>
                <p>Fraud Alert</p>
                <p>Trust and Safety</p>

            </div>
            <div className={styles.avatar1}>
                <h3>Naukri on Mobile</h3>
                <img src="https://thumbs.dreamstime.com/b/google-play-app-store-icons-google-play-app-store-icons-editable-vector-illustration-isolated-white-background-123024624.jpg" alt="playstore" />
            </div>
        </div>

        <div className={styles.footer1}>
            <div>
                <h3>Jobseekers</h3>
                <p>Upload Resume</p>
                <p>Search Jobs</p>
                <p>Create Job Alert</p>
                <p>Report a Problem</p>
                <p>Naukri Blogs</p>
            </div>

            <div>
                <h3>Browse Jobs</h3>
                <p>Browse All Jobs</p>
                <p>Premium MBA Jobs</p>
                <p>Premium Engineering Jobs</p>
                <p>Govt. Jobs</p>
                <p>International Jobs</p>
                <p>Jobs in Gulf</p>
                <p>Jobs by Company</p>
                <p>Jobs by Category</p>
                <p>Jobs by Designation</p>
                <p>Jobs by Location</p>
                <p>Jobs by Skill</p>
            </div>

        </div>

        <div className={styles.footer1}>
            <div>
                <h3>Jobseeker Services</h3>
                <p>Priority Applicant</p>
                <p>Resume Display</p>
                <p>Resume Writing</p>
                <p>Jobs4U</p>
                <p>Recruiter Connection</p>
                <p>Job Search Booster</p>

            </div>
            <div>
                <h3>Naukri Learning</h3>
                <p>Software and Technology</p>
                <p>Artificial Intelligence and Data Science</p>
                <p>Management</p>
                <p>Finance</p>
                <p>Creativity and Design</p>
                <p>Emerging Technologies</p>
                <p>Engineering-non CS</p>
                <p>Healthcare</p>
                <p>Energy and Environment</p>
                <p>Social sciences</p>
                <p>Personal growth</p>
            </div>
        </div>

        <div className={styles.footer1}>
            <div>
                <h3>Employers</h3>
                <p>Job Posting</p>
                <p>Resume Database Access</p>
                <p>Recruiter Login</p>
                <p>Naukri RMS</p>
                <p>Buy Resume Packages Online</p>
                <p>Transition Services</p>
                <p>Report a Problem</p>
                <p>Recruiters from USA, call</p>
                <p>Toll Free # 1866-557-3340</p>
            </div>
            <div>
                <h3>Ambition Box</h3>
                <p>Interview Questions</p>
                <p>About Companies</p>
                <p>Share Interview Advice</p>
                <p>Write Company Review</p>
                <p>Company Reviews</p>
                <p>Company Salaries</p>
            </div>

            <div className={styles.avatar2}>
                <h3>Follow Us</h3>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmuDq5kKfQKMNek2x5B-QDWarpRqR1FZ1lzW52vUUw&s" alt="facebook" />
            </div>
        </div>


      </div>
    </div>
  )
}
