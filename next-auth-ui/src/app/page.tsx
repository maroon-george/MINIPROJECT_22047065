export default function Home(){
return (
  <div  className="h-screen flex flex-col items-canter justify-center gap-3 p-4 w-full bg-[#2C2C2C] ">
    <h1 className="text-5xl text-[#A8DADC] text-center font-bold lg:text-8xl md:text-5xl">Welcome to the Student Management System</h1>
    <p className="font-bold mt-6 text-center text-lg">This is a simple application to manage students</p>
    <p className="text-[#B39CD0] text-center text-lg">Navigate to the <a href="/student" className="underline text-blue-300 hover:text-blue-400">Student Page</a> to view and manage students.</p>
  </div>
)
}
 