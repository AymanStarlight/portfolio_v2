
import prompy from "../../assets/prompy-overview.png";
import Project from "./Project"

function Portfolio() {
  return (
    <div className="bg-primary-light w-screen relative bottom-[170px] flex font-manrope px-14 pt-40">
        <div>
            <p className="font-medium text-lg pr-40 pt-4">
                {"{Portfolio}"}
            </p>
        </div>
        <div className="grow">
            <p className="text-primary-dark text-8xl font-semibold">Projects <span className="text-secondary-dark">Overview</span></p>
            <div className="flex flex-col gap-16 mt-12">
                <Project name="Prompy" img={prompy} tech="Next.js, React, Node.js, MongoDB, TailwindCSS." desc="An AI prompting tool brewed to unleash the creative powers of AI Platforms. Discover, Create and share the best prompts." />
                <Project name="Prompy (Laravel)" img={prompy} tech="PHP, Laravel, Livewire, TailwindCSS, MySQL." desc="An AI prompting tool brewed to unleash the creative powers of AI Platforms. Discover, Create and share the best prompts." />
                <Project name="Palettium" img={prompy} tech="React, VanillaJS, TailwindCSS." desc="A Feature-Rich Single Page Application for Creating, Viewing and Sharing Color Palettes." />
                <Project name="Portfolio V1" img={prompy} tech="React, VanillaJS, SASS." desc="A personal portfolio to showcase my projects & my skills." />
            </div>
        </div>
    </div>
  )
}
export default Portfolio