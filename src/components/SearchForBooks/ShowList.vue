<template>
	<div>
		<div class="header-wrap">
			<div class="back-btn">
				<div to="/search" class="bth-search" @click="handleListSerach()">
					<i
						class="fa fa-chevron-circle-left"
						aria-hidden="true"
						style="font-size: 30px"
					></i>
				</div>
			</div>
			<div class="title-header">
				<h2>Results</h2>
			</div>
		</div>
		<div class="contenido">
			<div v-for="book in searchBooks.items" :key="book.id">
				<div @click="eventForShowBook(book.id)">
					<div class="body-wrap-search">
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
						<div class="description-book">
							<div class="wrap-descriptio">
								<h3 class="title">{{ book.volumeInfo.title }}</h3>
								<p class="author">{{ userResults.join("") }}</p>
								<span>
									<i class="fa fa-star-half-o" aria-hidden="true"></i>
									<i class="fa fa-star-half-o" aria-hidden="true"></i>
									<i class="fa fa-star-half-o" aria-hidden="true"></i>
									<i class="fa fa-star-half-o" aria-hidden="true"></i>
									<i class="fa fa-star-half-o" aria-hidden="true"></i>
								</span>
							</div>
						</div>
						<div class="price-book">
							<i class="fa fa-ellipsis-v" aria-hidden="true"></i>
						</div>
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

export default {
	components: { BarForButton },
	data() {
		return {
			showData: [],
			bookId: [],
		};
	},
	created() {
		let some = this.searchBooks.items.find((data) => {
			return data.saleInfo;
		});
		console.log(some.saleInfo.isEbook);
	},
	mounted() {
		this.showData = this.searchBooks.items.map(function(data) {
			return data;
		});
	},
	computed: {
		...mapState(["searchBooks", "userResults"]),
	},
	methods: {
		...mapMutations(["showBook"]),
		eventForShowBook(book) {
			this.bookId = book;

			this.showBook(
				this.showData.filter(function(data) {
					return data.id == book;
				})
			);
			this.$router.push("/book");
		},
		handleListSerach() {
			this.$router.push("/search");
		},
	},
};
</script>

<style scoped>
.contenido {
	width: 100%;

	margin-top: 55px;
}
.header-wrap {
	box-shadow: 0 4px 2px -2px rgb(0 0 0 / 20%);
	z-index: 1;

	position: relative;
	position: fixed;
	top: 0;
	left: 0;

	display: flex;
	justify-content: center;

	padding-left: 5px;
	padding-top: 7px;
	padding-bottom: 5px;

	width: 100%;
	height: 48px;

	background: #ffffff;
}

.header-wrap .back-btn {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 14px;
}

.back-btn i {
	padding-left: 3px;
}

.back-btn {
	text-align: center;

	display: inline-block;
	position: absolute;

	top: 10px;
	left: 0px;
	padding-left: 12px;
}

.bth-search i {
	color: black;
	font-size: 17px;
	text-align: center;
}

.title-header {
	font-family: Georgia, "Times New Roman", Times, serif;
	font-size: 17px;
	text-align: center;

	padding-top: 4px;
}

.body-wrap-search {
	display: flex;
	align-items: center;

	padding-top: 5px;
	padding-left: 10px;
	padding-bottom: 5px;

	width: 100%;
	height: 90px;

	border-bottom: 1px solid hsla(0, 0%, 53.3%, 0.4);
}

.wrap-img {
	width: 100px;
	height: 100%;
}

.wrap-img img {
	width: 100%;
	height: 100%;
	object-fit: cover;

	border-radius: 3px;
	border: 1px solid #707070;
}

.description-book {
	padding-left: 10px;

	width: 100%;
}

.wrap-descriptio {
	padding-bottom: 3px;
}

.description-book .title {
	font-family: Georgia, "Times New Roman", Times, serif;
	font-size: 1.2rem;
	font-weight: bold;
	line-height: 1.1;

	padding-bottom: 3px;

	overflow: hidden;
	text-overflow: ellipsis;

	max-height: 2.2em;
	min-height: 20px;
	width: 220px;
}

.description-book .author {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 14px;

	opacity: 0.6;

	padding-bottom: 3px;
}

.description-book span i {
	padding-right: 5px;
	font-size: 13px;
}

.price-book {
	margin-right: 15px;
	display: block;
	padding-top: 10px;

	height: 100%;
}

.price-book i {
	font-size: 19px;
}
</style>
