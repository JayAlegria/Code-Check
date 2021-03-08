import React from 'react'
import WhiteLogo from './assets/images/logo-white.png'
import { Col } from 'react-bootstrap'
import './Sidebar.scss'
import { Link } from 'react-router-dom'



function Sidebar() {
    return (
        <>
            <Col lg={3} className="sidebar py-0 px-0 bg-dark">

                <div className="logo px-5 py-5">
                    <Link to = "/">
                        <img src={ WhiteLogo } alt="Brand Captain" />
                    </Link>
                </div>

                <ul className="sidebar__list px-0"> 
                    <li className="sidebar__item px-5 py-4 active">
                        <Link to = "/">Dashboard</Link>
                    </li>
                    <li className="sidebar__item px-5 py-4">
                        <Link to = "/create-project">Projects</Link>
                    </li>
                    <li className="sidebar__item px-5 py-4">Assets</li>
                </ul>
                
            </Col> {/** sidebar */}
        </>
    )
}

export default Sidebar
