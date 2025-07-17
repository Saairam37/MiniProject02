import SearchBar from "./components/SearchBar"
import RecipeList from "./RecipeList"

const Header = () => {
  return (
    <>
        <div className='text-[35px] font-bold justify-self-center text-yellow-500'>RECIPE APP</div>
        <SearchBar/>
        
        <RecipeList/>
    </>
)
}

export default Header