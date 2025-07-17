import { useLoaderData } from "react-router";
import IngFiltList from "./IngFiltList";
import { useState } from "react";

const IngFilter = () => {

    const ingLists = useLoaderData();
    const [match, setMatch] = useState([]);

    function findWord(ele, word){
        let newArr = ele.split(' ').filter(name=>name.toLowerCase().startsWith(word));
            if(newArr.length === 0){
                return false
            }else{
            return true
            }
        }
    const searchedIng =(event) => {
        const theWord = event.target.value;
        console.log(theWord);
        let matches = []
        if(theWord === ""){
            setMatch([]);
        }else{
            matches = ingLists.filter(name =>findWord(name, theWord));
            setMatch(matches);
        }
        
    }

  return (
    <div className="">
        <input type="text" placeholder="Filter by Ingredients" id="ingFind" onChange={searchedIng} className='relative bg-gray-300 p-[10px] sm:w-[200px] w-full rounded-[5px] sm:text-[15px] text-[10px]'/>
        <div className="sm:w-[200px] w-[150px] h-max-64 overflow-y-auto absolute z-30">
            {
            match.map((mat,ind)=><IngFiltList
                key={ind}
                mat={mat}
                setMatch={setMatch}
            />)
        }
        </div>
    </div>
  )
}

export default IngFilter