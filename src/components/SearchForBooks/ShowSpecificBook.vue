<template>
	<div
		:class="barTopEvent ? 'style-color-event-open' : 'style-color-event-clouse'"
	>
		<BarBtnTop>
			<router-link to="/list" class="bth-search" style="text-decoration: none;"
				><i
					class="fa fa-chevron-circle-left"
					aria-hidden="true"
					style="font-size: 30px;color:black"
				></i
			></router-link>
		</BarBtnTop>

		<div v-for="book in specificBook" :key="book.id">
			<div class="main-content">
				<div class="wrap-book-img">
					<div class="wrap-img">
						<img
							:src="
								'http://books.google.com/books/content?id=' +
									book.id +
									'&printsec=frontcover&img=1&zoom=1&source=gbs_api'
							"
							alt=""
						/>
					</div>
				</div>
				<div class="wrap-description">
					<div class="description-book">
						<p class="title">
							{{ book.volumeInfo.title }}
						</p>
						<p class="author">{{ userResults.join("") }}</p>
					</div>
				</div>
				<div class="wrap-icon">
					<div class="read-list">
						<div class="read-wrap">
							<div class="wrap-only-icon" v-on:click="takeDataForBook(book)">
								<i class="fa fa-address-book-o" aria-hidden="true"></i>
							</div>
							<p>Readlist</p>
						</div>
					</div>
					<div class="remenber">
						<div class="wrap-only-icon" @click="takeDataForBookLater(book)">
							<i class="fa fa-tag" aria-hidden="true"></i>
						</div>
						<p>Readlater</p>
					</div>
					<div class="share">
						<div class="wrap-only-icon">
							<i class="fa fa-share-square" aria-hidden="true"></i>
						</div>
						<p>share</p>
					</div>
				</div>
				<div class="buy-book" v-if="book.saleInfo.buyLink">
					<a
						class="btn-buy"
						:href="book.saleInfo.buyLink"
						style="text-decoration: none"
					>
						<p>
							{{ book.saleInfo.retailPrice.currencyCode }}
							{{ book.saleInfo.retailPrice.amount }}
						</p>
					</a>
				</div>
				<div class="buy-book" v-else>
					<div class="btn-buy">
						<p>
							Read
						</p>
					</div>
				</div>
			</div>
		</div>
		<BarForButton />
	</div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import BarForButton from "../BarBottom/BarForButton";
import BarBtnTop from "../BarHeaderTop/BarBtnTop";

export default {
	components: { BarForButton, BarBtnTop },
	computed: {
		...mapState(["barTopEvent", "specificBook", "userResults"]),
	},
	methods: {
		...mapMutations({
			// readList
			takeImgForShowInCreateList: "myList/createMyListForReadList",
			takeData: "myList/takeDataForBook",
			// readLater
			takeImgForShowInCreateLater: "readLater/createMyListForReadLater",
			takeDataForLater: "readLater/takeDataForBook",
		}),
		// readList - for db tambien
		takeDataForBook(book) {
			this.takeImgForShowInCreateList(book);
			this.$router.push("/readlist");

			this.takeData({
				id: book.id,
				title: book.volumeInfo.title,
				author: this.userResults.join(""),
				img: book.volumeInfo.imageLinks.thumbnail,
			});
		},
		// readLater
		takeDataForBookLater(book) {
			this.takeImgForShowInCreateLater(book);
			this.$router.push("/readlater");

			this.takeDataForLater({
				id: book.id,
				title: book.volumeInfo.title,
				author: this.userResults.join(""),
				img: book.volumeInfo.imageLinks.thumbnail,
			});
		},
	},
};
</script>

<style scoped>
.style-color-event-open {
	background: #00000080;
	transition-duration: 200ms;
}

.style-color-event-clouse {
	background: white;
	transition-duration: 200ms;
}

.main-content {
	overflow: scroll;

	margin-bottom: 60px;
}

.btn-buy {
	text-align: center;
}

.btn-buy p {
	border-radius: 25px;
	padding: 12px 0px;

	margin: 0px 15px;

	background: black;
	color: white;

	font-family: Arial, Helvetica, sans-serif;
	font-size: 18px;
	font-weight: bold;
}

.header-btn-book {
	padding: 0 15px 0 15px;

	margin-bottom: 13px;

	height: 48px;

	box-shadow: 0 4px 2px -2px rgb(0 0 0 / 20%);

	display: flex;
	justify-content: space-between;
	align-items: center;
}

.wrap-img {
	width: 160px;
	height: 230px;
	margin: 0 auto;
}

.wrap-img img {
	width: 100%;
	height: 100%;

	border-radius: 3px;
	box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);

	object-fit: fill;
}

.description-book {
	padding: 0px 20px;
	margin-top: 13px;
	margin-bottom: 13px;
}

.description-book .title {
	font-family: Georgia, "Times New Roman", Times, serif;
	font-size: 25px;
	font-weight: bold;

	overflow: hidden;
	text-overflow: ellipsis;

	text-align: center;

	max-height: 56px;
	min-height: 30px;
	width: 100%;
}

.description-book .author {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 19px;

	text-align: center;

	opacity: 0.6;

	margin-top: 3px;
}

.wrap-icon {
	display: flex;

	padding-left: 7px;
	padding-right: 7px;

	margin-bottom: 13px;
}

.wrap-icon p {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 13px;

	padding-top: 3px;

	opacity: 0.6;
}

.read-list {
	flex: 1;
}

.remenber,
.read-wrap,
.share {
	text-align: center;

	display: inline-block;

	margin: 0px 10px;
}

.wrap-only-icon {
	text-align: center;

	margin: 0 auto;

	font-size: 25px;

	height: 56px;
	width: 56px;

	border-radius: 50%;

	box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);

	position: relative;
}

.wrap-only-icon i {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>
