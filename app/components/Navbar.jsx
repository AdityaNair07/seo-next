import Head from "next/head";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between w-full px-5 py-4 md:px-10">
        <span className="text-2xl font-bold">Product Hunt</span>
        <Link className="text-lg font-semibold" href={"/"}>
          Home
        </Link>
      </div>
    </>
  );
};

export default Navbar;
