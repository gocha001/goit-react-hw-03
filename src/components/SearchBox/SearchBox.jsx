import css from "./SearchBox.module.css";

const SearchBox = ({ inputValue, handleSearch }) => {
  return (
    <div className={css.container}>
      <label>Find contacts by name</label>
      <input type="text" value={inputValue} onChange={handleSearch} />
    </div>
  );
};

export default SearchBox;
