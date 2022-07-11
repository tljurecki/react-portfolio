import React from 'react';
import profile from '../../assets/images/profile.JPG';

function About () {
    return(
        <section className='title'>
            <hi class="name"> Tanya Jurecki</hi>
            <hr></hr>

            <div className="row justify-content-center">
                <div classNmae="col-10" id="about">
                    <img className="profile" src={profile} alt="Tanya Jurecki" />
                </div>
            </div>
        </section>
    )
}
export default About;