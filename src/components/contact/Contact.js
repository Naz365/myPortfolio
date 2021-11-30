import emailjs from "emailjs-com";
import React from "react";
const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sh2oagw",
        "template_mwp9gwg",
        e.target,
        "user_UO417HeDGhNYCbbY5dieI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className="text-light bg-dark mb-5" id="contact">
      <div className="text-center p-5">
        <h4>Find me on Social media</h4>
      </div>
      <div className="text-center p-2">
        <button type="button" className="btn btn-outline-info">
          LinkedIn
        </button>
        <button type="button" className="mx-2 btn btn-outline-info">
          Github
        </button>
        <button type="button" className="mx-2 btn btn-outline-info">
          Twitter
        </button>
        <button type="button" className="mx-2 btn btn-outline-info">
          Facebook
        </button>
        <button type="button" className="mx-2 btn btn-outline-info">
          Email
        </button>
      </div>
      <div className="contact-me m-4" id="contact-section">
        <h2 className="text-center p-2">For any query</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <form className="row g-3" onSubmit={sendEmail}>
                <div className="col-12">
                  <label for="Name" className="form-label">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    id="Nameinput"
                    className="form-control"
                    placeholder="Name"
                    aria-label="First name"
                  />
                </div>

                <div className="col-12">
                  <label for="inputEmail4" className="form-label">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                  />
                </div>

                <div className="col-12">
                  <label for="inputDate" className="form-label">
                    Subject
                  </label>
                  <input
                    name="subject"
                    type="text"
                    className="form-control"
                    id="inputDate"
                  />
                </div>
                <div className="mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Please Enter your massage
                  </label>
                  <textarea
                    name="message"
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <div className="col-12">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="submit"
                  />
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <img
                className="img-fluid rounded"
                src="https://i.ibb.co/RPCfGMN/Mobile-Marketing.gif"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
