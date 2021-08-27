import Axios from "axios";

export default {
	namespaced: true,
	state: {
		dataBook: [],
		showMyReadLater: "",
		takeImgForShowInCreateReadLater: "",
		//
		readLater: [],
	},
	mutations: {
		//show img cuando i make or create a list
		createMyListForReadLater(state, book) {
			state.takeImgForShowInCreateReadLater = book.id;
		},
		//show specify list
		showDataForSpecifyReadLater(state, name) {
			state.showMyReadLater = name;
		},
		//showSpecificBook--take info book
		takeDataForBook(state, book) {
			state.dataBook = book;
		},
		// get API from actions.
		getReadLater(state, later) {
			state.readLater = later;
		},
		//  NewReadList
		sendPostForReadLater(state, namesListAndDescription) {
			Axios.post("http://localhost:3000/readlater/", {
				nameList: namesListAndDescription.name,
				description: namesListAndDescription.desc,
				myBooks: [
					{
						authors: state.dataBook.author,
						title: state.dataBook.title,
						book: state.dataBook.id,
					},
				],
			}).then(
				(response) => {
					console.log(response);
				},
				(error) => {
					console.log(error);
				}
			);
		},
		//add book to old book
		addBookForOlReadLater(state, id) {
			Axios.patch(`http://localhost:3000/readlater/add-book/${id}`, {
				myBooks: [
					{
						authors: state.dataBook.author,
						title: state.dataBook.title,
						book: [state.dataBook.id],
					},
				],
			}).then(
				(response) => {
					console.log(response);
				},
				(error) => {
					console.log(error);
				}
			);
		},
	},
	actions: {
		// ProfileReadList
		async takeReadLater(context) {
			let readlater = await Axios.get("http://localhost:3000/readlater/");
			context.commit("getReadLater", readlater.data);
		},
	},
};
