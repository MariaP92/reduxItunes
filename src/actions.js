import store from "./store";

export const PlayPlaylist = () =>{
    console.log("play");
    let currentSong = store.getState().songs[store.getState().nowPlayingIndex];
    currentSong.isplaying = true;
}
export const NextPlaylist = () =>{
    console.log("Next");
    let currentSong = store.getState().songs[store.getState().nowPlayingIndex];
    currentSong.isplaying = false;
    store.setState({
        nowPlayingIndex:store.getState().nowPlayingIndex++
    });
    if(store.getState().nowPlayingIndex === store.getState().songs.length) {
        store.getState().nowPlayingIndex = 0;
    }
    currentSong = store.getState().songs[store.getState().nowPlayingIndex];
}
export const StopPlaylist = () =>{
    console.log("stop");
    let currentSong =store.getState().songs[store.getState().nowPlayingIndex];
    currentSong.isplaying = false;
    
}