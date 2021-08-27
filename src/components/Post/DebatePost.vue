<template>
	<div :class="click ? 'style-color-event-open' : 'style-color-event-clouse'">
		<BarBtnTop> Debate </BarBtnTop>
		<div v-for="posts in post" :key="posts.id">
			<div class="wrap-all">
				<HeaderDescriptionUser>
					<template v-slot:name>Ted Cruz </template>
					<template v-slot:user> @tedcruz</template>
					<template v-slot:time> 1d</template>
					<template v-slot:from-user>
						<span style="color: #1b95e0">@ranietp</span
						><span>'s {{ posts.list }} </span>
					</template>
				</HeaderDescriptionUser>
				<div @click="showDebate(posts._id)">
					<PostContent :posts="posts" />
				</div>
				<LikeCommentShare>
					<template v-slot:like>
						<span>{{ posts.public_metrics.like_count }}</span>
					</template>
					<template v-slot:comment>
						<div @click="goToInput()" style="display:inline;">
							<span>{{ posts.public_metrics.debate_count }}</span>
						</div>
					</template>
					<template v-slot:re-post>
						<span>{{ posts.public_metrics.reply_count }}</span>
					</template>
				</LikeCommentShare>
			</div>
		</div>
		<BarForButton />
	</div>
</template>

<script>
import BarBtnTop from "../BarHeaderTop/BarBtnTop";
import BarForButton from "../BarBottom/BarForButton";
import LikeCommentShare from "./LikeCommentShare";

import HeaderDescriptionUser from "./HeaderDescriptionUser";
import PostContent from "./PostContent";

import { mapState, mapMutations, mapActions } from "vuex";

export default {
	components: {
		BarForButton,
		BarBtnTop,
		LikeCommentShare,
		HeaderDescriptionUser,
		PostContent,
	},
	created() {
		this.getPost();
	},
	computed: {
		...mapState({
			click: "barTopEvent",
			post: (state) => state.post.post,
		}),
	},
	methods: {
		...mapActions({ getPost: "post/getPost" }),
		...mapMutations({ toGoDebateResponse: "post/toGoDebateResponse" }),
		showDebate(id) {
			this.$router.push("/DebateResponses");
			this.toGoDebateResponse(id);
		},
		goToInput() {
			this.$router.push("/input");
		},
	},
};
</script>

<style scoped>
.wrap-all {
	border-bottom: 1px solid hsla(0, 0%, 53.3%, 0.4);

	padding: 10px 0 10px 0;
}

/* style */
.style-color-event-open {
	background: #00000080;
	transition-duration: 200ms;
}

.style-color-event-clouse {
	background: white;
	transition-duration: 200ms;
}
</style>
