import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { NativeRouter, Route } from "react-router-native";
import ListView from "./components/list_view/list_view";
import TopBar from "./components/topbar/topbar";
import VideoList from "./components/video_list/video_list";
const SomeComponentWithRouter = withRouter(VideoList);
export default function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=100&regionCode=KR&key=AIzaSyDlRY8MTesdvHw_lMP8v4G_NKGaLAm8UBU",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <SafeAreaView>
      <NativeRouter>
        <ScrollView>
          <TopBar />
          <Route path={`/`} exact component={ListView} />
          <Route path="/videos/:id"></Route>
        </ScrollView>
      </NativeRouter>
    </SafeAreaView>
  );
}
