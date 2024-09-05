import SearchImage from '../../assets/images/search.png'

const SearchBar = ({
  searchText = '',
  setSearchText,
  handleSearchClick = () => {},
  handleResetFilter = () => {}
}) => {
  return (
    <div className='search-container'>
      <div className='search-bar'>
        <input
          type='text'
          className='search-bar-input'
          placeholder='Search'
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        ></input>
        <button
          className='search-bar-btn'
          onClick={() => {
            handleSearchClick()
          }}
        >
          <img src={SearchImage} className='search-img'></img>
        </button>
      </div>

      <button className='reset-filter' onClick={handleResetFilter}>
        Reset Filters
      </button>
    </div>
  )
}

export default SearchBar
