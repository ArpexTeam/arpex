import ProjectCard from "./card";

function ProjectGrid() {
    return (
        <div className="relative h-[65vh] flex">

            <div className="overflow-y-scroll 
  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-neutral-500
  [&::-webkit-scrollbar-thumb]:bg-[#00D073]
  [&::-webkit-scrollbar-thumb]:rounded-full
  dark:[&::-webkit-scrollbar-track]:bg-neutral-500
  dark:[&::-webkit-scrollbar-thumb]:bg-[#00D073]
  [&::-webkit-scrollbar-thumb]:opacity-55
  dark:[&::-webkit-scrollbar-thumb]:opacity-55
  ">
                <div className="grid gap-5 grid-cols-2 xl:grid-cols-3 pr-4 ">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>

            </div>
        </div>
    );
}

export default ProjectGrid;
