const Landing = ({ setReady, loading }) => {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-8">
      <span className="font-semibold text-6xl">Quiz Time</span>
      <button
        className="btn flex btn-success items-center"
        onClick={() => setReady(true)}
        disabled={loading}
      >
        Lets Start!
        <span
          className={`loading loading-dots loading-sm ${!loading && "hidden"}`}
        ></span>
      </button>
    </div>
  );
};
export default Landing;
