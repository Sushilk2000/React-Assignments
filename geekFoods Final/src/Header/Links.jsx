import { Link } from "react-router-dom";

const Links = ({ activeTab, data }) => {
  return (
    <>
      <ul className="hidden gap-8 font-medium md:flex">
        {data.map((item) =>
          item.path === activeTab ? (
            <li
              className="text-blue-500 duration-200 cursor-pointer hover:text-blue-600"
              key={item.path}
            >
              <Link to={item.path}>{item.label}</Link>
            </li>
          ) : (
            <li
              className="duration-200 cursor-pointer hover:text-blue-600"
              key={item.path}
            >
              <Link to={item.path}>{item.label}</Link>
            </li>
          )
        )}
      </ul>
    </>
  );
};
export default Links;
