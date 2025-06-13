export default function Footer() {
  return (
    <footer className="flex h-20 w-full justify-center items-center px-5 py-4 bg-red-500 mt-auto">
      <div className="flex items-center justify-between gap-10">
        <a href="/">
          <i className="ri-home-2-line text-5xl text-white rounded-full"></i>
        </a>

        <a href="/info">
          <i className="ri-information-line text-5xl text-white rounded-full"></i>{" "}
        </a>

        <a href="/lineup">
          <i className="ri-music-fill text-5xl text-white rounded-full"></i>
        </a>

        <a href="/map">
          <i className="ri-map-pin-line text-5xl text-white rounded-full"></i>
        </a>
      </div>
    </footer>
  );
}
