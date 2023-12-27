function Header() {
  return (
    <>
      <header className="sticky shadow-md bg-gray-800 text-white w-full top-0 ">
        <nav className="ml-[120px] mr-[120px] p-4 flex justify-between">
          <div className="flex gap-3 items-center text-2xl font-semibold">
            <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
            <h2>GeekFoods</h2>
          </div>
          <div className="flex">
            <ul className="flex gap-8 font-semibold items-center">
              <li className="hover:text-blue-700 cursor-pointer">Home</li>
              <li className="hover:text-blue-700 cursor-pointer">Quote</li>
              <li className="hover:text-blue-700 cursor-pointer text-blue-400">
                Resturants
              </li>
              <li className="hover:text-blue-700 cursor-pointer">Foods</li>
              <li className="hover:text-blue-700 cursor-pointer">Contact</li>
            </ul>
          </div>
          <div className="flex font-semibold text-white">
            <button className="bg-blue-700 py-2 px-4 rounded-lg cursor-pointer hover:bg-white hover:text-blue-700 border-blue-700 border-[1px]">
              Get started
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
