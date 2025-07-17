
const DetailsComponent = ({details}) => {

    const e = details;
    const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

  return (
    <div className="grid lg:grid-cols-2 grid-col-1 h-full bg-black text-white relative">
        <div className="relative"><img src={e.strMealThumb} alt="" className="w-full h-full"/><div className="absolute left-[0px] z-10 bottom-[30px] bg-red-500 rounded-r-[10px] sm:text-[50px] text-[20px] text-white px-[10px] shadow-[0px_5px_5px_rgba(0,0,0,125)]">{e.strCategory}</div></div>
        <div className="grid sm:grid-cols-2 h-fit p-[10px]">
            <div >{arr.map((a)=>{if(e['strIngredient'+a] !== null){
                return <div className="flex justify-between"><div className="text-yellow-500">{e['strIngredient'+a]}</div>   <div>{e['strMeasure'+a]}</div></div>}
            })
            }</div>
            <div className="text-[30px] text-[green] w-full text-right pr-[20px]">{e.strMeal}</div>
            <div className="sm:col-span-2 mt-[20px]">{e.strInstructions}  <span className="text-blue-500"><a href={e.strYoutube}>Video Here</a></span>  </div>
            
        </div>
    </div>
  )
}

export default DetailsComponent