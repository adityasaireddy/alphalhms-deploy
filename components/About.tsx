const About = () => {
  return (
    <div className="bg-gradient-to-r from-green-500 to-green-800">
      <div className="max-w-7xl mx-auto flex flex-col gap-4 ">
        <div className="flex flex-col justify-center items-center mt-2 ">
          <h2 className="text-5xl font-semibold mt-4 mb-4">
            Alphalhub Academy
          </h2>
        </div>
        <div className="flex flex-col md:flex md:flex-row gap-8">
          <div>
            <p className="text-lg font-bold">
              Empowering the Next Generation of Software Developers
            </p>
            <p className="text-left">
              At Alphalhub Academy, we believe in hands-on learning and
              industry-focused training to help aspiring developers transition
              from beginners to job-ready professionals. Our mission is to
              bridge the gap between traditional education and the skills
              required in the real-world IT industry.
            </p>
            <h2 className="mt-4 text-2xl font-semibold">Why we Started</h2>
            <p className="text-left mt-4">
              The demand for skilled software developers is growing, but many
              students and professionals struggle to gain practical experience.
              We founded Alphalhub Academy to provide an interactive,
              project-driven learning platform where learners can master
              full-stack development, software engineering, and modern
              technologies with real-world applications
            </p>
          </div>
          <div className="w-[60%] pb-8 flex-col justify-center items-center">
            <h1 className="text-2xl font-semibold mb-4">What We Offer</h1>
            <ul>
              <li>✅ Industry-Expert Instructors</li>
              <li>– Learn from experienced professionals.</li>
              <li>✅ Zero to Mastery Curriculum</li>
              <li>– Beginner-friendly to advanced job-ready skills.</li>
              <li>✅ Hands-on Coding & Real-World Projects</li>
              <li>– Gain practical experience.</li>
              <li>✅ Placement Assistance & Career Guidance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
