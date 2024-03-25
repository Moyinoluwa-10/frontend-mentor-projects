function App() {
  return (
    <div className="bg-off-black min-h-screen w-full flex items-center justify-center text-center text-sm p-5">
      <div className="w-full max-w-[340px] bg-dark-grey text-white rounded-xl p-5 md:py-10 md:px-7">
        <img
          src="/avatar-jessica.jpeg"
          alt="avatar"
          className="mx-auto w-20 h-20 rounded-full mb-5"
        />
        <h1 className="text-2xl mb-1 font-semibold">Jessica Randall</h1>
        <p className="text-green mb-5 font-semibold">London, United Kingdom</p>
        <p className="mb-5 text-white/70">
          "Front-end developer and avid reader."
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
    </div>
  );
}

export default App;

