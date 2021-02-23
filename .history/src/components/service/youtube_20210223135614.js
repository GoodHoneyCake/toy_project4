export default class Youtube {
  constructor(key) {
    this.key = key;
    this.geRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  mostPopular() {
    return fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=100&regionCode=KR&key=AIzaSyDlRY8MTesdvHw_lMP8v4G_NKGaLAm8UBU",
      this.getRquestOptions
    )
      .then((response) => response.json())
      .then((result) => result.items)
      .catch((error) => console.log("error", error));
  }
}
