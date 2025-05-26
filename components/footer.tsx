export default function Footer() {
  return (
    <footer className="flex h-20 w-full justify-center items-center px-5 py-4 bg-red-500">
      <div className="flex items-center justify-between gap-10">
        <i className="ri-home-2-line text-5xl text-white rounded-full p-2"></i>
        <i className="ri-information-line text-5xl text-white rounded-full p-2"></i>{" "}
        <i className="ri-music-fill text-5xl text-white rounded-full p-2"></i>
        <i className="ri-map-pin-line text-5xl text-white rounded-full p-2"></i>
      </div>
    </footer>
  );
}
