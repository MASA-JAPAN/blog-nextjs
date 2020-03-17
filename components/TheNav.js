import Link from "next/link";

export default () => (
  <div>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
    <Link href="/blog/new">
      <a>New</a>
    </Link>
  </div>
);
