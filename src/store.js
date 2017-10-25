import createStore from "redux-zero";


let Songs = [
	{
		title: "Here comes the Sun",
		artist: "The Beatles",
		duration: "2:54",
		isplaying: false
	},
	{
		title: "Walking on sunshine",
		artist: "Katrina and the waves",
		duration: "3:49",
		isplaying: false
	},
    {
		title: "Sunshine",
		artist: "Katrina",
		duration: "3:43",
		isplaying: false
	},
];
const initialState = {
	songs: Songs,
	nowPlayingIndex: 0
};

const store = createStore(initialState);

export default store;
