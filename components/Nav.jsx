import requests from "../utils/requests";

function Nav() {
  return (
    <nav>
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll h-16">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 h-fit"
            key={key}
          >
            {title}
          </h2>
        ))}
      </div>
    </nav>
  );
}

export default Nav;