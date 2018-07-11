import React from "react";
import "./About.css";
import { Link } from 'react-router-dom';

const About = () => (
    
    
    <div className="card parallax">
        <h1 className="card-header text-center">Measure your carbon footprint</h1>
        <img src="favicon.ico" width="50" height="50" class="d-inline-block align-center" id="logoimg" alt="logo"></ img>
        <div className="card-body">
            <h2 className="card-title ml-5">Welcome to the home of carbon footprinting</h2>
            <h3 className="card-text ml-5">Learn how you are personally effecting global warming</h3>
            <div className="worldData ml-5">
                <iframe width="100%"  frameborder="0" scrolling="no" marginwidth="0" marginheight="0" src="https://www.google.com/publicdata/embed?ds=d5bncppjof8f9_&amp;ctype=l&amp;strail=false&amp;bcs=d&amp;nselm=h&amp;met_y=en_atm_co2e_pc&amp;scale_y=log&amp;ind_y=false&amp;rdim=region&amp;idim=region:NAC:SSF:SAS:MEA:LCN:ECS:EAS&amp;ifdim=region&amp;hl=en_US&amp;dl=en&amp;ind=false&amp;icfg"></iframe>
            </div>
            <p className="p-5">
               
               Helping you to reduce carbon emissions and energy costs all year round. 

               Keeping you compliant with carbon/energy law Energy Savings Opportunity Scheme (ESOS) Phase 2, Non Financial Reporting 

               Setting up and managing robust carbon/energy and environmental management ISO 14001,  Science Based Targets 

               Carbon Neutrality to enhance your brands, products and services via  Quality Assurance Standard approved carbon offsetting

                Caring for the Climate and Communities with our unique Carbon Offset projects - UK, Americas, Global
            </p>
            <a href="/login" className="btn btn-primary">Login</a>
        </div>
    </div>
);

export default About;


