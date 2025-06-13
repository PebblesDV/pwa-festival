"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import lineup from "@/lib/lineup";

interface ArtistInfo {
  name: string;
  start: string;
  end: string;
  image?: string;
  description?: string;
  video?: string;
}

const ArtistPage = () => {
  const params = useParams();
  const artistName = decodeURIComponent(params.name as string);

  // Find the artist in the lineup data
  let artist: ArtistInfo | null = null;
  for (const day of Object.values(lineup)) {
    for (const stage of Object.values(day)) {
      const found = stage.find(
        (performance) => performance.name === artistName
      );
      if (found) {
        artist = found;
        break;
      }
    }
    if (artist) break;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="px-4">
        <Link
          href="/lineup"
          className="inline-block mb-8 text-blue-600 hover:text-blue-800"
        >
          ← Back to Lineup
        </Link>

        <h1 className="text-4xl font-bold mb-6 text-black">{artistName}</h1>

        <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
          {artist?.image && artist?.description ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Artist Image */}
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Artist Info */}
              <div className="space-y-6">
                <div className="prose max-w-none text-b text-black">
                  <p>{artist.description}</p>
                </div>

                {/* Video Link */}
                {artist.video && (
                  <a
                    href={artist.video.replace("embed/", "watch?v=")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Watch on YouTube →
                  </a>
                )}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold mb-2">Info</h2>
                <p className="text-gray-600">
                  Geen artiest informatie beschikbaar
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ArtistPage;
