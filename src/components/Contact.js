const Contact = () => {
  return (
    <div>
      <h2 className="font-bold text-3xl p-4 m-4">Get in touch</h2>
      <div>
        <form>
          <input
            type="text"
            className="border border-black p-2 m-2"
            placeholder="Name"
          ></input>
          <input
            type="text"
            className="border border-black p-2 m-2"
            placeholder="Message"
          ></input>
          <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
