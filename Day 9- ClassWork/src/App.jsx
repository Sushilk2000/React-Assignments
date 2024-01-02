import "./App.css";
import Exercises from "./ExerciseList";
function App() {
  return (
    <>
      <div>
        <p>Where Futness Meets Fun and Results Are Achieved</p>
      </div>
      <div className="flex p-6 gap-4 w-full">
        <div className="w-1/2 flex gap-4 flex-wrap justify-between">
          <img
            src="https://www.pixelstalk.net/wp-content/uploads/images6/Fitness-Desktop-Wallpaper.jpg"
            alt=""
            className="w-[48.7%] h-[15rem]"
          />
          <img
            src="https://cutewallpaper.org/22/gym-lover-wallpapers/6000-c1f9d-best-3cce6-gym-d37e7-photos-249ba-%C2%B7-29648-100-5256b-free-b647c-download-844b8-%C2%B7---pexels---stock---photos.jpeg"
            alt=""
            className="w-[48.7%] h-[15rem]"
          />
          <img
            src="https://i.ytimg.com/vi/gey73xiS8F4/maxresdefault.jpg"
            alt=""
            className="h-[28.5rem]"
          />
        </div>
        <div className="w-1/2 gap-2 flex flex-wrap justify-between">
          <img
            src="https://wallpaperaccess.com/full/1087621.jpg"
            alt=""
            className="h-[28.5rem]"
          />
          <img
            src="https://wallpapercave.com/wp/wp6331008.jpg"
            alt=""
            className="w-[48.7%] h-[15rem]"
          />
          <img
            src="https://img.freepik.com/premium-photo/woman-training-gym_946657-755.jpg"
            alt=""
            className="w-[48.7%] h-[15rem]"
          />
        </div>
      </div>
      <Exercises></Exercises>
    </>
  );
}

export default App;
