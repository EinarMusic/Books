<template>
	<div>
		<div class="wrap-all-content">
			<div class="wrap-list-read">
				<div class="wrap-img">
					<img src="" alt="" />
				</div>
				<div class="wrap-name-list">
					<p>New readlist...</p>
				</div>
			</div>
			<div
				class="wrap-list-read-user"
				v-for="readlist in readList"
				:key="readlist.id"
				@click="showDataOfMyReadList(readlist.nameList)"
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
	</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
	computed: {
		...mapState({
			//
			readList: (state) => state.myList.readList,
		}),
	},
	created() {
		this.takeReadList();
	},
	methods: {
		...mapActions({ takeReadList: "myList/takeReadList" }),
		...mapMutations({
			forShowData: "myList/showDataForSpecifyReadList",
		}),
		showDataOfMyReadList(name) {
			this.forShowData(name);
			this.$router.push("/read");
		},
		//becose the other way show more img that I need.
		showImgForList(img) {
			return img
				.map((data) => {
					return data.book;
				})
				.find((data) => data);
		},
	},
};
</script>

<style scoped>
.wrap-all-content {
	height: 500px;
	width: 100%;
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
