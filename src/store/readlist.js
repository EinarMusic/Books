import Axios from "axios";

export default {
	namespaced: true,
	state: {
		dataBook: [],
		showMyReadList: "",
		takeImgForShowInCreateReadList: "",
		//
		readList: [],
	},
	mutations: {
		//show img cuando i make or create a list
		createMyListForReadList(state, book) {
			state.takeImgForShowInCreateReadList = book.id;
		},
		//show specify list
		showDataForSpecifyReadList(state, name) {
			state.showMyReadList = name;
		},
		//showSpecificBook--take info book
		takeDataForBook(state, book) {
			state.dataBook = book;
		},
		// get API from actions.
		getReadList(state, list) {
			state.readList = list;
		},
		//  NewReadList
		sendPostForReadList(state, namesListAndDescription) {
			Axios.post("http://localhost:3000/readlist/", {
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
		addBookForOlReadList(state, id) {
			Axios.patch(`http://localhost:3000/readlist/add-book/${id}`, {
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
		async takeReadList(context) {
			let readlist = await Axios.get("http://localhost:3000/readlist/");
			context.commit("getReadList", readlist.data);
		},
	},
};
