import axios from 'axios';

const ingLoaders = async () => {
  try{
    const response = await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
    return response.data.meals.map((list)=>{ return list.strIngredient});;
  }catch(error){
    return [];
  }
}

export default ingLoaders