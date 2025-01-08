const Search = () => {
  return (
    <div className="searchDiv">
      <input
        type="search"
        placeholder="Search for restaurants"
        className="restaurantNameInput"
      />
      <button className="searchBtn">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  );
};

export default Search;
