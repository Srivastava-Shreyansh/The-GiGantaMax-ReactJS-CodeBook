// import Button from './components/button/button'
// import Header from './components/header/header'

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <Button />
//     </div>
//   )
// }

// export default App


// import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
/*
  localStorage.setItem('user', 'SENSEI_SS');
  localStorage.setItem('age', '19');
  
  const user = localStorage.getItem('user');
  const age = localStorage.getItem('age');
  console.log(user);
  console.log(age);

  localStorage.removeItem('age');

  const student = {
    name: "SENSEI_SS",
    age: 19, 
    city: "Kanpur Nagar"
  }
  
  localStorage.setItem('student', JSON.stringify(student))
  
  const details = JSON.parse(localStorage.getItem('student'));
  console.log(details);
*/  
  // localStorage.clear();

  /*const getData = async () => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users/');

    console.log(data);
  }
  
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')
    
    setData(response.data);
    console.log(response.data);
  }
  */

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  const aChanging = () => {
    console.log("A is Changed!");
  }
  const bChanging = () => {
    console.log("B is Changed!");
  }

  useEffect(function(){
    aChanging();
    // console.log("useEffect is running!");
  }, [a])

  useEffect(function(){
    bChanging();
    // console.log("useEffect is running!");
  }, [b])

  return (
    /*<div>
      <button onClick={getData}>Click Here🫵</button>
      <div>
        {data.map(function(elem) {
          return <div>
            <img src={elem.download_url} alt="some-random-shit" />
          </div>
        })}
      </div>
    </div> */
    <div>

    <h4>A : {a}</h4>
    <button onClick={() => {
      setA(a + 1)
    }}>Change A❤️</button>
    

    <h4>B : {b}</h4>
    <button onClick={() => {
    setB(b + 1)
    }}>Change B❤️</button>

    </div>
  )
}
export default App;