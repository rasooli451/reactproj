import Project from "./Project"
export default function Projects(){
    return <div className="w-full space-y-2 mx-auto max-w-3xl border p-4 md:p-8 bg-gray-50 rounded-lg">
    <h2 className="text-2xl font-semibold">Projects</h2>
    <hr className="border-t-2"/>
    <Project title="To Do List App" tools="JavaScript | HTML | CSS | Webpack"/>
    <Project title="Weather App" tools="Java | Python"/>
    
</div>
}