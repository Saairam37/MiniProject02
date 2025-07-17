import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import DetailsComponent from "./components/DetailsComponent";

const RecipeDetails = () => {

    const {id} = useParams();
    const [details, setDetail] = useState({});
    const base = 'https://www.themealdb.com/api/json/v1/1/';


    useEffect(()=>{
        axios.get(base + 'lookup.php?' + new URLSearchParams({ i: id }))
  .then(res => setDetail(res.data.meals[0]));
    },[])

    console.log(id);

    console.log(details); 

  return (
    (details === null)?(<div></div>):(<DetailsComponent
        details={details}
    />)
  )
}

export default RecipeDetails