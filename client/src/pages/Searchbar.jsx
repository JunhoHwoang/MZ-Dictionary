import { useState, useCallback } from "react";
import slangData from "../../../data/slang.json";
import { Search, X } from "lucide-react";
import { Link } from "react-router";
import axios from "axios";
import _ from "lodash";

function SearchBar({language}) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState(slangData);

  //   // Debounce function (when the database is implemented)
//   const fetchSuggestions = useCallback(
//     _.debounce(async (value) => {
//       if (value.trim() === "") {
//         setSuggestions([]);
//         return;
//       }
//       try {
//         const response = await axios.get(/api/search?query=${value});
//         setSuggestions(response.data);
//       } catch (error) {
//         console.error("Error fetching suggestions:", error);
//       }
//     }, 300), // 300ms delay
//     []
//   );

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    //fetchSuggestions(value);
  };

  const handleClick = () => {
    setQuery("");
    // fetchSuggestions("");
  };

  console.log(language);
  const oppositeLanguage = (language === "Korean") ? "Japanese" : "Korean"

  return (
    <div className="flex items-center justify-center  px-4">
      <div className="w-full max-w-4xl">
        <div className="relative">
          <Search size="25" className="text-gray-400 absolute left-2.5 top-2.5" />
          <input
            className="w-full rounded-xl border border-gray-300 h-11 px-10"
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search..."
          />
          {query && (
            <button onClick={handleClick} className="absolute right-2.5 top-2.5">
              <X size={25} className="text-gray-800" />
            </button>
          )}
        </div>
        <div className="relative rounded-md border border-gray-300 mt-1">
            <ul className="">
          {suggestions.map((item, index) => (
            <li key={index} className="p-1 hover:bg-gray-200 rounded-md"><Link to={`/term/${item.term}`} key={index} >
                <p>
                <span className="font-medium">{item.term}</span>
                <span className="ml-2 text-gray-400">{item.lists[0].meanings[oppositeLanguage] + " / " + item.lists[0].meanings[language]}</span>
                </p>
            </Link>
            </li>
            
          ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
