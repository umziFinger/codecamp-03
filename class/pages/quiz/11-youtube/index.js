import ReactPlayer from "react-player";

export default function YoutubePage(props) {
  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=iAFsmUMt0So&list=RDiAFsmUMt0So&start_radio=1"
      width={800}
      height={600}
      {...props}
      volume={0.5}
      muted={true}
      playing={true}
    />
  );
}
