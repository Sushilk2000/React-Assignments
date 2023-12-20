function Hero() {
  return (
    <>
      <div>
        <div className="bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat w-full h-[100vh]">
          <section className="flex items-center h-full px-[20%]">
            <div className="flex flex-col items-center text-center w-[50%] gap-y-8">
              <h1 className="text-5xl font-bold">
                Let us find your{" "}
                <span className="text-red-600">Forever Food.</span>
              </h1>
              <span className="text-lg text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt illo tenetur fuga ducimus numquam ea!
              </span>
              <div>
                <button className="bg-red-700 font-semibold text-white rounded py-2 px-9 mr-2 hover:bg-white hover:text-red-700">
                  Search Now
                </button>
                <button className="bg-white font-semibold text-red-700 rounded py-2 px-9 ml-2 hover:bg-red-700 hover:text-white">
                  Know More
                </button>
              </div>
            </div>
          </section>
        </div>
        <div className="px-8 py-16">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="bg-gray-100 relative flex items-center">
              <span className=" hidden bg-gray-100 lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16"></span>
              <div className="flex flex-col text-start justify-center items-start gap-6 mx-24 w-full h-full">
                <h2 className="text-3xl font-bold">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempore, debitis.
                </h2>
                <span className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid, molestiae! Quidem est esse numquam odio deleniti,
                  beatae, magni dolores provident quaerat totam eos, aperiam
                  architecto eius quis quibusdam fugiat dicta.
                </span>
                <button className="px-12 py-3 text-sm rounded-md bg-blue-700 text-white font-semibold hover:bg-transparent border-blue-700 border hover:text-blue-700">
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
