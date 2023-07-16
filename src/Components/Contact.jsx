import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <h1>CONTACT US</h1>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="text" placeholder="Your E-mail" required />
        <textarea name="message" placeholder="Message here"></textarea>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Contact;
