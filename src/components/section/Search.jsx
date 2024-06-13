import React from 'react'

const Search = () => {
  return (
    <div id='search'>
      <div className="search-inner">
        <label htmlFor="searchInput">
          <span className='ir'>검색</span>
        </label>
        <input
          type="search"
          name="searchInput"
          id="searchInput"
          autoComplete='off'
          className='search-input'
          placeholder='검색'
        />
      </div>
    </div>
  )
}

export default Search