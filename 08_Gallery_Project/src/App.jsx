import axios from "axios";
import { useEffect, useState } from "react";
import Pictures from "./components/Pictures";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  useEffect(() => {
  const getData = async () => {
    try{
        const response = await axios.get(
            `https://picsum.photos/v2/list?page=${index}&limit=20`
        );
        
        setUserData(response.data);
    } catch(error){
        console.log("Error fetching images: ", error);
    }
  };

  getData();
}, [index]);

  let printUserData = (
    <h2 className="text-gray-500 text-xl absolute top-1/2 left-1/2 -translate-x-0.5 -translate-y-0.5">
      Loading...
    </h2>
  );
  if (userData.length > 0) {
    printUserData = userData.map(function (elem) {
      return (
          <Pictures key={elem.id} elem={elem} />
      );
    });
  }

  return (
    <div className="bg-black overflow-auto h-screen text-white">
      <div className="flex flex-wrap gap-4 p-2">{printUserData}</div>

      <div className="flex items-center justify-center gap-6 p-4">
        <button
          style={{ opacity: index === 1 ? 0.5 : 1 }}
          className="bg-purple-600 text-xl cursor-pointer active:scale-95 font-bold px-4 py-2 rounded-xl"
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]);
            }
          }}
        >
          Previous
        </button>

        <h1 className="text-xl">Page {index}</h1>

        <button
          className="bg-purple-600 text-xl cursor-pointer active:scale-95 font-bold px-4 py-2 rounded-xl"
          onClick={() => {
            setIndex(index + 1);
            setUserData([]);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;