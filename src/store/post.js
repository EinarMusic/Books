import Axios from "axios";

export default {
	namespaced: true,
	state: {
		post: [],
		forPost: null,
		takeIdForGoToDebateResponse: null,
	},
	mutations: {
		//createPost(state, post) {
		//state.post = post;
		/*state.post.unshift({
				books_id: state.forPost.booksId,
				title_readList: state.forPost.title,
				writtenPost: writtenPost,
				public_metrics: {
					debate_count: 12, // comment
					reply_count: 14, //
					like_count: 49,
				}, 
			});*/
		//},
		// crear el obj para debates.
		createDebate(state, writeDebate) {
			let debate = [
				{
					user_id: "1234",
					response: writeDebate,
					public_metrics: {
						debate_count: 12, // comment
						reply_count: 14, //
						like_count: 49,
					},
				},
			];
			state.post.push({ debate: debate });
		},
		// agrear mas debate al obj "debate"
		addDebate(state, newDebate) {
			let objDebate = {
				user_id: "4321",
				response: newDebate,
				public_metrics: {
					debate_count: 12, // comment
					reply_count: 14, //
					like_count: 49,
				},
			};

			let debate = state.post
				.map((data) => {
					return data.debate;
				})
				.find((data) => data);

			debate.push(objDebate);
		},
		createResponse(state) {
			let debateResponse = [
				{
					user_id: "1234",
					response: "excelente recomendacion",
					public_metrics: {
						debate_count: 0, // comment
						reply_count: 0, //
						like_count: 0,
					},
				},
			];
			state.post.push(debateResponse);
		},
		// get API from actions.
		createPost(state, post) {
			state.post = post;
		},
		// ProfileReadList
		getDataForPost(state, post) {
			state.forPost = post;
		},
		// debatePost
		toGoDebateResponse(state, id) {
			state.takeIdForGoToDebateResponse = id;
		},
		// createPost
		sendPost(state, writtenPost) {
			Axios.post("http://localhost:3000/debates/", {
				books: state.forPost.booksId,
				readList: state.forPost.title,
				list: state.forPost.list,
				a_writtenPost: writtenPost,
				public_metrics: {
					debate_count: 52, // comment
					reply_count: 20, //
					like_count: 100,
				},
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
		// DebatePost
		async getPost(context) {
			let post = await Axios.get("http://localhost:3000/debates/");
			context.commit("createPost", post.data);
		},
	},
};
