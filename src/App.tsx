import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Autocomplete } from "./components/Autocomplete";

function App() {
  /* A hook that is called when the component is mounted. It fetches the data from the API and sets the
  state. */
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    /**
     * We're using the fetch API to make a request to the url, then we're using the await keyword to
     * wait for the result of the request, then we're using the await keyword again to wait for the
     * result of the json() method, then we're setting the state of the suggestions array to the data we
     * got back from the request
     */
    const fetchData = async () => {
      const url = "https://jsonplaceholder.typicode.com/users";
      const result = await fetch(url);
      const data = await result.json();
      setSuggestions(data.map((user: { name: string }) => user.name));
    };
    fetchData();
  }, []);

  return (
    <div className='App'>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>Autocomplete App</h2>
      <div className='card'>
        <Autocomplete suggestions={suggestions} />
      </div>
    </div>
  );
}

export default App;
