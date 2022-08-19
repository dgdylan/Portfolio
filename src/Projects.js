import React from "react"
import gradientTwo from "./images/gradientTwo.png"

const Projects = () => {
    return (
        <div id="projects" className="projects container">
            <div className="sect-title">Projects</div>
            <Divider color="#7dfbef"/>


            {/* Projects */}
            <div className="project">
              <h1>Cyberworks</h1>
              <p>Full Stack e-learning web application built using PHP and MySQL. Features custom login system, with three different types of users: developers, teachers and students. Teachers are able to create tests and assign to students, and view grades. Students are able to take the tests and view their grades. Developers have the functionality of both other types of accounts. </p>
              <div className="git-link">
                <Divider className="divider" color="#8bf4ff" /> 
                <a className="git" style={{'color':'#8bf4ff'}} target="_blank" rel="noreferrer" href="https://github.com/dgdylan/Cyberworks"><i className="fa-brands fa-github"></i></a>
              </div>
            </div>

            <div className="project">
              <h1>Cadent</h1>
              <p>Android application built with Java Servlet connected to MySQL. Cadent pulls information from the CUNY website calendar and displays it in a better UI compared to the one from the official CUNY website.</p>
              <div className="git-link">
                <Divider className="divider" color="#00a9c1" /> 
                <a className="git" style={{'color':'#00a9c1'}} target="_blank" rel="noreferrer" href="https://github.com/dgdylan/Cadent"><i className="fa-brands fa-github"></i></a>
              </div>
            </div>

            <div className="project">
              <h1>2021 Worst Landlord Watchlist</h1>
              <p>Full Stack web application that showcases the 100 worst landlords in New York City based on information gathered from HPD's public data. Application was built with a ReactJS frontend, with Mapbox maps and Bootstrap for the CSS framework. The data is persisted in a MySQL database with API endpoints exposed in a Flask Application.</p>
              <div className="git-link">
                <Divider className="divider" color="#e4feff" /> 
                <a className="git" style={{'color':'#e4feff'}} target="_blank" rel="noreferrer" href="https://landlordwatchlist.com/"><i className="fa-brands fa-github"></i></a>
              </div>
            </div>

            <div className="project">
              <h1>NYC Public Advocate Website</h1>
              <p>Updated the website's home page by translating Figma design to ReactJS code with custom CSS, and transitioned frontend code from class based components to functional components. Implemented dynamic content on the home page using the Django Rest Framework models. And created a Blog using external Wagtail(Django) libraries.</p>
              <div className="git-link">
                <Divider className="divider" color="#e6f4f1" /> 
                <a className="git" style={{'color':'#e6f4f1'}} target="_blank" rel="noreferrer" href="https://advocate.nyc.gov/"><i className="fa-brands fa-github"></i></a>
              </div>
            </div>
            
            <div className="gradientTwo">
              <img draggable="false" src={gradientTwo} alt="" />
            </div>

        </div>
    )
}

export default Projects

function Divider(props) {
  return (
    <svg
      width={179}
      height={17}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x={0.151}
        y={0.66}
        width={83.037}
        height={15.377}
        rx={5}
        fill={props.color}
      />
      <rect
        x={90.364}
        y={0.66}
        width={24.604}
        height={15.377}
        rx={5}
        fill={props.color}
      />
      <rect
        x={122.143}
        y={0.66}
        width={24.604}
        height={15.377}
        rx={5}
        fill={props.color}
      />
      <rect
        x={154.948}
        y={0.66}
        width={23.578}
        height={15.377}
        rx={5}
        fill={props.color}
      />
    </svg>
  );
}