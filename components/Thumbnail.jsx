import Image from "next/image";

function Thumbnail({ result }) {
  const BASE_URL = "https://image.tmbd.org/t/p/w500";
  const BASE_URL2 = "https://image.tmbd.org/t/p/original";
  console.log(result);

  return (
    <div>
      {/* <img
        // width={1920}
        // height={1080}
        // width={100}
        // height={100}
        // alt="alttext"
        // responsive="true"
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        // src={"https://image.tmdb.org/t/p/w500/olPXihyFeeNvnaD6IOBltgIV1FU.jpg"}
      /> */}
      <img
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        // alt="test"
      />
      {/* <a
        href={`${BASE_URL}${result.backdrop_path}`}
      >{`${BASE_URL}${result.backdrop_path}`}</a> */}
      <a
        target={"_blank"}
        href={`${BASE_URL}${result.poster_path}`}
      >{`${BASE_URL}${result.poster_path}`}</a>
      <br />
      <br />
      <br />
      <a
        target={"_blank"}
        href={`${BASE_URL2}${result.poster_path}`}
      >{`${BASE_URL2}${result.poster_path}`}</a>
    </div>
  );
}

export default Thumbnail;
