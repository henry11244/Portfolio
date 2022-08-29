function Projects() {
    return (

        <div class='col-12'>
            <div class="d-flex justify-content-center col-12">
                <h2>Projects</h2>
            </div>
            <div class="d-flex justify-content-center project-container">
                <a href="https://volunteerists.herokuapp.com/" style={{
                    backgroundImage: `url('Volunteerist.gif')`
                }} class="d-flex flex-column justify-content-end projects">Volunteerist</a>
            </div>
            <br></br>
            <div class="d-flex justify-content-center project-container">
                <a href="https://henry11244.github.io/letsTacoBoutFood/" style={{
                    backgroundImage: `url('LetsTacoBoutFood.gif')`
                }} class="d-flex flex-column justify-content-end projects">Let's Taco 'Bout Food</a>
            </div>
            <br></br>
            <div class="d-flex justify-content-center project-container">
                <a href="https://henry11244.github.io/WeatherDashboard/" style={{
                    backgroundImage: `url('WeatherDashBoard.gif')`
                }} class="d-flex flex-column justify-content-end projects">Weather Dashboard</a>
            </div>
            <br></br>
            <div class="d-flex justify-content-center project-container">
                <a href="https://henry11244.github.io/WorkDayScheduler/"
                    style={{
                        backgroundImage: `url('WorkDayScheduler.gif')`
                    }}
                    class="d-flex flex-column justify-content-end projects">Workday Scheduler</a>
            </div>
            <br></br>
            <div class="d-flex justify-content-center project-container">
                <a href="https://henry-note-pad.herokuapp.com/"
                    style={{
                        backgroundImage: `url('NoteTaker.gif')`
                    }}
                    class="d-flex flex-column justify-content-end projects">Note Taker</a>
            </div>
            <br></br>
            <div class="d-flex justify-content-center project-container">
                <a href="https://henry11244.github.io/JavaQuiz/"
                    style={{
                        backgroundImage: `url('JavaScript.gif')`
                    }}
                    class="d-flex flex-column justify-content-end projects">JavaScript Quiz</a>
            </div>
        </div>
    )
}

export default Projects;