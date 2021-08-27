<template>
	<div>
		<div class="header-btn">
			<div class="for-order">
				<span @click="cancel()">Cancel</span>
			</div>
		</div>
		<div class="title-comp">
			<p>Readlists</p>
		</div>
		<router-link
			to="/newreadlist"
			class="wrap-list-read"
			style="text-decoration: none; color: black"
		>
			<div class="wrap-img">
				<img src="" alt="" />
			</div>
			<div class="wrap-name-list">
				<p>New readlist...</p>
			</div>
		</router-link>
		<div
			class="wrap-list-read-user"
			v-for="readlist in readList"
			:key="readlist.id"
			@click="addBooktForOldReadList(readlist._id)"
		>
			<div
				class="wrap-img-user"
				v-for="img in showImgForList(readlist.myBooks)"
				:key="img.id"
			>
				<img
					:src="
						'http://books.google.com/books/content?id=' +
							img +
							'&printsec=frontcover&img=1&zoom=1&source=gbs_api'
					"
					alt=""
				/>
			</div>
			<div class="wrap-name-list-user">
				<p>{{ readlist.nameList }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
	computed: {
		...mapState({
			readList: (state) => state.myList.readList,
		}),
	},
	created() {
		this.takeReadList();
	},
	methods: {
		...mapActions({ takeReadList: "myList/takeReadList" }),
		...mapMutations({
			addBookForOlReadList: "myList/addBookForOlReadList",
		}),
		addBooktForOldReadList(book) {
			this.addBookForOlReadList(book);
			this.$router.push("/book");
		},
		//becose the other way show more img that I need.
		showImgForList(img) {
			return img
				.map((data) => {
					return data.book;
				})
				.find((data) => data);
		},
		cancel() {
			this.$router.push("/book");
		},
	},
};
</script>

<style scoped>
.header-btn {
	padding-right: 15px;

	margin-bottom: 15px;

	box-shadow: 0 4px 2px -2px rgb(0 0 0 / 20%);

	font-family: Arial, Helvetica, sans-serif;
	font-size: 19px;

	height: 48px;
}

.header-btn .for-order {
	text-align: end;

	padding-top: 12px;
	height: 100%;
}

.title-comp {
	margin-bottom: 5px;
}

.title-comp p {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 27px;
	font-weight: bold;

	padding-left: 15px;
}

.wrap-list-read,
.wrap-list-read-user {
	display: flex;
	align-items: center;
	height: 120px;

	padding-left: 6px;
	padding-top: 10px;
	padding-bottom: 10px;
	margin: 0px 10px;
}

.wrap-list-read {
	border-top: 1px solid #707070;
	border-bottom: 1px solid #707070;
}

.wrap-list-read-user {
	border-bottom: 1px solid #707070;
}

.wrap-img {
	box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
	border-radius: 5px;
}

.wrap-img,
.wrap-img-user {
	width: 130px;
	height: 100px;
}
.wrap-img-user img {
	object-fit: fill;

	width: 100%;
	height: 100px;

	border-radius: 5px;
	box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
}

.wrap-name-list,
.wrap-name-list-user {
	padding: 5px 0px;

	width: 100%;
}

.wrap-name-list p,
.wrap-name-list-user p {
	padding-left: 15px;

	font-family: Georgia, "Times New Roman", Times, serif;
	font-size: 17px;
	font-weight: bold;
}
</style>
