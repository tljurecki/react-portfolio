import React from 'react';
import profile from '../../assets/images/profile.JPG';
import 'bootstrap/dist/css/bootstrap.min.css';

function About () {
    return(
        <section className="container-fluid" id="about">
            <h1 className="text-info"> Tanya Jurecki</h1>
            <hr></hr>

            <div className="row justify-content-center">
                <div className="col-10" >
                    <img className="profile" style={{width: "25%", height: "85%"}} src={profile} alt="Tanya Jurecki" />
                </div>
                <p className="d-inline-flex p-2 text-info text-center">
                    My name is Tanya Jurecki, and i live in Cleveland, Ohio.
                    I am a full stack web developer with a love of problem solving.
                    I am passionate about creating innovative websites and using my skills 
                    to bring my clients dreams to fruition.  I am always excited to hear about
                    new opportunities.  
                </p>
            </div>
        </section>
    )
}
export default About;