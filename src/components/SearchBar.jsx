import { useEffect, useState } from 'react'
import { useAppData } from '../context/AppContextComponent'
import SelectedIng from './SelectedIng';

const SearchBar = () => {

    const {searchResult} = useAppData();
    const[form, setForm] = useState({ keyword: "", category: "" });
    

        function searchItems(e){
            const {name, value} = e.target;
            setForm(prev => ({ ...prev, [name]: value }));
            
        }

        useEffect(()=>{
            searchResult(form);
        },[form])


  return (
    <><form className='justify-self-center grid sm:w-[500px] w-[80%] grid-cols-1 mt-[20px]' onChange={(e)=>searchItems(e)}>
        <input type="text" placeholder='Search...' name='keyword' className='w-full bg-gray-300 p-[10px] rounded-[5px] sm:text-[20px] text-[15px]'/>
        <div className='flex justify-between mt-[5px]'>
            <select name="category" id="myDropDown" className='text-[15px]' required>
                <option value="">All Category</option>
                <option value="Beef">Beef</option>
                <option value="Chicken">Chicken</option>
                <option value="Dessert">Dessert</option>
                <option value="Lamb">Lamb</option>
                <option value="Miscellaneous">Miscellaneous</option>
                <option value="Pasta">Pasta</option>
                <option value="Pork">Pork</option>
                <option value="Seafood">Seafood</option>
                <option value="Side">Side</option>
                <option value="Starter">Starter</option>
                <option value="Vegan">Vegan</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Goat">Goat</option>
                <option value="Breakfast">Breakfast</option>
            </select>
        </div>
    </form>
    <SelectedIng/>
    </>
  )
}


export default SearchBar