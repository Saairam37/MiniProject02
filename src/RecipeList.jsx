import { useEffect, useState } from "react";
import { useAppData } from "./context/AppContextComponent"
import ListsItems from "./components/ListsItems";

const RecipeList = () => {

    const {urls, cat, matchList} = useAppData();
    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        
        if(urls === null){
            setTodos([])
        }else{
        if(matchList.length == 0){
        if(cat.length == 0){
            const newTodo = urls;
            setTodos(newTodo);
        }else{
            const newTodo = urls.filter(list => list.strCategory === cat);
            setTodos(newTodo);
        }
    }else{
        if(cat.length == 0){
            const newTodo = urls;
            const filTodos = newTodo.filter(obj =>matchList.every(kw =>Object.values(obj).some(val => typeof val === 'string' && val.toLowerCase().includes(kw.toLowerCase()))))
            setTodos(filTodos);
        }else{
            const newTodo = urls.filter(list => list.strCategory === cat);
            setTodos(newTodo.filter(obj =>matchList.every(kw =>Object.values(obj).some(val => typeof val === 'string' && val.toLowerCase().includes(kw.toLowerCase())))));
        }
    }}
    },[urls, matchList])

  return (
    (todos === null)?(<div>nothing</div>):(<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-self-center gap-[30px] m-[20px]">
        {
        todos.map((e)=><ListsItems
            key={e.idMeal}
            e={e}
        />)
    }
    </div>)
  )
}

export default RecipeList