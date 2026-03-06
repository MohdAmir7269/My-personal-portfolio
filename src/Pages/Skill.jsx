
// import React from 'react'
// import { Link } from 'react-router-dom'
// import img1 from "../assets/image/apiDevelopment.jpg"
// import img2 from "../assets/image/github_PNG63.png"
// import img3 from "../assets/image/git-13.png"
// import img4 from "../assets/image/nodejs.png"
// import img5 from "../assets/image/Css3a.png"
// import img6 from "../assets/image/bootstrap.jpg"    
// import img7 from "../assets/image/jst.png"
// import img8 from "../assets/image/react.png"
// import img9 from "../assets/image/mongodb-logo-petit.png"  



// const Skill = () => {
//   return (
//     <>
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-sm-12 bg-dark">

//             <h1 className='display-5 text-center mt-5 text-white fw-bold' >My   <span className='display-5 fw-bold text-primary'>Skills</span></h1>
//             <p className='text-center text-white'>Technologies I've worked with and mastered</p>

//             <div className="card-group p-4 text-center "  >
//               <div className="card rounded-3 border-2 border-primary" id='card1' style={{ backgroundColor: "black" }}>
//                 <div style={{ borderRadius: "50%" }}> 
//                     <img src={img1} className="img-fluid  mt-5" style={{ borderRadius: "50%", height: "100px", border: "2px solid #0d6efd" }} alt="API Development" /></div>
//                 <div className="card-body">
//                   <h5 className="card-title text-center text-white fw-bold">API Devlopment</h5>
//                   <p className='text-center text-white'>Backend</p>


//                   <button className='bg-primary text-white rounded-3 border-0 ' style={{ height: "40%" }}>Level Intermediate</button>
//                 </div>
//               </div>
//               <div className="card rounded-3 border-2 border-primary" style={{ backgroundColor: "black" }}>
//                 <div style={{ borderRadius: "50%" }}>
//                   <img src={img2} className="img-fluid  mt-5" style={{
//                     borderRadius: "50%",
//                     height: "100px", border: "2px solid #0d6efd"
//                   }} alt="API Development" />
//                 </div>

//                 <div className="card-body">
//                   <h5 className="card-title text-center text-white fw-bold">GitHub</h5>
//                   <p className='text-center text-white'>Tools</p>

//                   <button className='bg-primary text-white rounded-3 border-0 ' style={{ height: "40%" }}>Level Intermediate</button>
//                 </div>
//               </div>
//               <div className="card rounded-3 border-2 border-primary" style={{ backgroundColor: "black" }}>
//                 <div style={{ borderRadius: "50%" }}>
//                   <img src={img3} className="img-fluid  mt-5" style={{
//                     borderRadius: "50%",
//                     height: "100px", border: "2px solid #0d6efd"
//                   }} alt="API Development" />
//                 </div>
//                 <div className="card-body">
//                   <h5 className="card-title text-center text-white fw-bold">Git</h5>
//                   <p className='text-center text-white'>Tools</p>

//                   <button className='bg-primary text-white rounded-3 border-0 ' style={{ height: "40%" }}>Level Intermediate</button>
//                 </div>
//               </div>
//               <div className="card rounded-3 border-2 border-primary" style={{ backgroundColor: "black" }}>
//                 <div style={{ borderRadius: "50%" }}>
//                   <img src={img4} className="img-fluid  mt-5" style={{
//                     borderRadius: "50%",
//                     height: "100px",width:"100px",objectFit:"cover", border: "2px solid #0d6efd"
//                   }} alt="API Development" />
//                 </div>
//                 <div className="card-body">
//                   <h5 className="card-title text-center text-white fw-bold">Node.js</h5>
//                   <p className='text-center text-white'>Backend</p>

//                   <button className='bg-primary text-white rounded-3 border-0 ' style={{ height: "40%" }}>Level Intermediate</button>
//                 </div>
//               </div>
//             </div>
//             <div className="card-group p-4 text-center "  >
//               <div className="card rounded-3 border-2 border-primary" style={{ backgroundColor: "black" }}>
//                 <div style={{ borderRadius: "50%" }}>
//                   <img src={img5} className="img-fluid  mt-5" style={{
//                     borderRadius: "50%",
//                     height: "100px", border: "2px solid #0d6efd"
//                   }} alt="API Development" />
//                 </div>
//                 <div className="card-body">
//                   <h5 className="card-title text-center text-white fw-bold">CSS</h5>
//                   <p className='text-center text-white'>Frontend</p>
//                   <button className='bg-primary text-white rounded-3 border-0 ' style={{ height: "40%" }}>Level Intermediate</button>
//                 </div>
//               </div>
//               <div className="card rounded-3 border-2 border-primary" style={{ backgroundColor: "black" }}>
//                 <div style={{ borderRadius: "50%" }}>
//                   <img src={img6} className="img-fluid  mt-5" style={{
//                     borderRadius: "50%",objectFit:"cover", width:"100px",
//                     height: "100px", border: "2px solid #0d6efd"
//                   }} alt="API Development" />
//                 </div>
//                 <div className="card-body">
//                   <h5 className="card-title text-center text-white fw-bold">Bootstrap</h5>
//                   <p className='text-center text-white'>Frontend</p>
//                   <button className='bg-primary text-white rounded-3 border-0 ' style={{ height: "40%" }}>Level Intermediate</button>
//                 </div>
//               </div>
//               <div className="card rounded-3 border-2 border-primary" style={{ backgroundColor: "black" }}>
//                 <div style={{ borderRadius: "50%" }}>
//                   <img src={img7} className="img-fluid  mt-5" style={{
//                     borderRadius: "50%",objectFit:"cover",width:"100px",
//                     height: "100px", border: "2px solid #0d6efd"
//                   }} alt="API Development" />
//                 </div>
//                 <div className="card-body">
//                   <h5 className="card-title text-center text-white fw-bold">Javascript</h5>
//                   <p className='text-center text-white'>Frontend</p>

//                   <button className='bg-primary text-white rounded-3 border-0 ' style={{ height: "40%" }}>Level Intermediate</button>
//                 </div>
//               </div>
//               <div className="card rounded-3 border-2 border-primary" style={{ backgroundColor: "black" }}>
//                 <div style={{ borderRadius: "50%" }}>
//                   <img src={img8} className="img-fluid  mt-5" style={{
//                     borderRadius: "50%",objectFit:"cover",width:"100px",
//                     height: "100px", border: "2px solid #0d6efd"
//                   }} alt="API Development" />
//                 </div>
//                 <div className="card-body">
//                   <h5 className="card-title text-center  text-white fw-bold">React</h5>
//                   <p className='text-center text-white'>Frontend</p>
//                   <button className='bg-primary text-white rounded-3 border-0 ' style={{ height: "40%" }}>Level Intermediate</button>
//                 </div>
//               </div>

//             </div>
//             <div className="row row-cols-1 row-cols-md-3 g-4">
//               <div className="col">
//                 <div className="card h-100 ms-4 w-75 text-white text-center border border-primary " style={{ backgroundColor: "black" }}>
//                   <div style={{ borderRadius: "50%" }}>
//                     <img src={img9} className="img-fluid  mt-5" style={{
//                       borderRadius: "50%",objectFit:"cover",width:"100px",
//                       height: "100px", border: "2px solid #0d6efd"
//                     }} alt="API Development" />
//                   </div>
//                   <div className="card-body text-center">
//                     <h5 className="card-title fw-bold">Mongo DB</h5>
//                     <p className='text-white'>Database</p>
//                     <button className='bg-primary text-white rounded-3 border-0 ' style={{ height: "40%" }}>Level Intermediate</button>
//                   </div>
//                 </div>
//               </div>
//               <div className="col">

//               </div>
//               <div className="col">

//               </div>
//               <div className="col">

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Skill




import React from 'react'
import img1 from '../assets/image/apiDevelopment.jpg'
import img2 from '../assets/image/github_PNG63.png'
import img3 from '../assets/image/git-13.png'
import img4 from '../assets/image/nodejs.png'
import img5 from '../assets/image/Css3a.png'
import img6 from '../assets/image/bootstrap.jpg'
import img7 from '../assets/image/jst.png'
import img8 from '../assets/image/react.png'
import img9 from '../assets/image/mongodb-logo-petit.png'
import '../index.css'

const skills = [
  { img: img1, title: 'API Development', category: 'Backend',  level: 'Intermediate' },
  { img: img2, title: 'GitHub',          category: 'Tools',    level: 'Intermediate' },
  { img: img3, title: 'Git',             category: 'Tools',    level: 'Intermediate' },
  { img: img4, title: 'Node.js',         category: 'Backend',  level: 'Intermediate' },
  { img: img5, title: 'CSS',             category: 'Frontend', level: 'Intermediate' },
  { img: img6, title: 'Bootstrap',       category: 'Frontend', level: 'Intermediate' },
  { img: img7, title: 'JavaScript',      category: 'Frontend', level: 'Intermediate' },
  { img: img8, title: 'React',           category: 'Frontend', level: 'Intermediate' },
  { img: img9, title: 'MongoDB',         category: 'Database', level: 'Intermediate' },
]

const categoryColor = {
  Backend:  'var(--blue)',
  Tools:    '#7c3aed',
  Frontend: '#0891b2',
  Database: '#059669',
}

const Skill = () => {
  return (
    <div className="pf-page" style={{ background: 'var(--dark2)' }}>

      {/* Header */}
      <div className="pf-section-header">
        <h1 className="pf-section-title">My <span>Skills</span></h1>
        <p className="pf-section-sub">Technologies I've worked with and mastered</p>
        <div className="pf-title-line"></div>
      </div>

      {/* Grid */}
      <div className="pf-grid pb-5 ">
        <div className="row g-0 justify-content-center">
          {skills.map((skill, i) => (
            <div className="col-6 col-sm-4 mt-3 col-md-3" key={i}>
              <div className="pf-skill-card">

                {/* Image circle */}
                <div className="pf-skill-img-wrap">
                  <img src={skill.img} alt={skill.title} />
                  <div className="pf-skill-img-ring"></div>
                </div>

                {/* Info */}
                <h5 className="pf-skill-name">{skill.title}</h5>
                <span
                  className="pf-skill-category"
                  style={{ background: categoryColor[skill.category] + '22', color: categoryColor[skill.category], borderColor: categoryColor[skill.category] + '55' }}
                >
                  {skill.category}
                </span>

                <div className="pf-skill-badge">
                  {skill.level}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Skill