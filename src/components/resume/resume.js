import './resume.css'
import ResumeImg from './HN_Resume.png'
import ResumePDF from './HN_Resume.pdf'

function Resume() {


    return (
        <div >
            <div className="d-flex justify-content-center">
                <h2 id='resume'>Resume</h2>
            </div>
            <div className="d-flex justify-content-center ">
                <img src={ResumeImg} alt='resume' id='resumeImg'></img>

            </div>
            <a className=" d-flex justify-content-center resumeLink" href={ResumePDF}>Download Resume</a>

        </div >
    )
}

export default Resume;