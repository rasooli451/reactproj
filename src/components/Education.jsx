

export default function Education(){
    return <div className="w-full space-y-2 mx-auto max-w-3xl border p-4 md:p-8 bg-gray-50 rounded-lg">
    <h2 className="text-2xl font-semibold">Education</h2>
    <hr className="border-t-2"/>
    <div className="space-y-1 w-full">
        <div className="flex justify-between">
            <h3 className="font-bold md:text-lg">Computer Science</h3>
            <p className="text-nowrap">Sep 7, 2022</p>
        </div>
        <h4 className="max-md:text-sm font-medium">York University</h4>
        <p className="max-md:text-sm font-light"><span className="font-semibold">relevant Courses</span> : React Workshop, EECS 2020, Advance OOP, Algorithms and Data Structures</p>
    </div>
</div>
}