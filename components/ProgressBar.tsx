const ProgressBar = () => {
  return (
    <div className="">
      <span id="ProgressLabel" className="sr-only">
        Loading
      </span>

      <span
        role="progressbar"
        aria-labelledby="ProgressLabel"
        aria-valuenow={75}
        className="block rounded-full"
      >
        <span className="block h-1 w-3/4 bg-white"></span>
      </span>
    </div>
  );
};

export default ProgressBar;
