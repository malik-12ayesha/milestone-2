import React from "react";
import ContactForm from "../components/ContactForm";
import Navbar from "../components/Navbar";
import ContactText from "../components/ContactText";
import Footer from "../components/Footer";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <ContactText />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
