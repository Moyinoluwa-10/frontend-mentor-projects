function App() {
  return (
    <div className="min-h-screen bg-yellow flex flex-col items-center justify-center gap-10 py-10 px-5">
      <div className="w-full max-w-[360px] bg-white rounded-2xl p-5 hero transition-all duration-300">
        <img
          src="/illustration-article.svg"
          alt="illustration"
          className="w-full rounded-xl mb-5"
        />
        <p className="bg-yellow inline-block px-3 py-1 font-extrabold rounded-md mb-3">
          Learning
        </p>
        <p className="mb-3">Published 21 Dec 2023</p>
        <h1 className="font-extrabold text-2xl mb-3 transition-all duration-300 hover:text-yellow cursor-pointer">
          HTML & CSS foundations
        </h1>
        <p className="text-grey mb-5">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        <div className="flex items-center gap-5">
          <img src="/image-avatar.webp" alt="avatar" className="w-10 h-10" />
          <p className="font-extrabold">Greg Hooper</p>
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

