// function Home() {
//    return (
//       <>
//          <div className="flex flex-col items-center justify-center h-screen pt-20">
//             <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
//             <div className="text-xl font-bold text-center font-inter sm:text-2xl md:text-5xl">
//                <div className="text-nowrap">Stay Organized. Stay Focused.</div>
//                <div className="inline-block my-4 text-2xl text-transparent sm:text-3xl md:text-6xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text">
//                   Achieve More.
//                </div>
//             </div>
//             <div className="mx-2 my-16 text-xs text-center text-gray-300 description md:w-3/5 text-inter md:text-sm font-poppins">
//                <div className="my-2 text-lg text-gray-200">
//                   Welcome to <span className="font-extrabold font-inter">TaskEase</span>
//                </div>
//                Your ultimate task management solution! Designed to help you plan, prioritize, and achieve your
//                goals effortlessly, TaskEase empowers you to stay productive and on top of your schedule.
//             </div>
//          </div>
//       </>
//    );
// }

// export default Home;

function Home() {
  return (
    <div className="relative min-h-screen bg-gray-50">
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-white to-indigo-50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-24 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl text-center">
          <div className="mb-8 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl font-inter">
            <div className="text-xl font-bold text-center font-inter sm:text-2xl md:text-5xl">
              <div className="text-nowrap">Maximize Efficiency</div>
              <div className="inline-block my-4 text-2xl text-indigo-600 sm:text-3xl md:text-6xl">
                Minimize Distractions
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto mb-12 text-gray-600 md:text-lg">
            <div className="mb-3 text-xl font-medium text-gray-800">
              Welcome to{" "}
              <span className="font-bold text-indigo-600">TaskStream</span>
            </div>
            <p>
              Experience a smarter way to manage tasks. Boost productivity,
              collaborate seamlessly, and accomplish more in less time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
