import { Link } from "react-router"

const ListsItems = ({e}) => {
  return (

    <Link to={"/details/"+e.idMeal}>
    <div className="w-[200px] grid grid-row-5 rounded-[10px] bg-black relative shadow-xl h-[270px] hover:scale-[1.05]">
        <img src={e.strMealThumb} alt="" className="w-full rounded-t-[10px] row-span-3" />
        <div className="relative row-span-2 p-[10px] text-white">{e.strMeal}</div>
        <div className="absolute right-[-5px] z-10 top-[10px] bg-red-500 rounded-l-[10px] text-white px-[10px] shadow-[0px_5px_5px_rgba(0,0,0,125)]">{e.strCategory}</div>
    </div>
    </Link>
    
    
  )
}

export default ListsItems