import { fetchDataFromSanity } from "@/lib/fetch";
import { featuredProjectsQuery } from "@/sanity/lib/queries"; // Define a query for featured projects
import { SanityDocument } from "next-sanity";
import FeaturedStack from "@/components/FeaturedStack/FeaturedStack";
import FeaturedWork from "@/components/FeaturedWork/FeaturedWork";
import FYoutubeSec from "@/components/FeaturedYoutubeSection/FYoutubeSec";
import Introduction from "@/components/Introduction/Introduction";
import { IProject } from "@/types/interfaces";

// initially it was w-80 in place of w-[360px]

const Home = async () => {
  const featuredProjects: SanityDocument<IProject[]> =
    await fetchDataFromSanity({
      query: featuredProjectsQuery,
    });
  return (
    <div className="pt-32 text-light-text_secondary dark:text-dark-text_white flex flex-col items-center">
      <div className="w-[360px] md:w-[720px] py-4 flex flex-col gap-5">
        <Introduction />
        <FeaturedWork projects={featuredProjects} />
        <FYoutubeSec />
        <FeaturedStack />
      </div>
    </div>
  );
};
export default Home;

// A Computer Science enthusiast and developer
// specializing in Software Development. <br></br>Currently, I’m
// contributing to multiple products at a startup, working with
// ReactJS, Redux, and TypeScript to build impactful solutions. Beyond
// coding, I’m passionate about teaching and creating visual,
// interactive content to help students grasp complex CS concepts in an
// engaging way. <br></br> I am deepening my understanding of Machine
// Learning these days.
