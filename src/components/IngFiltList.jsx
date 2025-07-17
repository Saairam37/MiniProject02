import { useAppData } from '../context/AppContextComponent'

const IngFiltList = ({mat, setMatch}) => {

    const {matchList, setMatchList} = useAppData();


  return (
    <button className='p-[10px] w-full sm:text-[12px] text-[10px] text-white bg-[green] my-[2px]' value={mat} onClick={(mat)=>{
        if(matchList.includes(mat.target.value)){
            alert("Already chose this ingredient")
        }else{
            setMatchList([...matchList, mat.target.value]);
            let ingFind = document.getElementById("ingFind");
            ingFind.value="";
            setMatch([])
            console.log(matchList)
        }
    }}>{mat}</button>
  )
}

export default IngFiltList