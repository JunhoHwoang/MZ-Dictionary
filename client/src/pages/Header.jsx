import Navbar from "./Navbar";
import SearchBar from "./Searchbar";

export default function Header({language, setLanguage}){
    return(
        <div className="flex flex-col gap-20">
            <Navbar language={language} setLanguage={setLanguage}/>
            <SearchBar language={language} />
        </div>
    )
}