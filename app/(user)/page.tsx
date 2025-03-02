import Hero from "@/components/Hero";
import { getCourses } from "@/sanity/lib/courses/getCourses";
import { CourseCard } from "@/components/CourseCard";
import About from "@/components/About";
export default async function Home() {
  const courses = await getCourses();

  const whyuscontent: object = [
    {
      title: "Placement support",
      content:
        "We provide resume building, mock interviews, coding challenges, and job referrals to help you land your dream job.",
    },
    {
      title: "Learn from Industry Experts",
      content:
        "Get trained by experienced professionals who have worked on real-world software projects and understand what companies look for in developers.",
    },
    {
      title: "Hands-on, Project-Based Learning",
      content:
        "We focus on practical coding with real-world projects to ensure you gain the experience needed to become job-ready.",
    },
    {
      title: "Industry-Recognized Certification",
      content:
        "Earn a verified certification that showcases your expertise and boosts your career prospects.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Hero />

      {/* Courses Grid */}
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 py-8">
          <div className="h-px flex-1 bg-gradient-to-r from-border/0 via-border to-border/0" />
          <span className="text-sm font-medium text-muted-foreground">
            Featured Courses
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-border/0 via-border to-border/0" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
          {courses.map((course) => (
            <CourseCard
              key={course._id}
              course={course}
              href={`/courses/${course.slug}`}
            />
          ))}
        </div>
      </div>
      <div className="w-full bg-gradient-to-r from-green-500 to-green-800">
        <div className="max-w-7xl mx-auto ">
          <h1 className="flex flex-col justify-center items-center text-2xl font-semibold py-4 ">
            Why choose us ?
          </h1>
          <div className="max-w-7xl mx-auto flex flex-col md:flex md:flex-row gap-4">
            <div className="flex flex-col justify-center items-center bg-white/40 rounded-lg h-60 px-4 py-5 gap-3">
              <h2 className="text-2xl font-bold text-center">
                Placement Assistance & Career Support
              </h2>
              <p className="text-center">
                We provide resume building, mock interviews, coding challenges,
                and job referrals to help you land your dream job.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center bg-white/40 rounded-lg h-60 px-4 py-5 gap-3">
              <h2 className="text-2xl font-bold text-center">
                Learn from Industry Experts
              </h2>
              <p className="text-center">
                Get trained by experienced professionals who have worked on
                real-world software projects and understand what companies look
                for in developers.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center bg-white/40 rounded-lg h-60 px-4 py-5 gap-3">
              <h2 className="text-2xl font-bold text-center">
                Hands-on, Project-Based Learning
              </h2>
              <p className="text-center">
                We focus on practical coding with real-world projects to ensure
                you gain the experience needed to become job-ready.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center bg-white/40 rounded-lg h-60 py-8 px-8 gap-3 ">
              <h2 className="text-2xl font-bold text-center">
                Industry-Recognized Certification
              </h2>
              <p className="text-center">
                Earn a verified certification that showcases your expertise and
                boosts your career prospects.
              </p>
            </div>
          </div>
          <button className="mt-5 border border-2 px-4 border-gray-600 text-gray-800 rounded-lg mb-8 ">
            More than 100+ Companies Visiting Alpha Learning Hub
          </button>
        </div>
      </div>
      <About />
    </div>
  );
}
