import Link from "next/link";
import { useRouter } from "next/router";

const name = () => {
  const router = useRouter();
  console.log("router : ", router);
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