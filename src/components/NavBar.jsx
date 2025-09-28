
export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-gray-900/60">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <span className="text-2xl font-bold">Brian Tokumoto</span>
        <div className="space-x-6">
          <a href="#home" className="text-gray-700 hover:text-indigo-500">Home</a>
          <a href="#experience" className="text-gray-700 hover:text-indigo-500">Experience</a>
          <a href="#projects" className="text-gray-700 hover:text-indigo-500">Projects</a>
          <a href="#certifications" className="text-gray-700 hover:text-indigo-500">Certs</a>
        </div>
      </div>
    </nav>
  );
}