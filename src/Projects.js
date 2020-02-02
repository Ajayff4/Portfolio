import React from 'react';
import PROJECTS from './data/projects';

function Project(title, image, description, link) {
  return (
    <div style={{ display: 'inline-block', width: 300, margin: 10 }}>
      <h3>{title}</h3>
      <img src={image} alt='profile' style={{ width: 200, height: 128 }} />
      <p>{description}</p>
      <a href={link}>{link}</a>
    </div>
  )
}

function Projects() {
  return (
    PROJECTS.map(PROJECT => {
      return Project(PROJECT.title, PROJECT.image, PROJECT.description, PROJECT.link);
    })
  )
}

export default Projects;

// Somehow this code is not working
// class Project extends Components {
//   render() {
//     const { title, image, description, link } = this.props.project;

//     return (
//       <div style={{ display: 'inline-block', width: 300, margin: 10 }}>
//         <h3>{title}</h3>
//         <img src={image} alt='profile' style={{ width: 200, height: 128 }} />
//         <p>{description}</p>
//         <a href={link}>{link}</a>
//       </div>
//     )
//   }
// }


// class Projects extends Components {
//   render() {
//     return (
//       <div>
//         <h2>Highlighted Projects</h2>
//         <div>
//           {
//             PROJECTS.map(PROJECT => {
//               return <Project key={PROJECT.id} project={PROJECT} />;
//             })
//           }
//         </div>
//       </div>
//     )
//   }
// }