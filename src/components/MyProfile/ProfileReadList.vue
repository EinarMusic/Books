<template>
	<div>
		<div v-for="readlist in readList" :key="readlist.id">
			<div class="content-profile-read">
				<div class="descriptions-read">
					<div class="descrip-list">
						<p>{{ readlist.nameList }}</p>
						<span>{{ readlist.description }} </span>
					</div>
					<div v-if="!makeComment" class="for-debate" @click="makeTheComment()">
						<i class="fa fa-paper-plane-o fa-lg" aria-hidden="true"></i>
						<span>Debate</span>
					</div>
					<div
						v-else
						class="event-for-debate"
						@click="
							makeTheComment(),
								writeComment(),
								sendDataForPost(readlist.nameList, readlist.list)
						"
					>
						<i
							class="fa fa-paper-plane-o "
							style="font-size:25px"
							aria-hidden="true"
						></i>
					</div>
				</div>
				<div class="some-to">
					<div
						@click="addedBookForDebate(showImg.book, readlist.nameList)"
						v-for="showImg in showMyListForRead(readlist.nameList).myBooks"
						:key="showImg.id"
					>
						<div class="show-read">
							<div :class="!makeComment ? 'img-wrap' : 'add-img-wrap'">
								<img
									:src="
										'http://books.google.com/books/content?id=' +
											showImg.book +
											'&printsec=frontcover&img=1&zoom=1&source=gbs_api'
									"
									alt=""
								/>
							</div>
						</div>
						<div class="add-debate" v-if="iconAddBookForDebate(showImg.book)">
							<i
								style="color:red"
								class="fa fa-minus-circle fa-2x"
								aria-hidden="true"
							></i>
						</div>
						<div v-else-if="makeComment" class="add-debate">
							<i class="fa fa-plus-circle fa-2x" aria-hidden="true"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
		<BarForButton />
	</div>
</template>

<script>
import BarForButton from "../BarBottom/BarForButton";

import { mapState, mapMutations, mapActions } from "vuex";

export default {
	components: { BarForButton },
	data() {
		return {
			add: [],
			makeComment: false,
		};
	},
	created() {
		this.takeReadList();
	},
	computed: {
		...mapState({
			readList: (state) => state.myList.readList,
		}),
	},
	methods: {
		...mapActions({
			takeReadList: "myList/takeReadList",
		}),
		...mapMutations({
			writeTheComment: "writeTheComment",
			getDataForPost: "post/getDataForPost",
		}),
		sendDataForPost(title, list) {
			if (this.add.length != 0) {
				this.getDataForPost({
					booksId: this.add.flat(),
					title: title,
					list: list,
				});
			}
		},
		writeComment() {
			if (this.add.length != 0) {
				return this.writeTheComment(true);
			}
		},
		iconAddBookForDebate(id) {
			return this.add.some((data) => data == id);
		},
		makeTheComment() {
			if (this.makeComment == true && this.add.length == 0) {
				return (this.makeComment = false);
			}

			return (this.makeComment = true);
		},
		showMyListForRead(name) {
			let specify = this.readList
				.filter((data) => {
					return data.nameList === name;
				})
				.find((data) => data);

			return specify;
		},
		addedBookForDebate(id, name) {
			if (!this.add.some((data) => data == id)) {
				let book = this.showMyListForRead(name);
				let added = book.myBooks
					.filter((data) => {
						return data.book == id;
					})
					.find((data) => data);

				return this.add.push(added.book);
			} else {
				let index = this.add.findIndex((data) => {
					return data == id;
				});

				return this.add.splice(index, 1);
			}
		},
	},
};
</script>

<style scoped>
.content-profile-read {
	border-bottom: 1px solid hsla(0, 0%, 53.3%, 0.4);

	width: 100%;

	padding: 10px 0px 20px 0px;
}

.descriptions-read {
	display: flex;
	justify-content: space-between;
}

.add-debate {
	margin-top: 10px;
	display: flex;
	justify-content: center;

	width: 120px;
}

.add-debate i {
	color: green;
}

.descrip-list {
	padding-left: 20px;
	margin-bottom: 10px;
}

.for-debate {
	padding-right: 20px;
	margin-top: 5px;
	text-align: center;
}

.event-for-debate {
	padding-right: 30px;

	text-align: center;
	color: blue;
}

.for-debate i,
.event-for-debate i {
	display: block;
	padding-bottom: 4px;
}

.descrip-list p {
	font-size: 19px;
	font-family: Arial, Helvetica, sans-serif;
	font-weight: bold;
}

.descrip-list span,
.for-debate span {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 15px;
	opacity: 0.8;
}

/**/

.some-to {
	display: flex;
	align-items: center;

	overflow-x: scroll;

	width: 100%;
	height: 240px;
	padding-left: 20px;
	padding-right: 20px;
}

.show-read {
	margin-right: 20px;
	height: 141;
}

.img-wrap {
	width: 140px;
	height: 210px;
}

.add-img-wrap {
	width: 120px;
	height: 190px;
}

.img-wrap img {
	width: 100%;
	height: 100%;
	box-shadow: 0px 7px 9px 0px rgba(47, 50, 50, 0.52);

	object-fit: fill;
}
</style>
