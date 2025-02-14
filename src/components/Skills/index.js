import React from "react"
import "./index.css"
import { DiMongodb,DiHtml5, DiCss3,DiJsBadge,DiReact,DiBootstrap,DiPython,DiNodejs,DiDatabase,DiGithubBadge } from "react-icons/di";

const frontEndTechnologies=[
    {id:1,
    url:<DiHtml5 />,
    text:"HTML5"
    },
    {id:2,
    url:<DiCss3 />,
    text:"CSS3"
    },
    {id:3,
    url:<DiJsBadge />,
    text:"Java Script"
    },
    {id:4,
    url:<DiBootstrap />,
    text:"Bootstrap"
    },
    {id:5,
    url:<DiReact />,
    text:"React"
    }
]
const backEndtechnologies=[
    {id:1,
        url:<DiPython />,
        text:"Python"
    },{id:2,
        url:<DiNodejs />,
        text:"Node JS"
    },
    {id:3,
        url:<DiDatabase />,
        text:"SQL"
    },
    {id:4,
    url:<DiMongodb />,
    text:"MongoDB"
    }

]
const Skills=()=>{
    return<><h1 className="skills-heading">Skills</h1>
    <h3 className="front-end-tools">FRONT-END-TECHNOLGIES :</h3>
    <ul className="front-end-tools-container">
        {frontEndTechnologies.map((item)=>{
            return <li key={item.id} className="front-end-list-item">
                {item.text==="HTML5"&&<p style={{color:"orangered"}} className="skill-logo">{item.url}</p>}
                {item.text==="CSS3"&&<p style={{color:"#003366"}} className="skill-logo">{item.url}</p>}
                {item.text==="Java Script"&&<p style={{color:"orange"}} className="skill-logo">{item.url}</p>}
                {item.text==="Bootstrap"&&<p style={{color:"violet"}} className="skill-logo">{item.url}</p>}
                {item.text==="React"&&<p style={{color:"skyblue"}} className="skill-logo">{item.url}</p>}
                

                <p className="skill-name">{item.text}</p>
            </li>
        })}
    </ul>
    <h3 className="front-end-tools">BACK-END-TECHNOLGIES :</h3>
    <ul className="front-end-tools-container">
       {backEndtechnologies.map((item)=>{
        return <li key={item.id} className="front-end-list-item">
           {item.text==="Python"&&<p style={{color:"black"}} className="skill-logo">{item.url}</p>}
                {item.text==="Node JS"&&<p style={{ color: 'green' }} className="skill-logo">{item.url}</p>}
                {item.text==="SQL"&&<p style={{color:"black"}} className="skill-logo">{item.url}</p>}
                {item.text==="MongoDB"&&<p style={{color:"green"}} className="skill-logo">{item.url}</p>}

                <p className="skill-name">{item.text}</p> 
        </li>
       })} 
    </ul>
    <h3 className="front-end-tools">TOOLS :</h3>
    <li className="front-end-list-item">
    <DiGithubBadge size={50}/>
    <p className="skill-name">Git Hub</p> 
    </li>
    </> 
}

export default Skills