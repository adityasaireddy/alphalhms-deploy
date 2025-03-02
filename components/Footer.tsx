const Footer = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-8">
        <h1 className="text-3xl">Join Us & Transform Your Career!</h1>
        <p className="mt-8 mb-8">
          Whether youre a beginner, student, working professional, or career
          switcher, Alphalhub Academy is here to help you become a skilled,
          job-ready software developer.
        </p>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex md:flex-row md:justify-around md:items-center">
        <div className=" flex flex-col ">
          <div>
            <h1 className="text-3xl pt-4 pb-4">Alpha Learning Hub</h1>
            <p>
              Flat no 376/B <br /> Raghavendra colony kondapur <br /> Hyderabad
              -500088
            </p>
          </div>
          <div>
            <h2>Contact us at :</h2>
            <p>email: alphalhub123@gmail.com</p>
            <p>mobile: 91-9666234845</p>
          </div>
        </div>
        <div className=" flex flex-col">
          <div className="h-[40%]">
            <h2 className="pt-4 pb-4 text-2xl">Quick Links</h2>
            <ul>
              <li>
                <a href="#">home</a>
              </li>
              <li>
                <a href="#">courses</a>
              </li>
              <li>
                <a href="#">about</a>
              </li>
              <li>
                <a href="#">dashboard</a>
              </li>
              <li>
                <a href="#">new features</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="px-8 py-8 text-center">
        © 2025 Alphalhub. All Rights Reserved. Designed and Developed by Kravas
        it services pvt ltd.
      </p>
    </div>
  );
};

export default Footer;
