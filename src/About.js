import React from "react"

const About = () => { 
    return (
        <div id="about" className="about">
            <div className="sect-title" style={{'color':'#010C20'}}>About Me</div>
            <Divider color="#003746"/>
        </div>
    )
}

export default About

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