import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex h-20 w-full justify-between items-center px-5 py-4 bg-black sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-3">
        <Image src="/logo_white.svg" alt="logo" width={32} height={32} />
        <h1 className="font-bold">FESTIVAL</h1>
      </Link>

      <div className="flex items-center gap-3">
        <i className="ri-contrast-fill text-5xl text-red-500 rounded-full"></i>
        <i className="ri-global-line text-5xl text-red-500 rounded-full"></i>
      </div>
    </header>
  );
}
