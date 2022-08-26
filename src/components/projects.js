function Projects() {
    return (

        <div class='col-12'>
            <div class="d-flex justify-content-center col-12">
                <h2>Projects</h2>
            </div>
            <div class="d-flex justify-content-center">
                <a href="https://volunteerists.herokuapp.com/" style={{
                    backgroundImage: `url('Volunteerist.gif')`, width: '40%', height: '280px', backgroundSize: '600px', backgroundRepeat: 'no-repeat',
                    color: 'red', fontWeight: 'bold'
                }} class="d-flex flex-column justify-content-end">Volunteerist</a>
            </div>
            <br></br>
            <div class="d-flex justify-content-center">
                <a href="https://henry11244.github.io/letsTacoBoutFood/" style={{
                    backgroundImage: `url('LetsTacoBoutFood.gif')`, width: '40%', height: '250px', backgroundSize: '600px', backgroundRepeat: 'no-repeat',
                    color: 'red', fontWeight: 'bold'
                }} class="d-flex flex-column justify-content-end">Let's Taco 'Bout Food</a>
            </div>
            <br></br>
            <div class="d-flex justify-content-center">
                <a href="https://henry11244.github.io/WeatherDashboard/" style={{
                    backgroundImage: `url('WeatherDashBoard.gif')`, width: '40%', height: '250px', backgroundSize: '600px', backgroundRepeat: 'no-repeat',
                    color: 'red', fontWeight: 'bold'
                }} class="d-flex flex-column justify-content-end">Weather Dashboard</a>
            </div>
            <br></br>
            <div class="d-flex justify-content-center">
                <a href="https://henry11244.github.io/WorkDayScheduler/"
                    style={{
                        backgroundImage: `url('WorkDayScheduler.gif')`, width: '40%', height: '250px', backgroundSize: '600px', backgroundRepeat: 'no-repeat',
                        color: 'red', fontWeight: 'bold'
                    }}
                    class="d-flex flex-column justify-content-end">Workday Scheduler</a>
            </div>
            <br></br>
            <div class="d-flex justify-content-center">
                <a href="https://henry-note-pad.herokuapp.com/"
                    style={{
                        backgroundImage: `url('NoteTaker.gif')`, width: '40%', height: '250px', backgroundSize: '600px', backgroundRepeat: 'no-repeat',
                        color: 'red', fontWeight: 'bold'
                    }}
                    class="d-flex flex-column justify-content-end">Note Taker</a>
            </div>
            <br></br>
            <div class="d-flex justify-content-center">
                <a href="https://henry11244.github.io/JavaQuiz/"
                    style={{
                        backgroundImage: `url('JavaScript.gif')`, width: '40%', height: '250px', backgroundSize: '600px', backgroundRepeat: 'no-repeat',
                        color: 'red', fontWeight: 'bold'
                    }}
                    class="d-flex flex-column justify-content-end">JavaScript Quiz</a>
            </div>
        </div>
    )
}

export default Projects;