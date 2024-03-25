function App() {
  return (
    <div className="bg-off-black min-h-screen w-full flex flex-col items-center justify-center gap-10 text-center text-sm py-10 px-5">
      <div className="w-full max-w-[340px] bg-dark-grey text-white rounded-xl p-5 md:py-10 md:px-7">
        <img
          src="/avatar.jpg"
          alt="avatar"
          className="mx-auto w-20 h-20 rounded-full mb-5"
        />
        <h1 className="text-2xl mb-1 font-semibold">Moyinoluwa Adelowo</h1>
        <p className="text-green mb-5 font-semibold">Alabama, United States</p>
        <p className="mb-5 text-white/70">
          "Mechanical and software engineer."
        </p>
        <div className="flex flex-col gap-5">
          <a href="https://github.com/Moyinoluwa-10" className="btn">
            GitHub
          </a>
          <a href="https://www.frontendmentor.io/home" className="btn">
            Frontend Mentor
          </a>
          <a
            href="https://www.linkedin.com/in/moyinoluwa-adelowo/"
            className="btn"
          >
            LinkedIn
          </a>
          <a href="https://twitter.com/MoyinAdelowo" className="btn">
            Twitter
          </a>
          <a href="https://www.instagram.com/rotii_mii" className="btn">
            Instagram
          </a>
        </div>
      </div>
      <footer className="attribution mb-10 sm:mb-0">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://moyinadelowo.com" target="_blank">
          Moyinoluwa Adelowo
        </a>
        .
      </footer>
    </div>
  );
}

export default App;

