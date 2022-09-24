import './resume.css'



function Resume() {


    return (
        <div class="col-12 resume__container">
            <div class="d-flex justify-content-center">
                <h2 id='resume'>Resume</h2>
            </div>
            <div class="d-flex justify-content-center col-12">
                <iframe title='resume' src="Henry-Nguyen_Resume.pdf#toolbar=0" type="application/pdf" frameborder="0"
                    width="841rem" height="1000rem" style={{ color: 'blue', lineHeight: 10, padding: 20 }}  ></iframe>

            </div>
            <a class=" d-flex justify-content-center" href="Henry-Nguyen_Resume 8-14-22.pdf">Download Resume</a>

        </div>
    )
}

export default Resume;