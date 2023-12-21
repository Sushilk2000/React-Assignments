const Movie = (props) => {
  return (
    <div className="w-52 bg-gray-50 text-black shadow-sm border-white rounded-md shadow-white">
      <div className="w-full">
        <img src={props.thumbnail} />
      </div>
      <div className="text-2xl text-center mt-2 font-bold">{props.title}</div>
      <div className="flex justify-between px-4 mt-2 font-semibold text-lg">
        <div>{props.genres[0]}</div>
        <div>{props.year}</div>
      </div>
    </div>
  );
};

export default Movie;
