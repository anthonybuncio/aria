export default function Loader() {
  return (
    <div className="flex items-center justify-center w-full h-full mt-12 overflow-visible">
      <div className=" absolute w-48 h-48">
        <div className=" absolute box-border w-full h-full rounded-full left-0 top-0 animate-loadone border-b-4 border-cyan-200"></div>
        <div className=" absolute box-border w-full h-full rounded-full right-0 top-0 animate-loadtwo border-r-4 border-teal-200"></div>
        <div className=" absolute box-border w-full h-full rounded-full right-0 bottom-0 animate-loadthree border-t-4 border-blue-200"></div>
      </div>
    </div>
  );
}
