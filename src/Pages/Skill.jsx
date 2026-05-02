import React from 'react'
import img1 from '../assets/Image/apiDevelopment.jpg'
import img2 from '../assets/Image/github_PNG63.png'
import img3 from '../assets/Image/git-13.png'
import img4 from '../assets/Image/nodejs.png'
import img5 from '../assets/Image/Css3a.png'
import img6 from '../assets/Image/bootstrap.jpg'
import img7 from '../assets/Image/jst.png'
import img8 from '../assets/Image/react.png'
import img9 from '../assets/Image/mongodb-logo-petit.png'
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