import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'
import HtmlIcon from '@mui/icons-material/Html';
const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Basic Skills</h2>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
           {skill}
          </li>
          
        ))}
      </ul>
  {/* {skill.skills.map((item) => (
                  <div>
                    {item.name}
                    {item.image}
                  </div>
                ))} */}
      {/* <SkillsContainer>
          {skills.map((skill) => (
            <Skill>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item) => (
                  <SkillItem>
                    <SkillImage src={item.image}/>
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}

        </SkillsContainer> */}




      <div className="wrapper">
        <div className="shape-1"></div>
        <div className="shape-2"></div>
        <div className="container">
            <h2 className='titleSkills'>BASIC SKILLS METER </h2>
            <div className="skills1">
                <div className="details">
                    <span>HTML</span>
                    <span>80%</span>
                </div>
                <div className="bar">
                    <div id="html-bar"></div>
                </div>
            </div>
            <div className="skills1">
                <div className="details">
                    <span>CSS</span>
                    <span>50%</span>
                </div>
                <div className="bar">
                    <div id="css-bar"></div>
                </div>
            </div>
            <div className="skills1">
                <div className="details">
                    <span>Javascript</span>
                    <span>60%</span>
                </div>
                <div className="bar">
                    <div id="js-bar"></div>
                </div>
            </div>
            <div className="skills1">
                <div className="details">
                    <span>ReactJs</span>
                    <span>73%</span>
                </div>
                <div className="bar">
                    <div id="ReactJs-bar"></div>
                </div>
            </div>
            <div className="skills1">
                <div className="details">
                    <span>Unity</span>
                    <span>30%</span>
                </div>
                <div className="bar">
                    <div id="Unity-bar"></div>
                </div>
            </div>
            <div className="skills1">
                <div className="details">
                    <span>Git</span>
                    <span>40%</span>
                </div>
                <div className="bar">
                    <div id="Git-bar"></div>
                </div>
            </div>
            <div className="skills1">
                <div className="details">
                    <span>Kotlin</span>
                    <span>40%</span>
                </div>
                <div className="bar">
                    <div id="Kotlin-bar"></div>
                </div>
            </div>
            <div className="skills1">
                <div className="details">
                    <span>Android Studio</span>
                    <span>69%</span>
                </div>
                <div className="bar">
                    <div id="AndroidStudio-bar"></div>
                </div>
            </div>
            <div className="skills1">
                <div className="details">
                    <span>FireBase</span>
                    <span>50%</span>
                </div>
                <div className="bar">
                    <div id="Firebase-bar"></div>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Skills
