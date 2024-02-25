import List from "./Card/List";
function Gallery() {
  return (
    <section style={{ margin: "20px 0px" }}>
      <h1>Related deals you might like for</h1>
      <Layout>
        <List />
      </Layout>
      <h4 style={{ textAlign: "center", fontSize: "2rem" }}> ...</h4>
    </section>
  );
}

export default Gallery;

function Layout({ children }) {
  return (
    <div
      className="gallery-card-layout"
      style={{
        margin: "20px 0px",
        padding: "10px 0px",
        overflow: "scroll",
        scrollBehavior: "smooth",
        scrollbarWidth: "none",
      }}
    >
      {children}
    </div>
  );
}
