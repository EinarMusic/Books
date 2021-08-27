<template>
	<div>
		<div
			v-if="true"
			:class="click ? 'show-my-count' : 'show-my-count-style'"
			style="transition-duration: 400ms;"
		>
			<div class="bar-header">
				<div class="header-icon" @click="eventBarTopBackgrounColor()">
					<i class="fa fa-times-circle" aria-hidden="true"></i>
				</div>
			</div>
			<div class="show-name-user">
				<div class="my-img">
					<img src="../../assets/logo.png" alt="" />
				</div>
				<div class="my-name">
					<span>Ranie Tavarez P.</span>
				</div>
				<div class="my-user-name">
					<span>@ranietp</span>
				</div>
			</div>
			<div class="main-content">
				<div
					class="for-profile"
					@click="goToProfile(), eventBarTopBackgrounColor()"
				>
					<div class="icon-profile">
						<i class="fa fa-user" aria-hidden="true"></i>
					</div>
					<div class="title-profile">
						<span>Profile</span>
					</div>
				</div>
				<div class="for-save">
					<div class="icon-save">
						<i class="fa fa-bookmark" aria-hidden="true"></i>
					</div>
					<div class="title-save">
						<span>Saved</span>
					</div>
				</div>
				<div class="for-con">
					<div class="icon-con">
						<i class="fa fa-cog" aria-hidden="true"></i>
					</div>
					<div class="title-con">
						<span>Setting</span>
					</div>
				</div>
				<div class="for-shop">
					<div class="icon-shop">
						<i class="fa fa-book" aria-hidden="true"></i>
					</div>
					<div class="title-shop">
						<span>My Shopping</span>
					</div>
				</div>
				<div class="for-noti">
					<div class="icon-noti">
						<i class="fa fa-bell" aria-hidden="true"></i>
					</div>
					<div class="title-noti">
						<span>Notifications</span>
					</div>
				</div>
				<div class="for-clouse">
					<div class="title-clouse">
						<span>Sign Off</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
	computed: { ...mapState({ click: "barTopEvent" }) },
	methods: {
		...mapMutations(["handlerEventBarTop"]),
		eventBarTopBackgrounColor() {
			this.handlerEventBarTop(false);
		},
		goToProfile() {
			this.$router.push("/profile");
		},
	},
};
</script>

<style scoped>
.show-my-count-style {
	background: white;

	border-top-left-radius: 15px;
	border-top-right-radius: 15px;

	position: fixed;
	bottom: 0;
	left: 0;

	width: 100%;
	height: 450px;

	z-index: 3;

	transition-property: transform;
	transform: translate3d(0, 100%, 0);
}

.show-my-count {
	background: white;

	border-top-left-radius: 15px;
	border-top-right-radius: 15px;

	position: fixed;
	bottom: 0;
	left: 0;

	width: 100%;
	height: 450px;

	z-index: 3;

	transform: translate3d(0, 0, 0);
}

.main-content {
	position: absolute;
	top: 140px;
	width: 100%;
}

.bar-header {
	display: flex;
	flex-direction: row-reverse;

	position: relative;

	padding: 10px 15px 0 0;
}

.header-icon {
	z-index: 1;
}

.header-icon i {
	font-size: 30px;
}

.show-name-user {
	border-bottom: 1px solid hsla(0, 0%, 53.3%, 0.4);

	padding: 0 0 10px 0;
	width: 100%;
	top: 15px;

	position: absolute;
}

.my-img {
	width: 56px;

	margin: 0 auto;
}

.my-img img {
	width: 100%;
	object-fit: fill;

	box-shadow: 0 1px 4px 0 rgb(0 0 0 / 20%);
	border-radius: 50%;
	background: white;
}

.my-name {
	text-align: center;

	margin-top: 10px;
}

.my-name span {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 19px;
	font-weight: bold;
}

.my-user-name {
	text-align: center;
}

.my-user-name span {
	font-size: 16px;
	font-family: Arial, Helvetica, sans-serif;
	opacity: 0.6;
}

.for-profile,
.for-save,
.for-con,
.for-shop,
.for-noti {
	display: flex;
	align-items: center;

	padding: 15px 15px;
}

.for-profile:active,
.for-save:active,
.for-con:active,
.for-shop:active,
.for-noti:active {
	background: #00000080;
}

.for-con {
	border-bottom: 1px solid hsla(0, 0%, 53.3%, 0.4);
}

.for-clouse {
	border-top: 1px solid hsla(0, 0%, 53.3%, 0.4);
	border-bottom: 1px solid hsla(0, 0%, 53.3%, 0.4);

	padding: 15px 15px;
}

.main-content span {
	font-size: 16px;

	font-family: Arial, Helvetica, sans-serif;
}

.main-content i {
	padding-right: 15px;

	font-size: 20px;
}
</style>
