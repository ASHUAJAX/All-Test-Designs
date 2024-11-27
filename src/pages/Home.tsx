import { Link } from "react-router-dom";

interface AllTests {
  name: string;
  url: string;
}

function Home() {
  const allTests: AllTests[] = [
    {
      name: "LilyPad Test",
      url: "/lilypad-test",
    },
    {
      name: "WinishTech Test",
      url: "/winishtech-test",
    },
  ];

  return (
    <div className="bg-gray-800  h-[100vh]">
      <h1 className="text-center text-4xl font-bold p-5  text-lime-400">My Web UI Tests</h1>
      <div className="m-10 flex items-center justify-center gap-4">
        {" "}
        {allTests.map((elm) => (
          <Link to={elm.url}  >
            <button className="bg-lime-500 p-10 shadow-custom rounded-md font-bold text-gray-800">Go To {elm.name}</button>
          </Link>
        ))}{" "}
      </div>
    </div>
  );
}

export default Home;
