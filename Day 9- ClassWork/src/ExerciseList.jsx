import { useState, useEffect } from "react";
import ExerciseSearch from "./exerciseSearch";
import ExerciseCard from "./Exercise";
const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  const [numCards, setNumCards] = useState(20);
  const [searchKey, setSearchKey] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const url = "https://exercisedb.p.rapidapi.com/exercises";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "672444eaf8msh8b507bd5de45338p1fdda4jsn1ef9821237db",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
        setExercises(data || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  const loadMore = () => {
    setNumCards(numCards + 20);
  };
  const handleSearch = (query) => {
    setSearchKey(query);
  };
  useEffect(() => {
    const filteredResults = exercises.filter((exercise) => {
      return (
        exercise.target.toLowerCase().includes(searchKey.toLowerCase()) ||
        exercise.bodyPart.toLowerCase().includes(searchKey.toLowerCase()) ||
        exercise.name.toLowerCase().includes(searchKey.toLowerCase())
      );
    });
    setSearchResult(filteredResults);
  }, [exercises, searchKey]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Exercise List</h1>

      <ExerciseSearch onSearch={handleSearch} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {searchResult.length > 0
          ? searchResult
              .slice(0, numCards)
              .map((exercise) => (
                <ExerciseCard key={exercise.id} exercise={exercise} />
              ))
          : exercises
              .splice(0, numCards)
              .map((exercise) => (
                <ExerciseCard key={exercise.id} exercise={exercise} />
              ))}
      </div>
      {numCards <
        (searchResult.length > 0 ? searchResult : exercises).length && (
        <div className="mt-4">
          <button
            onClick={loadMore}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Exercises;
