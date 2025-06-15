import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

// Image imports
import integratedHousingMain from "../assets/integrated-housing.png";
import integratedHousingListings from "../assets/integrated-housing-listings.png";
import integratedHousingProfile from "../assets/integrated-housing-profile.png";
import integratedHousingSearch from "../assets/integrated-housing-search.png";

import taskMeDashboard from "../assets/taskme-dashboard.png";
import taskMeSystemReview from "../assets/taskme-system-review.png";
import taskMeTaskOverview from "../assets/taskme-task-overview.png";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, image, description, url }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-5 text-deep-blue`;

  return (
    <motion.div variants={projectVariant} className="relative max-w-[400px] max-h-[400px] overflow-hidden">
      <div className={overlayStyles}>
        <p className="text-xl font-playfair font-semibold">{title}</p>
        <p className="mt-4 text-sm">{description}</p>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-4 py-2 bg-red text-white rounded hover:bg-blue transition"
          >
            Visit Project
          </a>
        )}
      </div>
      <img src={image} alt={`${title} screenshot`} className="w-full h-full object-cover" />
    </motion.div>
  );
};

const Projects = () => {
  const projects = {
    "Integrated Housing": {
      description: "A comprehensive real estate platform with property listings, search, and user profiles.",
      url: "https://real-estate-marketplace-1-wtw3.onrender.com/",
      screenshots: {
        main: integratedHousingMain,
        listings: integratedHousingListings,
        profile: integratedHousingProfile,
        search: integratedHousingSearch,
      },
    },
    "TaskMe": {
      description: "A productivity app for task management with progress tracking and team collaboration.",
      url: "https://taskme-task-manager.vercel.app/",
      screenshots: {
        dashboard: taskMeDashboard,
        review: taskMeSystemReview,
        overview: taskMeTaskOverview,
      },
    },
  };

  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          A selection of projects that reflect my skills in full-stack
          development, UI/UX design, and modern web technologies.
        </p>
      </motion.div>

      {/* PROJECT GRID */}
      <div className="flex justify-center">
        <motion.div
          className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Decorative Text */}
          <div className="flex justify-center text-center items-center p-10 bg-red text-white font-playfair font-semibold text-2xl">
            BEAUTIFUL USER INTERFACES
          </div>

          {/* ROW 1 */}
          <Project
            title="Integrated Housing"
            image={projects["Integrated Housing"].screenshots.main}
            description={projects["Integrated Housing"].description}
            url={projects["Integrated Housing"].url}
          />
          <Project
            title="TaskMe Dashboard"
            image={projects["TaskMe"].screenshots.dashboard}
            description={projects["TaskMe"].description}
            url={projects["TaskMe"].url}
          />

          {/* ROW 2 */}
          <Project
            title="Integrated Housing Listings"
            image={projects["Integrated Housing"].screenshots.listings}
            description="Browse available properties with filters and sorting."
          />
          <Project
            title="TaskMe System Review"
            image={projects["TaskMe"].screenshots.review}
            description="Track progress and analyze team performance."
          />
          <Project
            title="Integrated Housing Profile"
            image={projects["Integrated Housing"].screenshots.profile}
            description="User profiles with saved properties and preferences."
          />

          {/* ROW 3 */}
          <Project
            title="TaskMe Task Overview"
            image={projects["TaskMe"].screenshots.overview}
            description="Detailed task view with comments and attachments."
          />
          <Project
            title="Integrated Housing Search"
            image={projects["Integrated Housing"].screenshots.search}
            description="Advanced search with map integration."
          />
          <div className="flex justify-center text-center items-center p-10 bg-blue text-white font-playfair font-semibold text-2xl">
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
