const ContactForm = () => {
  return (
    <section className="bg-white py-20" id="contact">
      <div className="align-elements max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Contact <span className="text-emerald-600">Me</span>
        </h2>
        <form
          className="bg-emerald-100 p-8 rounded-lg shadow-lg"
          id="contact"
          action="https://formspree.io/f/xkgwgwab"
          method="post"
        >
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-lg text-slate-600 mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              className="w-full p-3 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-lg text-slate-600 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-lg text-slate-600 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full p-3 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-emerald-600 text-white text-lg rounded-lg hover:bg-emerald-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
