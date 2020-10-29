  
import React from "react"
import { Button, button } from "antd";
import './LandingHeader.css';
import {Link} from 'react-router-dom';

function LandingHeader() {
    return (
        <div className="header__container">
            <div className="half__width">
                <p className="heading-text">
                    Get Extra Shifts Easily!
                </p>
                <p className="heading-subtext">
                    Taking extra shifts is very uncertain for employees.
                    But with the help of this automation system, you can get extra shifts without worrying.
                    After receiving a cancellation from an employee, we announce it to people who have extra shift quotas!
                </p>
                <Link to="/dashboard">
                    <a>
                    <Button
                        type="primary"
                        size="large"
                        className="button__custom get__started__btn">
                            Get Started
                    </Button>
                    </a>
                    </Link>
                    <Link to="/about">
                    <a>
                        <Button 
                            size="large"
                            type="info"
                            className="button__custom">
                            Learn More
                        </Button>
                    </a>
                    </Link>
                    
            </div>
            <div className="half__width image-col">
                        <img
                        className="  animate__animated animate__bounce  animate__slower"
                        src="./images/stock.svg"
                        alt="price discounts"
                        />
                </div>
        </div>
    )
}
export default LandingHeader