import React from "react"
import gradientTwo from "./images/gradientTwo.png"

const Projects = () => {
    return (
        <div id="projects" className="projects container">
            <div className="sect-title">Projects</div>
            <Divider color="#7dfbef"/>


            {/* Projects */}
            <div className="project">
              <h1>Project Name</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel nulla vitae mi finibus malesuada. Integer tempor ornare sem ac aliquet. Maecenas hendrerit volutpat enim vitae volutpat. Sed vulputate ipsum in ex aliquam fringilla. In ornare pellentesque tortor quis dapibus. Duis venenatis justo lacus, ac consectetur sapien sagittis non. Fusce. </p>
              <div className="git-link">
                <Divider className="divider" color="#8bf4ff" /> 
                <a className="git" style={{'color':'#8bf4ff'}} href="#"><i className="fa-brands fa-github"></i></a>
              </div>
            </div>

            <div className="project">
              <h1>Project Name</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel nulla vitae mi finibus malesuada. Integer tempor ornare sem ac aliquet. Maecenas hendrerit volutpat enim vitae volutpat. Sed vulputate ipsum in ex aliquam fringilla. In ornare pellentesque tortor quis dapibus. Duis venenatis justo lacus, ac consectetur sapien sagittis non. Fusce. </p>
              <div className="git-link">
                <Divider className="divider" color="#00a9c1" /> 
                <a className="git" style={{'color':'#00a9c1'}} href="#"><i className="fa-brands fa-github"></i></a>
              </div>
            </div>

            <div className="project">
              <h1>Project Name</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel nulla vitae mi finibus malesuada. Integer tempor ornare sem ac aliquet. Maecenas hendrerit volutpat enim vitae volutpat. Sed vulputate ipsum in ex aliquam fringilla. In ornare pellentesque tortor quis dapibus. Duis venenatis justo lacus, ac consectetur sapien sagittis non. Fusce. </p>
              <div className="git-link">
                <Divider className="divider" color="#e4feff" /> 
                <a className="git" style={{'color':'#e4feff'}} href="#"><i className="fa-brands fa-github"></i></a>
              </div>
            </div>

            <div className="project">
              <h1>Project Name</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel nulla vitae mi finibus malesuada. Integer tempor ornare sem ac aliquet. Maecenas hendrerit volutpat enim vitae volutpat. Sed vulputate ipsum in ex aliquam fringilla. In ornare pellentesque tortor quis dapibus. Duis venenatis justo lacus, ac consectetur sapien sagittis non. Fusce. </p>
              <div className="git-link">
                <Divider className="divider" color="#e6f4f1" /> 
                <a className="git" style={{'color':'#e6f4f1'}} href="#"><i className="fa-brands fa-github"></i></a>
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