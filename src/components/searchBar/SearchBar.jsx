import './searchBar.scss'


function SearchBar() {
  return (
    <div>
      <div className="type"></div>
      <form action="">
        <input type="text" name='location' placeholder='City Location ' />
        <input type="number" name='minPrice' placeholder='Min Price' />
        <input type="number" name='maxPrice' placeholder='Max Price ' />
      </form>
    </div>
  )
}

export default SearchBar