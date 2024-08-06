import React from "react";
import Apple from "../assets/Apple-Music-PNG-Photo.png";
import Itunes from "../assets/itunes.png";
import Spotify from "../assets/spotify.png";
import Tidal from "../assets/tidal-logo.png";
import AudioMack from "../assets/audiomack.png";
import Boomplay from "../assets/boomplay.png";
import Deezer from "../assets/deezer.png";
import Youtube from "../assets/youtube.png";
import Youtubelogo from "../assets/Youtube_logo.png";
import Tiktok from "../assets/tiktok-icon.webp";
import Dml from "../assets/dml-logo.png";
import Afro from "../assets/afro-logo.png";
import Napster from "../assets/napster-logo.png";
import Soundclound from "../assets/soundcloud-icon.png";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { musicStore } from "./musicStore";
import { BsPlayFill } from "react-icons/bs";
import { AiTwotoneShopping } from "react-icons/ai";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { MdCloudDownload } from "react-icons/md";

interface ImageMap {
  [key: string]: string;
}

const MusicPlayer: React.FC = () => {
  const imageMap: ImageMap = {
    apple: Apple,
    itunes: Itunes,
    spotify: Spotify,
    tidal: Tidal,
    audiomack: AudioMack,
    boomplay: Boomplay,
    deezer: Deezer,
    youtube: Youtube,
    youtubelogo: Youtubelogo,
    tiktok: Tiktok,
    soundcloud: Soundclound,
    dml: Dml,
    afro: Afro,
    napster: Napster,
  };
  const getImageSource = (imageName: string): string | undefined => {
    return imageMap[imageName];
  };

  return (
    <div className="md:w-1/2 bg-slate-600 py-48">
      <div>
        <iframe
          width="100%"
          height="300"
          src="https://www.youtube.com/embed/h7iA6M2hgMU?list=OLAK5uy_n4DXMj5mpzu0zdKrbLon0REEKP_pViuu4"
          title="Grinding"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>{" "}
      </div>
      <div className="store-container">
        {musicStore.map((store) => (
          <a
            href={store.link}
            key={store.id}
            className={`${store.store === "Tidal" && "no-border"} store-div`}
          >
            <div className="logo-div">
              <img
                src={getImageSource(store.logo)}
                className="stores-logo"
                alt={store.logo}
              />
              <div>
                <p className={`${store.store === "Spotify" && "spot-green"}`}>
                  <strong>{store.store}</strong>
                </p>
              </div>
            </div>
            <div className="play-btn">
              <span className="btn">
                {store.action === "BUY" && <AiTwotoneShopping />}
                {store.action === "WATCH" && <PiTelevisionSimpleFill />}
                {store.action === "PLAY" && <BsPlayFill />}
                {store.action === "USE SOUND" && <FaArrowUpRightDots />}
                {store.action === "DOWNLOAD" && <MdCloudDownload />}
              </span>{" "}
              <span>{store.action}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MusicPlayer;
