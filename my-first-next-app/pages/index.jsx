// '/' 경로를 가지는 페이지
import Link from "next/link";

const App = () => {
  return (
    <>
      <h2>Link to 'potato'</h2>
      <Link href="/vegetable/potato">
        <a>Move to '/vegetable/potato'</a>
      </Link>
    </>
  );
};

export default App;