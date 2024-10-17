import Me from "./Me";
import Navigation from "./Navigation";
import Social from "./Social";

export default function Left() {
  return (
    <div className="lg:sticky lg:top-0 lg:flex lg:flex-col lg:w-1/2 lg:justify-between lg:py-24 lg:items-center lg:h-screen">
      <span className="flex flex-col h-[50%] justify-between">
        <Me />
        <Navigation />
      </span>
        <Social />
    </div>
  )
}
