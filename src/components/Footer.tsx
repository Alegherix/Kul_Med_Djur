const testComponent = () => {};

const Footer = () => {
  return (
    <footer className="flex justify-center px-4 text-gray-800 bg-white dark:text-white dark:bg-gray-800">
      <div className="py-6">
        <p className="text-lg font-bold text-center lg:text-2xl">
          Skriv upp dig till vårat nyhetsbrev för att se till att du aldrig
          missar några av våra events.
        </p>

        <div className="flex justify-center mt-6">
          <div className="bg-white border rounded-md">
            <div className="flex flex-wrap justify-between md:flex-row">
              <input
                type="email"
                className="p-2 m-1 text-sm text-gray-700 appearance-none focus:outline-none focus:placeholder-transparent"
                placeholder="Enter your email"
                aria-label="Enter your email"
              ></input>
              <button className="w-full p-2 m-1 text-sm font-semibold text-white uppercase transition-colors duration-200 transform bg-blue-500 rounded-md lg:w-auto hover:bg-blue-400">
                subscribe
              </button>
            </div>
          </div>
        </div>

        <hr className="h-px mt-6 border-gray-300 border-none dark:bg-gray-700"></hr>

        <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
          <div>
            <a
              href="#"
              className="text-xl font-bold text-blue-500 dark:text-white hover:text-blue-400 dark:hover:text-gray-300"
            >
              Folksam
            </a>
          </div>

          <div className="flex mt-4 md:m-0">
            <div className="-mx-4">
              <a
                href="#"
                className="px-4 text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 hover:underline"
              >
                Om oss
              </a>
              <a
                href="#"
                className="px-4 text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 hover:underline"
              >
                Blog
              </a>
              <a
                href="#"
                className="px-4 text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 hover:underline"
              >
                Nyheter
              </a>
              <a
                href="#"
                className="px-4 text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 hover:underline"
              >
                Kontakta oss
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
