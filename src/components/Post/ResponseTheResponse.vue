<template>
	<div>
		<div class="wrap-all">
			<div class="header-main">
				<div class="back-btn" @click="backToResponses()">
					<i
						style="font-size: 30px;"
						class="fa fa-chevron-circle-left"
						aria-hidden="true"
					></i>
				</div>
				<div class="title-comp">
					<p>Responses</p>
				</div>
			</div>
			<div>
				<Responses />
			</div>
			<div class="content-main">
				<HeaderDescriptionUser style="font-size: 0.8em;">
					<template v-slot:name>Ranie Tavarez</template>
					<template v-slot:user> @ranietp</template>
				</HeaderDescriptionUser>
				<div class="wrap-comment">
					<p>
						algo sobre tu comentario
					</p>
				</div>
				<div class="iteration-comment">
					<div class="like">
						<i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
						<span>12,000</span>
					</div>
					<div class="dislike">
						<i class="fa fa-thumbs-o-down" aria-hidden="true"></i>
						<span>10</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Responses from "./Responses";
import HeaderDescriptionUser from "./HeaderDescriptionUser";

export default {
	components: {
		Responses,
		HeaderDescriptionUser,
	},
	methods: {
		backToResponses() {
			this.$router.push("/DebateResponses");
		},
	},
};
</script>

<style scoped>
.wrap-all {
	border-bottom: 1px solid #c7c7c7;
	font-family: Arial, Helvetica, sans-serif;
}

/* header */

.header-main {
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: nowrap;

	width: 100%;
	padding: 0 15px;

	height: 48px;

	box-shadow: 0 4px 2px -2px rgb(0 0 0 / 20%);
}

.title-comp {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 1.5em;
	font-weight: bold;
}

/**/

.wrap-comment p {
	font-size: 16px;
	font-family: Arial, Helvetica, sans-serif;
	color: #0f1419;

	padding: 5px 15px 5px 15px;
}

/* main */

.content-main {
	padding: 10px 0;
}

.iteration-comment {
	display: flex;

	align-items: center;
	flex-wrap: nowrap;

	padding-left: 15px;

	margin: 10px 0 10px 0;

	width: 100%;
}

.like {
	margin-right: 25px;
}

.iteration-comment span {
	margin-left: 5px;

	font-size: 0.9em;
}
</style>
