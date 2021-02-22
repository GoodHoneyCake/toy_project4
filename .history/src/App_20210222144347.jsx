import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { NativeRouter, Route, withRouter } from "react-router-native";
import ListView from "./components/list_view/list_view";
import TopBar from "./components/topbar/topbar";
import VideoDetail from "./components/video_detail/video_detail";
import VideoList from "./components/video_list/video_list";

export default function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

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
        <TopBar />
        <ScrollView>
          <Route path={"/"} exact component={ListView} />
        </ScrollView>
        <Route path="/videos" render={() => <VideoList videos={videos} />} />
        {selectedVideo && (
          <Route
            path="/detail"
            render={() => (
              <VideoDetail video={selectedVideo} onVideoClick={selectVideo} />
            )}
          />
        )}
      </NativeRouter>
    </SafeAreaView>
  );
}
