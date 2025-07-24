function Filter({ titleFilter, setTitleFilter, ratingFilter, setRatingFilter }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Filtrer par titre"
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
      />
      <input
        type="number"
        min="0"
        max="10"
        placeholder="Filtrer par note"
        value={ratingFilter}
        onChange={(e) => setRatingFilter(Number(e.target.value))}
      />
    </div>
  );
}

export default Filter;
