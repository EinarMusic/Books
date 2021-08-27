<template>
	<div>
		<div class="header-main">
			<div class="title-comp">
				<p><slot /></p>
			</div>
			<div class="img-wrap-profile" @click="eventBarTopBackgrounColor()">
				<img src="../../assets/logo.png" alt="" />
			</div>
		</div>
		<MySettingProfile />
	</div>
</template>

<script>
import MySettingProfile from "../BarHeaderTop/MySettingProfile";

import { mapMutations } from "vuex";

export default {
	components: { MySettingProfile },
	methods: {
		...mapMutations(["handlerEventBarTop"]),
		eventBarTopBackgrounColor() {
			this.handlerEventBarTop(true);
		},
	},
};
</script>

<style scoped>
.header-main {
	padding: 0 15px 0 15px;

	margin-bottom: 13px;

	height: 48px;

	box-shadow: 0 4px 2px -2px rgb(0 0 0 / 20%);

	display: flex;
	justify-content: space-between;
	align-items: center;
}

.title-comp {
	margin-bottom: 5px;
	margin-top: 10px;
}

.title-comp p {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 27px;
	font-weight: bold;
}

.img-wrap-profile {
	width: 30px;
}

.img-wrap-profile img {
	width: 100%;
	object-fit: fill;
	box-shadow: 0 1px 4px 0 rgb(0 0 0 / 20%);
	border-radius: 50%;
	background: white;
}
</style>
