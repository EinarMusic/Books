<template>
	<div :class="click ? 'style-color-event-open' : 'style-color-event-clouse'">
		<BarBtnTop>
			<router-link to="/post" class="bth-search" style="text-decoration: none;"
				><i
					class="fa fa-chevron-circle-left"
					aria-hidden="true"
					style="font-size: 30px;color:black"
				></i
			></router-link>
		</BarBtnTop>
		<div class="wrap-all" v-for="posts in showPost()" :key="posts.id">
			<HeaderDescriptionUser>
				<template v-slot:name>Ted Cruz</template>
				<template v-slot:user> @tedcruz</template>
				<template v-slot:time> 1d</template>
				<template v-slot:from-user> @ranietp</template>
			</HeaderDescriptionUser>
			<div>
				<PostContent :posts="posts" />
			</div>
			<LikeCommentShare>
				<template v-slot:like>
					<span>{{ showMetrics().like_count }}</span>
				</template>
				<template v-slot:comment>
					<div @click="goToInput()" style="display:inline;">
						<span>{{ showMetrics().debate_count }}</span>
					</div>
				</template>
				<template v-slot:re-post>
					<span>{{ showMetrics().reply_count }}</span>
				</template>
			</LikeCommentShare>
		</div>
		<router-link to="/theresponse" style="text-decoration: none;color: black;">
			<Response />
		</router-link>
		<div>
			<BarForButton />
		</div>
	</div>
</template>

<script>
import BarBtnTop from "../BarHeaderTop/BarBtnTop";
import LikeCommentShare from "./LikeCommentShare";
//
import HeaderDescriptionUser from "./HeaderDescriptionUser";
import Response from "./Responses";
import PostContent from "./PostContent";
import BarForButton from "../BarBottom/BarForButton";

import { mapState } from "vuex";

export default {
	components: {
		BarBtnTop,
		HeaderDescriptionUser,
		LikeCommentShare,
		Response,
		PostContent,
		BarForButton,
	},
	computed: {
		...mapState({
			click: "barTopEvent",
			post: (state) => state.post.post,
			takeIdForGoToDebateResponse: (state) =>
				state.post.takeIdForGoToDebateResponse,
		}),
	},
	methods: {
		showPost() {
			return this.post.filter((data) => {
				return data._id == this.takeIdForGoToDebateResponse;
			});
		},
		showMetrics() {
			let main = this.post
				.filter((data) => {
					return data._id == this.takeIdForGoToDebateResponse;
				})
				.find((data) => data);

			return main.public_metrics;
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
