import { useState } from "react"

export default function Project(props){
    const [isopen, setIsopen] = useState(false);
    function handleToggle(){
        if (isopen){
            setIsopen(false);
        }
        else{
            setIsopen(true);
        }
    }
    return <div className="space-y-1 w-full">
    <h3 className="font-bold md:text-lg">
        {props.title}
    </h3>
    <p className="text-xs md:text-sm text-gray-500">{props.tools}</p>
    <button onClick={handleToggle}>{(isopen ? "Show Less" : "Show More")}</button>
    {isopen === true ? (
        <ul className="ml-4 list-disc text-sm">
        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia quae odio dolore placeat est! Ducimus!</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nam obcaecati ratione sunt nesciunt voluptatibus! Impedit ea est quas consequatur!</li>
    </ul>
    ): null}
    
</div>
}