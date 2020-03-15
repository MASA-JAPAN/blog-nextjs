import DateFormatter from "./DateFormatter";
import Link from "next/link";

export default props => (
  <div>
    Blog Item
    {props.blog.title}
    <br />
    {props.blog.intro}
    <DateFormatter timestamp={props.blog.createdAt} />
    <Link
      as={`/blog?id=${props.blog.slug}`}
      href={`/blog?slug=${props.blog.slug}`}
    >
      <a>Read more</a>
    </Link>
  </div>
);
