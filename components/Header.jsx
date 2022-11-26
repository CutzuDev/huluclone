import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  BoltIcon,
  CheckBadgeIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  RectangleStackIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center m-5 h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title={"HOME"} Icon={HomeIcon} />
        <HeaderItem title={"TRENDING"} Icon={BoltIcon} />
        <HeaderItem title={"VERIFIED"} Icon={CheckBadgeIcon} />
        <HeaderItem title={"COLLECTIONS"} Icon={RectangleStackIcon} />
        <HeaderItem title={"SEARCH"} Icon={MagnifyingGlassIcon} />
        <HeaderItem title={"ACCOUNT"} Icon={UserIcon} />
      </div>
      <Image
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
        className="object-contain"
        alt="sugeo"
        width={200}
        height={100}
      />
    </header>
  );
}

export default Header;
