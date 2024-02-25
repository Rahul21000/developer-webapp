
const inputStyle = {
  minWidth:"20%",
  height: "5vh",
  padding: "4px",
  border: "none",
  borderRadius: "8px",
  background: "#F2F2F2",
  textAline: "center",
};

function SearchBar() {
  const handleTextSearch = (e) => {
    e.preventDefualt();
  };
  return (
    <input
      style={inputStyle}
      type="search"
      placeholder="search"
      onChange={handleTextSearch}
    />
  );
}

export default SearchBar;
