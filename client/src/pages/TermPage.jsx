import { useParams } from "react-router";
import { Bookmark, BookmarkCheck, Plus, ThumbsUp, ThumbsDown } from "lucide-react"; // Import both icons (bookmark and checked bookmark)
import slangData from "../../../data/slang.json";
import { useState } from "react";

export default function TermPage() {
  const term = useParams()?.term;
  const data = slangData.find((item) => item.term === term);
  const [isChecked, setIsChecked] = useState(false);
  //useState to user.saved.find(term)
  const language = data?.language
  const oppositeLanguage = language === "Korean" ? "Japanese" : "Korean";

  // Function to handle checkbox change
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    //store the term to user
    console.log(event.target.checked);
  };


  console.log(data);

  return (
    <div className="flex items-center justify-center pt-10">
      <div className="max-w-4xl w-full border-2 border-blue-500 rounded-lg">
        <div className="flex flex-row justify-between">
          <h1 className="text-4xl font-medium p-3">{data?.term}</h1>
          <div className="flex items-center">
            <button className="" >
                {/*Dialog with post function*/}
                <Plus size="45" strokeWidth="1.5" className="text-gray-500 hover:text-blue-500 translation" />
            </button>
            <label>
              {/* Hide the default checkbox */}
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="hidden"
              />
              {/* Display the bookmark icon based on the checkbox state */}
              {isChecked ? (
                <BookmarkCheck size="45" strokeWidth="1.3" className="cursor-pointer mr-2 text-blue-500" />
              ) : (
                <Bookmark size="45" strokeWidth="1.3" className="cursor-pointer mr-2 text-blue-500" />
              )}
            </label>
          </div>
        </div>
        {data?.lists.map((item, index) => {
            return (
              <div key={index} className="p-3 flex flex-row">
                <h2 className="text-gray-500 text-3xl m-2">{`${index+1}.`}</h2>
                <div className="border border-gray-300 w-full rounded-lg flex flex-col">
                    <div className="meanings m-2">
                    <p className="font-medium">뜻/意味</p>
                    <p className="ml-2">{language === 'Korean' ? `KR: ${item?.meanings?.Korean}` : `JP: ${item?.meanings?.Japanese}`}</p>
                    <p className="ml-2">{language === 'Korean' ? `JP: ${item?.meanings?.Japanese}` : `KR: ${item?.meanings?.Korean}`}</p>
                    </div>
                    <div className="examples m-2">
                    <p className="font-medium">예시/例文</p>
                    <p className="ml-2">{language === 'Korean' ? `KR: ${item?.examples?.Korean}` : `JP: ${item?.examples?.Japanese}`}</p>
                    <p className="ml-2">{language === 'Korean' ? `JP: ${item?.examples?.Japanese}` : `KR: ${item?.examples?.Korean}`}</p>
                    </div>
                    {/*change it from showing id to username*/}
                    <div className="m-2 flex flex-row justify-between items-center">
                        <p>{`by ${item.createdBy}, ${item.createdAt}`}</p>
                        <div className="ml-2 flex flex-row items-center gap-2">
                            <div className="border border-blue-500 rounded-lg text-blue-500">
                                <button className="flex flex-row gap-2 items-center borderrounded-lg my-1 mx-2">
                                    <ThumbsUp size="20" className="text-blue-500" />
                                    {item.likes}
                                </button>
                            </div>
                            <div className="border border-blue-500 rounded-lg text-blue-500">
                                <button className="flex flex-row gap-2 items-center borderrounded-lg my-1 mx-2">
                                    <ThumbsDown size="20" className="text-blue-500" />
                                    {item.dislikes}
                                </button>
                            </div>
                            {/*add report function*/}
                        </div>
                    </div>
                </div>
              </div>
            );
  
        })}
      </div>
    </div>
  );
}
