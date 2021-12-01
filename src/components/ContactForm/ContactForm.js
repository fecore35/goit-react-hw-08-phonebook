import { Formik, Form, Field, ErrorMessage } from "formik";

import { useSelector, useDispatch } from "react-redux";
import { getContacts, getError } from "../../redux/contacts/contacts-selectors";
import { addContactAsync } from "redux/contacts/contacts-operation";

function ContactForm() {
  const contacts = useSelector(getContacts);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  const onSaveContact = (values, { setSubmitting, resetForm }) => {
    const newContactName = values.name.toUpperCase();
    const knownContactToName = contacts.find(
      ({ name }) => name.toUpperCase() === newContactName
    );

    if (knownContactToName) {
      setSubmitting(false);
      return alert(`${newContactName} is already in contacts.`);
    }

    dispatch(addContactAsync(values));
    resetForm();
    setSubmitting(false);
  };

  const setValidate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Required";
    }

    if (!values.number) {
      errors.number = "Required";
    }

    return errors;
  };

  return (
    <>
      <Formik
        initialValues={{ name: "", number: "" }}
        validate={setValidate}
        onSubmit={onSaveContact}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" id="name" />
            <ErrorMessage name="name" component="div" />

            <label htmlFor="phoneNumber">Number</label>
            <Field type="tel" name="number" id="phoneNumber" />
            <ErrorMessage name="number" component="div" />

            <button type="submit" disabled={isSubmitting}>
              Add contact
            </button>
          </Form>
        )}
      </Formik>

      {error && (
        <h2 style={{ color: "red", textTransform: "uppercase" }}>
          {error.message}
        </h2>
      )}
    </>
  );
}

export default ContactForm;
