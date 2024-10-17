import Me from "./Me";
import Navigation from "./Navigation";
import Social from "./Social";

export default function Left() {
  return (
    <div className="flex flex-col justify-between h-[90%] w-[40%] ">
      <span className="flex flex-col h-[50%] justify-between">
        <Me />
        <Navigation />
      </span>
        <Social />
    </div>
  )
}
