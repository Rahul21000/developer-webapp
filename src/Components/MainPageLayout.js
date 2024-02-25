function MainPageLayout({ children }) {
  return (
    <div
      style={{ maxWidth: "80%", margin: "0 auto",}}
    >
      {children}
    </div>
  );
}

export default MainPageLayout;
