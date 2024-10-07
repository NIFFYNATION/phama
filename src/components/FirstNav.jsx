function FirstNav() {
  return (
    <>
      <div
        className={`contain-fluid pt-2 pb-2 ml-auto mr-auto h-auto md:h-14 content-center bg-primary01`}
      >
        <div
          className={`contain flex flex-col md:flex-row text-start text-sm md:text-center height-100 justify-between textOnBlue`}
        >
          <p>Welcome to Pharma. We provides medical accessories</p>

          <div className="flex md:flex-row justify-between gap-6 lg:gap-24">
          <p>📲(404) 850 - 7080</p>
          <p>☎(404) 850 - 7080</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstNav;


