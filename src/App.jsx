import { Formik, Field, Form } from "formik";
import check from '../src/assets/images/check.png';

function App() {
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          type: "",
          message: "",
          toggle: false,
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className="form">
          <h1>Contact Us</h1>
          <div className="group1">
            <label htmlFor="firstName">
              First Name *
              <Field
                type="text"
                id="firstName"
                name="firstName"
                placeholder="John"
              />
            </label>
            <label htmlFor="lastName">
              Last Name *
              <Field
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Appleseed"
              />
            </label>
          </div>
          <label htmlFor="email">
            Email Address *
            <Field
              type="text"
              id="email"
              name="email"
              placeholder="email@example.com"
            />
          </label>
          <div id="radio-group">Query Type *</div>
          <div className="radio-group">
            <label htmlFor="general-enquiry">
              <input
                type="radio"
                id="general-enquiry"
                name="type"
                value="General Enquiry"
              />
              <span className="custom-radio"></span>
              General Enquiry
            </label>
            <label htmlFor="support-request">
              <input
                type="radio"
                id="support-request"
                name="type"
                value="Support Request"
              />
              <span className="custom-radio"></span>
              Support Request
            </label>
          </div>
          <label className="textfield" htmlFor="message">
            Message *
            <Field
              as="textarea"
              id="message"
              name="message"
              placeholder="Hello, I would like to know if you're able to build Shopify e-commerce sites. We're starting a business and we're going to use Shopify. But it would be great to work with an agency who specialises in working with it."
            />
          </label>
          <label className="toggle-checkbox">
            <Field type="checkbox" name="toggle" id="toggle" />
            <span className="custom-checkbox"></span>
            I consent to being contacted by the team *
          </label>
          <button className="submit" type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
}

export default App;