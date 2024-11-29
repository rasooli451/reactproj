import Education from "./Education"
import Header from "./Header"
import Projects from "./Projects"
export default function HomePage(){
    return <main className="p-4 md:p-8 xl:p-16 space-y-6">
        <Header/>
        <Education/>
        <Projects/>
    </main>
}