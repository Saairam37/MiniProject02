import React from 'react'
import { useAppData } from '../context/AppContextComponent'
import IngFilter from './IngFilter';



const SelectedIng = () => {

  const {matchList, setMatchList} = useAppData();

  return (matchList == [])?(<IngFilter/>):(
    <div className='justify-self-center flex flex-wrap items-center gap-[5px] sm:w-[500px] w-[80%] mt-[20px]'>
    <div className='flex gap-[5px] flex-wrap mt-[5px] sm:text-[15px] text-[10px] items-center'>
      {
        matchList.map((mat, ind)=><div className='bg-[blue] p-[5px] h-fit w-[fit] text-white rounded-[5px]' key={ind}>{mat} <button className='text-[red]' onClick={(e)=>{
          e.preventDefault();
          const newMatch = [...matchList];
          const index = newMatch.indexOf(mat);
          if (index !== -1) {
            newMatch.splice(index, 1);
            setMatchList(newMatch);
          }else{
            newMatch.shift();
            setMatchList(newMatch);
          }
          
        }}>X</button></div>)
      }
      <IngFilter/>
    </div>
    
    </div>
  )
}

export default SelectedIng