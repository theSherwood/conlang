import { Link } from "solid-app-router";
function Navbar() {
  return (
    <>
      <nav class="flex flex-row ">
        <Link href="/" class="flex-1 no-underline hover:underline">
          Home
        </Link>
        <Link
          href="/about"
          class="flex-1 no-underline hover:underline"
        >
          About
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
