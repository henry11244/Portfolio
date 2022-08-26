function AboutMe() {
    return (
        <div class="d-flex justify-content-center flex-wrap">

            <h2 class="col-12 justify-content-center d-flex " >About Me</h2>

            <div class="d-flex justify-content-center">
                <img src="profilePic.jfif" style={{ borderRadius: '90px', width: '70%' }} alt="Profile Pic"></img>

            </div>
            <div class='col-8' style={{}}>
                <p>As a full-stack web developer, I utilize front-end technology such as HTML, JavaScript, React, Handlebars,
                    Bootstrap and jQuery to create exciting, immersive digital destinations that have a lasting impact on visitors. To
                    add functionality to these applications, utilize technology such as Node, Express, MySQL, MongoDB and GraphQL to
                    build the back-end of an application.

                </p>

                <p >
                    Additional to my experiences as a full-stack web developer, I have project management skills and managed financial
                    reporting for both multiple billion-dollar corporations as well as a consulting firms.
                </p>
            </div>
        </div >
    )

}

export default AboutMe;