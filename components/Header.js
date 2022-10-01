import Image from "next/image";
import logo from "../public/logo.svg";
import {
  HomeIcon,
  BoltIcon,
  CheckBadgeIcon,
  RectangleStackIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import HeaderItems from "./HeaderItems";
function Header() {
  return (
    <header className="flex flex-col items-center justify-between m-5 h-auto lg:flex-row">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItems title="HOME" Icon={HomeIcon} />
        <HeaderItems title="TRENDING" Icon={BoltIcon} />
        <HeaderItems title="VERIFIED" Icon={CheckBadgeIcon} />
        <HeaderItems title="COLLECTIONS" Icon={RectangleStackIcon} />
        <HeaderItems title="SEARCH" Icon={MagnifyingGlassIcon} />
        <HeaderItems title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image src={logo} alt="logo" />
    </header>
  );
}

export default Header;
