import ReactPlayer from "react-player/youtube";
import styled from "@emotion/styled";

const Youtube = styled(ReactPlayer)`
  border: 3px solid yellow;
`;

export default function LibraryYoutubePage() {
  return (
    <Youtube
      url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
      width={500}
      height={500}
    />
  );
}
