<template>
	<div>
		<div class="wrap-btn-header">
			<router-link
				to="/book"
				class="btn-back"
				style="text-decoration: none; color:black"
			>
				<i
					class="fa fa-chevron-circle-left"
					aria-hidden="true"
					style="font-size: 30px;color:black"
				/>
			</router-link>
			<div class="btn-create-list">
				<p @click="takeNameAndDescripForMyReadLater()">
					Save
				</p>
			</div>
		</div>
		<div class="center-img-wrap">
			<div class="wrap-img">
				<img
					:src="
						'http://books.google.com/books/content?id=' +
							takeImgForShowInCreateReadLater +
							'&printsec=frontcover&img=1&zoom=1&source=gbs_api'
					"
					alt=""
				/>
			</div>
		</div>
		<div class="input-name">
			<input type="text" placeholder="Name" v-model="forNameList" />
		</div>
		<div class="input-description">
			<input type="text" placeholder="Description" v-model="forDescripList" />
		</div>
		<div class="search-book">
			<p>Add book</p>
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
	data() {
		return {
			forNameList: "",
			forDescripList: "",
		};
	},
	computed: {
		...mapState({
			takeImgForShowInCreateReadLater: (state) =>
				state.readLater.takeImgForShowInCreateReadLater,
		}),
	},
	methods: {
		...mapMutations({
			sendPostForReadLater: "readLater/sendPostForReadLater",
		}),
		takeNameAndDescripForMyReadLater() {
			let namesListAndDescription;
			if (this.forNameList !== "" && this.forDescripList !== "") {
				namesListAndDescription = {
					name: this.forNameList,
					desc: this.forDescripList,
				};

				// from readlater.js
				this.sendPostForReadLater(namesListAndDescription);
				this.$router.push("/book");
			}
		},
	},
};
</script>

<style scoped>
.wrap-btn-header {
	box-shadow: 0 4px 2px -2px rgb(0 0 0 / 20%);
	height: 48px;
	display: flex;
	justify-content: space-between;
}

.btn-back {
	padding-top: 10px;
	padding-left: 14px;
	padding-bottom: 5px;
}

.btn-create-list {
	padding-top: 13px;
	padding-right: 15px;

	font-family: Arial, Helvetica, sans-serif;
	font-size: 19px;
}

.center-img-wrap {
	padding-top: 15px;
	padding-bottom: 20px;
}

.wrap-img {
	width: 200px;
	height: 250px;

	margin: 0 auto;

	border-radius: 5px;
}
.wrap-img img {
	object-fit: fill;

	width: 100%;
	height: 250px;

	border-radius: 3px;
	box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
}

.input-name input {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 21px;
	text-align: center;
	opacity: 0.6;
	width: 100%;

	border: none;
	outline: none;
}

.input-description {
	padding: 20px 20px 0px 20px;
	margin-bottom: 20px;
}

.input-description input {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 18px;
	opacity: 0.6;

	padding-bottom: 10px;

	width: 100%;

	border: none;
	outline: none;

	border-bottom: 1px solid hsla(0, 0%, 53.3%, 0.4);
}

.search-book {
	padding: 0px 20px 10px 20px;
}

.search-book p {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 17px;
	color: red;

	padding-bottom: 10px;

	border-bottom: 1px solid hsla(0, 0%, 53.3%, 0.4);
}
</style>
