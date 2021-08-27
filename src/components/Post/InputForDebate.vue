<template>
	<div>
		<div class="wrap-all">
			<div class="show-input">
				<div class="cancel-btn">
					<router-link to="/post" style="text-decoration: none; color: black">
						<p>Cancel</p>
					</router-link>
				</div>
				<div class="to-debate-btn" @click="getDataForDebate()">
					<router-link
						to="/DebateResponses"
						style="text-decoration: none; color: black"
					>
						<span>Debate</span>
					</router-link>
				</div>
			</div>
			<div>
				<div class="wrap-post">
					<div v-for="posts in showPost()" :key="posts.id">
						<div class="wrap-content">
							<HeaderDescriptionUser>
								<template v-slot:name>Ted Cruz </template>
								<template v-slot:user> @tedcruz</template>
								<template v-slot:time> 1d</template>
								<template v-slot:from-user> @ranietp </template>
							</HeaderDescriptionUser>
							<div>
								<PostContent :posts="posts" />
							</div>
						</div>
					</div>
				</div>
				<div class="write-comment">
					<div>
						<textarea v-model="writeDebate" placeholder="To Debate"></textarea>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import HeaderDescriptionUser from "./HeaderDescriptionUser";
import PostContent from "./PostContent";

import { mapState, mapMutations } from "vuex";

export default {
	components: {
		HeaderDescriptionUser,
		PostContent,
	},
	data() {
		return {
			writeDebate: "",
		};
	},
	computed: {
		...mapState({
			post: (state) => state.post.post,
		}),
	},
	methods: {
		...mapMutations({
			createDebate: "post/createDebate",
			addDebate: "post/addDebate",
		}),
		showPost() {
			return this.post.filter((data) => {
				return data.post_id == "4321";
			});
		},
		getDataForDebate() {
			console.log(this.post);
			let debate = this.post
				.map((data) => {
					return data.debate;
				})
				.find((data) => data);

			if (debate == null) {
				return this.createDebate(this.writeDebate);
			} else {
				return this.addDebate(this.writeDebate);
			}
		},
	},
};
</script>

<style scoped>
.wrap-post {
	font-size: 0.7em;
	width: 100%;

	margin: 65px 0 0 0;
}

.wrap-all {
	background: white;

	width: 100%;
}

.show-input {
	display: flex;
	justify-content: space-between;
	align-items: center;

	position: fixed;
	top: 0;
	left: 0;

	z-index: 3;

	width: 100%;

	padding: 0 15px 0 15px;
	margin-bottom: 13px;
	height: 48px;

	font-family: Arial, Helvetica, sans-serif;
	font-size: 19px;

	box-shadow: 0 4px 2px -2px rgb(0 0 0 / 20%);
	background-color: white;
}

.write-comment {
	border-bottom: 2px solid #f2f2f2;
}

.write-comment textarea {
	width: 100%;
	height: 40vh;

	outline: none;
	resize: none;
	border: none;

	padding: 10px 5px 0 10px;
	margin-top: 10px;

	font-family: Arial, Helvetica, sans-serif;
	font-size: 17px;
}
</style>
