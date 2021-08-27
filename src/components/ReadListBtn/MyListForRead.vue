<template>
	<div>
		<div :class="click ? 'style-color-event-open' : 'style-color-event-clouse'">
			<BarBtnTop>
				Readlist
			</BarBtnTop>
			<div class="all-list">
				<div class="name-list">
					<p>{{ showMyReadList }}</p>
				</div>
				<div
					class="content-list-book"
					v-for="readlist in showMyListForRead()"
					:key="readlist.id"
				>
					<div
						class="wrap-content-main"
						v-for="authors in showOneTitleOrAuthorAndImg(readlist.myBooks)"
						:key="authors.id"
					>
						<div class="name-book">
							<p>
								{{ authors.title }}
							</p>
						</div>
						<div class="content-list-img">
							<div class="img-wrap">
								<img
									:src="
										'http://books.google.com/books/content?id=' +
											authors.book +
											'&printsec=frontcover&img=1&zoom=1&source=gbs_api'
									"
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<BarForButton />
		</div>
	</div>
</template>

<script>
import BarForButton from "../BarBottom/BarForButton";
import BarBtnTop from "../BarHeaderTop/BarBtnTop";

import { mapState } from "vuex";

export default {
	components: { BarForButton, BarBtnTop },
	computed: {
		...mapState({
			click: "barTopEvent",
			readList: (state) => state.myList.readList,
			showMyReadList: (state) => state.myList.showMyReadList,
		}),
	},
	methods: {
		showMyListForRead() {
			let specify = this.readList.filter((data) => {
				return data.nameList === this.showMyReadList;
			});

			return specify;
		},
		//becose the other way show more that I need.
		showOneTitleOrAuthorAndImg(book) {
			return book.map((data) => {
				return data;
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

/**/

.all-list {
	margin-bottom: 49px;
}

.name-list {
	padding-top: 20px;
	padding-left: 15px;
	padding-bottom: 5px;
}

.name-list p {
	font-size: 25px;
	font-family: Georgia, "Times New Roman", Times, serif;
	font-weight: bold;
}

.wrap-content-main {
	border-bottom: 1px solid #707070;
	margin: 0px 15px 10px 15px;
	padding-bottom: 10px;
}

.name-book {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 15px;
	font-weight: bold;
	color: #7b7373;
	padding-top: 10px;
	padding-bottom: 10px;
}

.img-wrap {
	width: 140px;
	height: 210px;
}

.img-wrap img {
	width: 100%;
	height: 100%;

	box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
	border-radius: 5px;

	object-fit: fill;
}
</style>
