import axios from "axios";
import { createContext, useContext, useState} from "react";

export const AppContext = createContext();

const AppContextComponent = ({children}) => {

    const [urls, setUrl] = useState([]);
    const [cat, setCat] = useState("");
    const [matchList, setMatchList] = useState([]);

    const baseURL = 'https://www.themealdb.com/api/json/v1/1/';

    async function searchResult(obj){

    const word = obj.keyword;
    const cate = obj.category;
    
    
    try{
        if(word.length > 1){
            const res= await axios.get(baseURL + 'search.php', {
            params: { s: word }
            });
            setUrl(res.data.meals);
        }else if(word.length == 1){
            const res = await axios.get(baseURL + 'search.php', {
            params: { f: word }
            });
            setUrl(res.data.meals);
        }else{
            setUrl([])
        }

        setCat(cate)
        
    }catch (err) {
        console.error('Error fetching meals:', err);
    }
    
    }

    console.log(urls, cat);

    

  return (
    <AppContext.Provider value={{urls, cat, searchResult, setUrl, matchList, setMatchList}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppContextComponent

export const useAppData = () => useContext(AppContext)