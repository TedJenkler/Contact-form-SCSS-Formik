import { Formik, Field, Form } from "formik";

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
          toggle: false
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <div>
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
            <label>
              <Field type="radio" name="type" value="General Enquiry" />
              General Enquiry
            </label>
            <label>
              <Field type="radio" name="type" value="Support Request" />
              Support Request
            </label>
          </div>
          <label htmlFor="message">
            Message *
            <Field
              as="textarea"
              id="message"
              name="message"
              placeholder="Hello, I would like to know if you're able to build Shopify e-commerce sites. We're starting a business and we're going to use Shopify. But it would be great to work with an agency who specialises in working with it."
            />
          </label>
          <label>
            <Field type="checkbox" name="toggle" />
            I consent to being contacted by the team *
          </label>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
}

export default App;