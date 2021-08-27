<template>
	<div>
		<!-- prettier-ignore -->
		<div :class=" !showNavBar ? 'header-wrap-all-scroll' : 'header-wrap-all' ">
			<div class="header-wrap">
				<div :class=" !showNavBar ? 'icon-header-styleScroll' : 'icon-header'">
					<i
						style="font-size: 30px"
						class="fa fa-chevron-circle-left"
						aria-hidden="true"
					></i>
				</div>
			
				<div :class=" !showNavBar ? 'img-profile-styleScroll' : 'img-profile'">
					<div  :class=" !showNavBar ? 'wrap-img-styleScroll' : 'wrap-img'  ">
						<img src="../../assets/logo.png" alt="" /> 
					</div>
				</div>
			</div>
		</div>
		<div class="description-wrap">
			<div class="user-names">
				<p class="name">Ranie Tavarez Peralta</p>
				<p class="user">@ranietp</p>
			</div>
			<div class="bio-user">
				<p class="bio">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
					rerum obcaecati quos non.
				</p>
			</div>
			<div class="comunidad">
				<div class="siguiendo">
					<p class="following">Following</p>
					<p class="count-following">9,000</p>
				</div>
				<div class="seguidores">
					<p class="followers">Followers</p>
					<p class="count-followers">50,000 K</p>
				</div>
			</div>
			<div class="iteraction-wrap">
				<div class="btn-following">
					<p>Follow</p>
				</div>
				<div class="btn-mensaje">
					<i class="fa fa-envelope-o" aria-hidden="true"></i>
				</div>
				<div class="btn-notification">
					<i class="fa fa-bell-o" aria-hidden="true"></i>
				</div>
			</div>
		</div>
		<!-- prettier-ignore -->
		<div  :class=" !showNavBar ? 'specify-content-scroll' : 'specify-content'  ">
			<div class="content-wrap">
				<!-- prettier-ignore -->
				<div :class=" debate ? 'for-debate-style' : 'for-debate'" @click="showDebate()">
					<p >Debate</p>
				</div>
				<div :class=" readlist ? 'for-readlist-style' : 'for-readlist'" @click="showReadlist()"> 
					<p>Readlist</p>
				</div>
				<div :class=" readlater ? 'for-readleader-style' : 'for-readleader'" @click="showReadlater()">
					<p>Readlater</p>
				</div>
				<div class="for-recomendation">
					<p>Recommendation</p>
				</div>
			</div>
		</div>
		<div v-if="debate">
			<DebateForProfile />
		</div>
		<div v-else-if="readlist">
			<ProfileReadList />
		</div>
		<div v-else-if="readlater">
			<ProfileReadLater />
		</div>
		<div>
			<BarForButton />
		</div>
		<div>
			<createPost />
		</div>
	</div>
</template>

<script>
import DebateForProfile from "../MyProfile/DebateForProfile";
import BarForButton from "../BarBottom/BarForButton";

import ProfileReadList from "../MyProfile/ProfileReadList";
import ProfileReadLater from "../MyProfile/ProfileReadLater";

import createPost from "../Post/CreatePost";

export default {
	components: {
		DebateForProfile,
		BarForButton,
		ProfileReadList,
		ProfileReadLater,
		createPost,
	},
	data() {
		return {
			showNavBar: true,
			lastScrollPosition: 180,
			debate: true,
			readlist: false,
			readlater: false,
		};
	},
	mounted() {
		window.addEventListener("scroll", this.onScroll);
	},
	beforeDestroy() {
		window.removeEventListener("scroll", this.onScroll);
	},
	methods: {
		onScroll() {
			const currentScrollPosition =
				window.pageYOffset || document.documentElement.scrollTop;

			if (currentScrollPosition < 0) {
				return;
			}

			this.showNavBar = currentScrollPosition < this.lastScrollPosition;

			this.currentScrollPosition = this.lastScrollPosition;
		},
		showDebate() {
			this.debate = true;

			this.readlist = false;
			this.readlater = false;
		},
		showReadlist() {
			this.readlist = true;

			this.debate = false;
			this.readlater = false;
		},
		showReadlater() {
			this.readlater = true;

			this.debate = false;
			this.readlist = false;
		},
	},
};
</script>

<style scoped>
/* scroll style */
.header-wrap-all-scroll {
	background: white;
	height: 95px;

	width: 100%;

	position: sticky;
	position: -webkit-sticky;
	top: 0;
	z-index: 1;

	transition: 1s all ease-out;
}

.header-wrap-all {
	height: 114px;

	width: 100%;

	position: sticky;
	position: -webkit-sticky;
	top: 0;
	z-index: 1;

	transition: 1s all ease-out;
}

.header-wrap {
	width: 100%;

	position: relative;
	background: white;
}

/* style */

.icon-header-styleScroll {
	height: 48px;

	padding-left: 5px;
	padding-top: 7px;
	padding-bottom: 5px;
}

.icon-header {
	height: 48px;

	padding-left: 5px;
	padding-top: 7px;
	padding-bottom: 5px;

	box-shadow: 0 4px 2px -2px rgb(0 0 0 / 20%);
}

.icon-header i {
	padding-left: 3px;
}

/* style */

.img-profile-styleScroll {
	position: absolute;

	top: 4px;
	left: 0;
	width: 100%;
}

.img-profile {
	position: absolute;

	top: 23px;
	left: 0;
	width: 100%;
}

/* style */

.wrap-img-styleScroll {
	width: 40px;
	margin: 0 auto;

	transition: 0.5s all ease-out;
}

.wrap-img-styleScroll img {
	width: 100%;

	object-fit: fill;

	box-shadow: 0 1px 4px 0 rgb(0 0 0 / 20%);
	border-radius: 50%;

	background: white;

	transition: 0.5s all ease-out;
}

.wrap-img {
	width: 76px;
	margin: 0 auto;
}

.wrap-img img {
	width: 100%;

	object-fit: fill;

	box-shadow: 0 1px 4px 0 rgb(0 0 0 / 20%);
	border-radius: 50%;

	background: white;
}

.description-wrap {
	padding: 0px 10px 10px 10px;
}

.description-wrap .name {
	font-size: 19px;
	font-family: Arial, Helvetica, sans-serif;
	font-weight: bold;

	padding-bottom: 2px;

	text-align: center;
}

.description-wrap .user {
	font-size: 16px;
	font-family: Arial, Helvetica, sans-serif;

	opacity: 0.6;

	text-align: center;
}

.bio-user {
	margin-top: 15px;
}

.description-wrap .bio {
	font-size: 16px;
	font-family: Arial, Helvetica, sans-serif;
}

.comunidad {
	margin: 10px 0;
}

.siguiendo,
.seguidores {
	display: inline-block;

	text-align: center;
	font-family: Arial, Helvetica, sans-serif;
}
.siguiendo {
	margin-right: 25px;
}

.comunidad .following,
.followers {
	font-size: 16px;
	font-family: Arial, Helvetica, sans-serif;

	opacity: 0.6;
}
.comunidad .count-followers,
.count-following {
	font-weight: bold;
	font-size: 16px;
}

.iteraction-wrap {
	width: 100%;

	display: flex;
}

.btn-following {
	flex: 1;
}

.btn-following p {
	color: white;
	background: black;

	border-radius: 17px;

	padding: 10px 0px;
	text-align: center;
	font-size: 16px;
	font-weight: bold;

	font-family: Arial, Helvetica, sans-serif;
}

.btn-mensaje,
.btn-notification {
	box-shadow: 0 1px 4px 0 rgb(0 0 0 / 20%);

	height: 40px;
	width: 40px;

	border-radius: 100%;
	position: relative;
}

.btn-mensaje {
	margin: 0px 10px;
}

.btn-mensaje i,
.btn-notification i {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	font-size: 20px;
}

/* style scroll */
.specify-content-scroll {
	height: 45px;
	width: 100%;

	position: sticky;
	position: -webkit-sticky;
	top: 50px;
	z-index: 1;

	background: white;

	border-top: 1px solid hsla(0, 0%, 53.3%, 0.4);
	border-bottom: 1px solid hsla(0, 0%, 53.3%, 0.4);

	transition: 0.5s all ease-out;
	overflow-x: scroll;
}

.specify-content {
	height: 55px;
	width: 100%;

	position: sticky;
	position: -webkit-sticky;
	top: 110px;
	z-index: 1;

	background: white;

	border-top: 1px solid hsla(0, 0%, 53.3%, 0.4);
	border-bottom: 1px solid hsla(0, 0%, 53.3%, 0.4);

	transition: 0.5s all ease-out;
	overflow-x: scroll;
}

.content-wrap {
	width: 110%;

	padding: 0px 5px;
	margin-left: 20px;

	overflow-x: scroll;

	display: flex;
	justify-content: space-between;

	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.for-debate,
.for-readlist,
.for-readleader,
.for-recomendation {
	padding: 7px 14px;

	border-radius: 20px;
	background-color: rgba(0, 0, 0, 0.051);
	border: 1px solid rgba(0, 0, 0, 0.102);

	font-family: Arial, Helvetica, sans-serif;
	font-size: 14px;
	text-align: center;
}

/* style */

.for-debate-style,
.for-readlist-style,
.for-readleader-style {
	padding: 7px 14px;

	border-radius: 20px;
	background-color: #606060;
	border: 1px solid rgba(0, 0, 0, 0.102);

	font-family: Arial, Helvetica, sans-serif;
	font-size: 14px;
	text-align: center;
	color: #f1f1f1;
}
</style>
