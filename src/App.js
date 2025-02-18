import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InfinteScroll />
    </div>
  );
}

function InfinteScroll() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  useEffect(() => {
    const getPosts = async () => {
      console.log("aaaa", page);
      const startPage = page * 10;

      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_start=${startPage}&_limit=10`
      );
      const nextPosts = await res.json();
      setPosts((prevPosts) => [...prevPosts, ...nextPosts]);
    };

    getPosts();
  }, [page]);

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight === e.target.scrollTop + e.target.clientHeight;
    if (bottom) {
      console.log("Scrolled to bottom!");
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div className="posts" onScroll={handleScroll}>
      {posts.map((post, idx) => (
        <div key={post?.id} className="post">
          <span>{post?.id}</span>
          <span>{post?.title}</span>
        </div>
      ))}
    </div>
  );
}
