// '/' 경로를 가지는 페이지
import Link from "next/link";

const App = () => {
  return (
    <>
      <h2>Link to 'tomato'</h2>
      <Link href="/tomato">
        <a>Move to '/tomato'</a>
      </Link>
    </>
  );
};

export default App;