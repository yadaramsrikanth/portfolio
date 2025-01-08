import React from "react"
import './index.css'

const projects_items=[
    {id:1,
     url:"https://res.cloudinary.com/dqdx0yz2t/image/upload/v1736316432/Screenshot_199_vmw4qj.png",
     projectLink:"https://trendzsrikanth.ccbp.tech/",
     githubLink:"https://github.com/yadaramsrikanth/nxtTrendzFinalCode.git",
     projectName:"NxtTrendz Ecommerce website"   
    },
    {id:2,
    url:"https://res.cloudinary.com/dqdx0yz2t/image/upload/v1736316840/Screenshot_200_nxay90.png",
    projectLink:"https://srikanthjobbyap.ccbp.tech/",
    githubLink:"https://github.com/yadaramsrikanth/jobbyFinalCode.git",
    projectName:"Job Search Application"  
    },
    {id:3,
    url:"https://res.cloudinary.com/dqdx0yz2t/image/upload/v1736316975/Screenshot_201_fpn2im.png",
    projectLink:"https://srikanthnetflix.ccbp.tech/",
    githubLink:"https://github.com/yadaramsrikanth/miniprojectFinalCode.git",
    projectName:"NetFlix Clone"    
    }
]



const Projects=()=>{
    return <>
    <h1 className="projects-heading">Projects</h1>
    <p><strong>USERNAME:</strong>rahul</p>
    <p><strong>PASSWORD:</strong>rahul@2021</p>
    <ul className="projects-items-container">
       {projects_items.map((item)=>{
        return <li key={item.id} className="project-item-card">
            <img src={item.url} alt={item.projectName} className="project-images"/>
            <p className="project-name">{item.projectName}</p>
            <button className="code-button"><a className="visit-link-button" href={item.projectLink} target="__blank">VISIT</a></button>
            <button className="code-button  github-link-button"><a className="github-link-button" href={item.githubLink} target="__blank">CODE</a></button>
        </li>
       })} 
    </ul>
    </>
}

export default Projects