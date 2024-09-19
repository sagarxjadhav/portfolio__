import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './ContactStyles.module.css';

function Contact() {
  const form = useRef();
  const [formValues, setFormValues] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Validate the form inputs
  const validate = () => {
    let errors = {};

    // Trim to avoid accepting just spaces
    if (!formValues.name.trim()) {
      errors.name = 'Name is required and cannot be empty spaces';
    }
    if (!formValues.email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(formValues.email.trim())) {
      errors.email = 'Invalid email format';
    }
    if (!formValues.message.trim()) {
      errors.message = 'Message is required and cannot be empty spaces';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    if (validate()) {
      setIsSubmitting(true);
      emailjs.sendForm(
        'service_z39x9o7', // Replace with your EmailJS service ID
        'template_ohprer1', // Replace with your EmailJS template ID
        form.current,
        'MVVv2NLPY3tfvbukc' // Replace with your EmailJS user ID (or public key)
      )
        .then((result) => {
          console.log(result.text);
          alert('Email sent successfully!');
        })
        .catch((error) => {
          console.log(error.text);
          alert('Failed to send email.');
        })
        .finally(() => {
          setIsSubmitting(false);
          e.target.reset();
          setFormValues({ name: '', email: '', message: '' });
        });
    }
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={formValues.name}
            onChange={handleInputChange}
            required
          />
          {formErrors.name && <p className="error">{formErrors.name}</p>}
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            value={formValues.email}
            onChange={handleInputChange}
            required
          />
          {formErrors.email && <p className="error">{formErrors.email}</p>}
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            value={formValues.message}
            onChange={handleInputChange}
            required></textarea>
          {formErrors.message && <p className="error">{formErrors.message}</p>}
        </div>
        <input className="hover btn" type="submit" value="Submit" disabled={isSubmitting} />
      </form>
    </section>
  );
}

export default Contact;
