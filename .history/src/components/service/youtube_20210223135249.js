class Youtube {
  constructor(key) {
    this.key = key;
    this.geRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  mostPopular() {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=100&regionCode=KR&key=AIzaSyDlRY8MTesdvHw_lMP8v4G_NKGaLAm8UBU",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }
}
