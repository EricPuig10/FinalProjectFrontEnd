export const NotFound = () => {
  return (
    <>
      <main className="bl_page404">
        <h1 style={{ textAlign: "center", color: "white" }}>
          Error 404. The page does not exist
        </h1>
        <div className="bl_page404__wrapper">
          <img
            src="https://github.com/BlackStar1991/Pictures-for-sharing-/blob/master/404/bigBoom/cloud_warmcasino.png?raw=true"
            alt="cloud_warmcasino.png"
          />
          <div className="bl_page404__el1"></div>
          <div className="bl_page404__el2"></div>
          <div className="bl_page404__el3"></div>
          <a href="/" className="bl_page404__link">
            go home
          </a>
        </div>
      </main>
    </>
  );
};
