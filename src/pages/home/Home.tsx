import m1 from './../../assets/home1503387762.avif';

export function Home() {
  return (
    <>
      <div className="relative mt-0 w-full bg-black pb-24 pt-64">
        <div className="relative z-10 mx-auto max-w-xl text-center text-white">
          <h1 className="mb-4 text-xl font-bold uppercase italic lg:text-4xl">
            Administrar tareas
          </h1>
          <a
            href="/login"
            className="border-white-900 mr-2 mt-8 inline-block w-52 rounded-full border-2 px-8 py-3 text-lg text-white hover:bg-white hover:text-black"
          >
            Inciar Sesión
          </a>
          <a
            href="/register"
            className="border-white-900 mt-8 inline-block w-52 rounded-full border-2 px-8 py-3 text-lg text-white hover:bg-white hover:text-black"
          >
            Unete
          </a>
        </div>
        <img
          src={m1}
          alt="slideshow"
          className="absolute inset-0 h-full w-full object-cover opacity-75"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto grid grid-cols-1 px-6 py-24 lg:grid-cols-2">
        <div className="flex items-center justify-center lg:px-32 lg:py-32">
          <div>
            <h2 className="mb-6 text-5xl font-bold uppercase italic text-black">
              Contractors you can trust
            </h2>
            <p className="text-lg text-black">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a
              href="/"
              className="mt-8 inline-block rounded-full border-2 border-gray-900 px-8 py-3 text-lg text-black hover:bg-black hover:text-white"
            >
              Our Promise
            </a>
          </div>
        </div>
        <div className="relative hidden grid-cols-2 lg:grid">
          <div className="pt-24">
            <img
              src="https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"
              alt="contractors"
              className="absolute inset-0 z-10 -mt-6 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
