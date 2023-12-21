import movieList from "./movieList.json";
import Movie from "./movie";
const MovieComp = () => {
  return (
    <>
      <div className="flex flex-wrap gap-32 justify-center">
        {movieList.map((movie) => (
          <Movie
            thumbnail={movie.thumbnail}
            title={movie.title}
            genres={movie.genres}
            year={movie.year}
          />
        ))}
      </div>
    </>
  );
};
export default MovieComp;
