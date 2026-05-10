import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  const posts = [
    {
      id: 1,
      title: "Getting Started with React",
      date: "May 1, 2026",
      preview: "Learn the basics of React components and props.",
    },
    {
      id: 2,
      title: "Understanding Props",
      date: "May 5, 2026",
      preview: "Props help pass data between components.",
    },
  ];

  return (
    <div className="App">
      <Header name="Nathan's Tech Blog" />
      <About />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;