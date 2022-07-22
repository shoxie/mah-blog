import { BsDiscFill, BsPauseCircle } from "react-icons/bs";
import useSWR from "swr";

type NowPlayingSong = {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
};

async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

const Footer = () => {
  const { data } = useSWR<NowPlayingSong>("/api/spotify", fetcher, {
    refreshInterval: 20000,
  });

  return (
    <footer className="max-w-screen-xl px-10 py-5 pt-5 mx-auto">
      <div className="flex flex-row items-center justify-between pt-5 border-t border-highlightHigh">
        <div className="flex flex-row items-center space-x-3">
          {data?.isPlaying ? (
            <BsDiscFill className="animate-spin" />
          ) : (
            <BsPauseCircle />
          )}
          {data?.isPlaying ? (
            <a
              href={data.songUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="truncate"
              title={data.title + "-" + data.artist}
            >
              {data.title} - {data.artist}
            </a>
          ) : (
            <span>Not playing</span>
          )}
        </div>
        <span>© 2022 WhiteRose</span>
      </div>
    </footer>
  );
};

export default Footer;
