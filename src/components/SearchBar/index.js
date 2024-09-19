import SearchImage from '../../assets/images/search.png'

const SearchBar = ({
  searchText = '',
  setSearchText,
  handleSearchClick = () => {},
  handleResetFilter = () => {}
}) => {
  return (
    <div id='search-container' className='flex justify-between gap-8 p-2'>
      <div id='search-bar-container' className='flex gap-2 w-full'>
        <input
          id='search-bar'
          type='text'
          className='text-[#7E4338] w-full border-2 placeholder-[rgb(126,67,56)] rounded-lg border-[#7E4338] px-2 focus:outline-none focus:ring-1 focus:ring-[#C5705D] focus:border-[#C5705D] focus:shadow-sm focus:shadow-[#C5705D]'
          placeholder='Search'
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        ></input>
        <button
          id='search-btn'
          className='search-bar-btn'
          onClick={() => {
            handleSearchClick()
          }}
        >
          <img id='search-img' src={SearchImage} className='w-6'></img>
        </button>
      </div>

      <button
        id='reset-search-filter-btn'
        className='bg-[#C5705D] text-white rounded-md p-2 w-32 text-sm'
        onClick={handleResetFilter}
      >
        Reset Filters
      </button>
    </div>
  )
}

export default SearchBar
