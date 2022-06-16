import Link from "next/link";

const name = () => {
  return (
    <div>
      <h2>Hello</h2>
      <Link href="/">
        Move to go '/'
      </Link>
    </div>
  );
};

export default name;