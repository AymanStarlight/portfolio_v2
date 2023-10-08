
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
            <div className="grid grid-cols-3 pt-14">
                <Project name="Prompy" img={prompy}/>
                <Project name="Prompy" img={prompy}/>
                <Project name="Prompy" img={prompy}/>
                <Project name="Prompy" img={prompy}/>
                <Project name="Prompy" img={prompy}/>
            </div>
        </div>
    </div>
  )
}
export default Portfolio