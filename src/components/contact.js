import emailjs from '@emailjs/browser';

function Contact() {

    function emailValidation(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }


    return (
        <div class='col-12'>

            <div class="d-flex justify-content-center">
                <h2>Contact</h2>
            </div>

            <div class="d-flex justify-content-center">
                <form class="col-9">

                    <div class="form-outline mb-4">
                        <input type="text" id="name" class="form-control" placeholder="Name" />
                    </div>
                    <div class="form-outline mb-4">
                        <input type="email" id="email" class="form-control" placeholder="Email Address" />
                    </div>
                    <div class="form-outline mb-4">
                        <textarea class="form-control" id="message" rows="4" placeholder="Message"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block mb-4">Send</button>
                </form>
            </div>
        </div>
    )

}

export default Contact;


