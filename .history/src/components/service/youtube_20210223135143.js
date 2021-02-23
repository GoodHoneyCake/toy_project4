class Youtube {
  constructor(key) {
    this.key = key;
    this.geRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }
}
