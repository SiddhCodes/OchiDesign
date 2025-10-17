import { ArrowUpRight } from "lucide-react";
import Button from "./Button";

const LandingPage = () => {
  return (
    <div className="pt-1 h-screen flex flex-col justify-between">
      <div className="p-5 mt-20 lg:mt-38 lg:px-15">
        {["We create", "eye-opening", "presentations"].map((e, i) => {
          return (
            <div
              key={i}
              className="flex items-baseline gap-2 font-[FoundersGrotesk]"
            >
              {i === 1 && (
                <div className="w-[15vw] h-[9.5vw] uppercase  relative font-extrabold bg-amber-500 rounded lg:w-[8.5vw] lg:h-[5.5vw]"></div>
              )}
              <div className="text-[15vw] uppercase font-extrabold leading-12 lg:leading-24 lg:text-[9vw]">
                {e}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mb-25 ">
        <div className="w-full h-[1px] bg-amber-800"></div>
        <div className="px-5 py-3 flex flex-col gap-7 lg:flex-row lg:justify-between lg:px-15 lg:py-5">
          {[
            "Presentation and storytelling agency",
            "For innovation teams and global brands",
          ].map((e, i) => {
            return <p key={i}>{e}</p>;
          })}
          <div className="flex flex-row gap-2 items-center ">
            <Button v={"start the project"} />
            <div className="hidden lg:inline lg:rounded-full lg:px-1 lg:py-1 lg:border ">
              <ArrowUpRight className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
