const ProgressBar = ({ progress }) => {
  return (
    <progress
      className="progress progress-info w-64 md:w-[28rem] h-8 mb-8"
      value={progress}
      max="100"
    ></progress>
  );
};
export default ProgressBar;
