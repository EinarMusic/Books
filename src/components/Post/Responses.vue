<template>
	<div>
		<div class="wrap-all" v-for="a in [1]" :key="a.id">
			<HeaderDescriptionUser>
				<template v-slot:name>Ranie Tavarez</template>
				<template v-slot:user> @ranietp</template>
			</HeaderDescriptionUser>
			<div class="wrap-comment">
				<p>
					algo sobre el comentario
				</p>
			</div>
			<LikeCommentShare>
				<template v-slot:like>
					<span>12,000</span>
				</template>
				<template v-slot:comment>
					<span>500</span>
				</template>
				<template v-slot:re-post>
					<span>75</span>
				</template>
			</LikeCommentShare>
		</div>
	</div>
</template>

<script>
import LikeCommentShare from "./LikeCommentShare";
import HeaderDescriptionUser from "./HeaderDescriptionUser";

import { mapState } from "vuex";

export default {
	components: {
		LikeCommentShare,
		HeaderDescriptionUser,
	},
	data() {
		return {
			seeAnswers: false,
			count: 1,
		};
	},
	computed: {
		...mapState({ post: (state) => state.post.post }),
	},
	methods: {
		forShowDebate() {
			return this.post
				.map((data) => {
					return data.debate;
				})
				.find((data) => data);
		},
		showAnswers() {
			this.count++;
			// prettier-ignore
			if (this.count % 2 == 0) {
				this.seeAnswers = true;
			} else  {
				this.seeAnswers = false;
            }
		},
	},
};
</script>

<style scoped>
.wrap-all {
	padding: 10px 0 10px 0;

	border-bottom: 1px solid #c7c7c7;
}

.wrap-comment p {
	font-size: 16px;
	font-family: Arial, Helvetica, sans-serif;
	color: #0f1419;

	padding: 5px 15px 5px 15px;
}
</style>
