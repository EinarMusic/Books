<template>
	<div>
		<div
			v-if="true"
			:class="writeComment ? 'show-wrap-all' : 'wrap-all'"
			style="transition-duration: 400ms;"
		>
			<div class="show-input">
				<div class="cancel-btn" @click="closeWriteComment()">
					<p>Cancel</p>
				</div>
				<div class="to-debate-btn" @click="sendComment(), closeWriteComment()">
					<i class="fa fa-paper-plane-o fa-lg" aria-hidden="true"></i>
				</div>
			</div>
			<div class="write-comment">
				<div>
					<textarea v-model="writePost"></textarea>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
	data() {
		return {
			writePost: "",
		};
	},
	computed: {
		...mapState({
			writeComment: "writeComment",
			post: (state) => state.post.post,
		}),
	},
	methods: {
		...mapMutations({
			writeTheComment: "writeTheComment",
			getComment: "post/createPost",
			sendPost: "post/sendPost",
		}),
		closeWriteComment() {
			this.writeTheComment(false);
		},
		sendComment() {
			this.getComment(this.writePost);
			//
			this.sendPost(this.writePost);
		},
	},
};
</script>

<style scoped>
.wrap-all {
	z-index: 3;

	background: white;

	transition-property: transform;
	transform: translate3d(0, 210%, 0);

	position: fixed;
	top: 0;
	left: 0;

	width: 100%;
}

.show-wrap-all {
	z-index: 3;

	background: white;

	transform: translate3d(0, 0, 0);

	position: fixed;
	top: 0;
	left: 0;

	width: 100%;
	height: 99vh;
}
.show-input {
	display: flex;
	justify-content: space-between;
	align-items: center;

	width: 100%;
	height: 90vh;

	padding: 0 15px 0 15px;
	margin-bottom: 13px;
	height: 48px;

	font-family: Arial, Helvetica, sans-serif;
	font-size: 19px;

	box-shadow: 0 4px 2px -2px rgb(0 0 0 / 20%);
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

	padding: 0 5px 0 10px;

	font-family: Arial, Helvetica, sans-serif;
	font-size: 17px;
}
</style>
