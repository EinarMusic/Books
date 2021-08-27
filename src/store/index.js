import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

import readlist from "./readlist";
import readLater from "./readlater";
import post from "./post";

Vue.use(Vuex);

export default new Vuex.Store({
	strict: true,
	modules: { myList: readlist, readLater: readLater, post: post },
	state: {
		searchBooks: [],
		userResults: [],
		specificBook: [],
		listOfSearch: [],
		barTopEvent: false,
		writeComment: false,
	},
	mutations: {
		// event write comment for book
		writeTheComment(state, bool) {
			state.writeComment = bool;
		},
		// event bar top
		handlerEventBarTop(state, click) {
			state.barTopEvent = click;
		},
		setData(state, book) {
			state.searchBooks = book;
		},
		bestSearch(state, book) {
			state.userResults = book;
		},
		showBook(state, books) {
			state.specificBook = books;
		},
		tenLastSearch(state) {
			let search = state.userResults;

			if (state.listOfSearch[0] != search) {
				if (state.listOfSearch.length <= 4) {
					state.listOfSearch.unshift(search);
				} else if (state.listOfSearch.length > 4) {
					state.listOfSearch.pop();
					state.listOfSearch.unshift(search);
				}
			}
		},
	},
	actions: {
		async getData(context, search) {
			const apiKey = "AIzaSyBwFD621F2_CWYK4_7-tIIC1_85rmK1FBk";
			let book = await Axios.get(
				`https://www.googleapis.com/books/v1/volumes?q=` +
					"mises" +
					"&filter=paid-ebooks" +
					"&printType=books" +
					"&key" +
					apiKey
			);
			context.commit("setData", book.data);
			context.commit("tenLastSearch", search);
		},
	},
});
