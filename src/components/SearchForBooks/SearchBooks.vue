<template>
	<div
		:class="barTopEvent ? 'style-color-event-open' : 'style-color-event-clouse'"
	>
		<div class="wrap-search">
			<div class="wrap-input">
				<i class="fa fa-search" aria-hidden="true"></i>
				<input
					type="text"
					:placeholder="searchStyle ? 'Books' : 'Readings'"
					@keyup.enter="handleSearch"
					v-model="searchUser"
					ref="search"
				/>
			</div>
		</div>
		<div class="search-wrap-all">
			<div class="specificar-search">
				<div
					:class="searchStyle ? 'search-style' : 'search-books'"
					@click="searchStyleEvent(true)"
					style="transition-duration: 200ms;"
				>
					<span>Books</span>
				</div>
				<div
					:class="searchStyle ? 'search-readers' : 'search-style'"
					@click="searchStyleEvent(false)"
					style="transition-duration: 200ms;"
				>
					<span>Readers</span>
				</div>
			</div>
		</div>
		<div v-if="clickForList">
			<div class="recom-wrap" v-for="book in searchBooks.items" :key="book.id">
				<div @click="eventForSearch(book.volumeInfo.authors), handleSearch()">
					<div v-if="book.volumeInfo.authors" class="content-recom">
						<p>
							{{ bookAuthors(book) }}
						</p>
					</div>
				</div>
			</div>
		</div>
		<div v-else>
			<div class="recom-wrap" v-for="list in listOfSearch" :key="list.id">
				<div @click="eventForSearch(list), handleSearch()">
					<div v-if="list[0] != null" class="content-recom">
						<p>
							{{ list.join("") }}
						</p>
					</div>
				</div>
			</div>
		</div>
		<BarForButton />
	</div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import BarForButton from "../BarBottom/BarForButton";

export default {
	components: { BarForButton },
	data() {
		return {
			searchStyle: true,
			searchUser: "",
			clickForList: false,
			authors: "",
		};
	},
	computed: {
		...mapState(["barTopEvent", "searchBooks", "userResults", "listOfSearch"]),
	},
	methods: {
		...mapActions(["getData"]),
		...mapMutations(["bestSearch"]),
		searchStyleEvent(bool) {
			this.searchStyle = bool;
		},
		eventForSearch(book) {
			this.bestSearch(book);

			this.searchUser = this.userResults.join("");

			this.$router.push("/list");
		},
		handleSearch() {
			this.$store.dispatch("getData", this.searchUser);
			this.clickForList = true;
		},
		bookAuthors(book) {
			let authors = book.volumeInfo.authors;

			if (authors.length < 3) {
				authors = authors.join(" and ");
			} else if (authors.length > 2) {
				let lastAuthor = " and " + authors.slice(-1);

				authors.pop();

				authors = authors.join(", ");

				authors += lastAuthor;
			}
			if (this.clickForList) {
				return authors;
			} else {
				return this.listOfSearch;
			}
		},
	},
};
</script>

<style scoped>
.search-wrap-all {
	padding: 0 15px;

	margin: 10px 0;
}

.specificar-search {
	border-radius: 10px;
	background: rgba(0, 0, 0, 0.051);

	padding: 3px;

	display: flex;
	align-items: center;

	text-align: center;
}

.search-style {
	background: #606060;
	color: white;

	border-radius: 10px;

	width: 100%;

	padding: 4px 0;

	font-family: Arial, Helvetica, sans-serif;
	font-size: 16px;
}

.search-books,
.search-readers {
	border-radius: 10px;

	width: 100%;

	padding: 4px 0;
}

.search-readers span,
.search-books span {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 16px;
}

/**/

.style-color-event-open {
	background: #00000080;
	transition-duration: 200ms;

	height: 500px;
}

.style-color-event-clouse {
	background: white;
	transition-duration: 200ms;
}

.wrap-search {
	box-shadow: 0 4px 2px -2px rgb(0 0 0 / 20%);

	padding-top: 10px;

	display: flex;
	justify-content: space-between;
	align-items: center;
}

.top-btn {
	padding-bottom: 5px;
	padding-right: 15px;
}

.wrap-input {
	margin: 5px 15px;
	padding-bottom: 5px;

	width: 100%;
}

.wrap-input input {
	margin: 0px auto;
	padding: 8px;
	width: 100%;

	background: #e7e6e6;

	outline: none;
	border: none;
	border-radius: 7px;

	font-size: 17px;
	text-align: center;
}

.wrap-input i {
	position: absolute;
	margin: 8px 0 0 7px;

	color: #707070;
}

.recom-wrap {
	padding: 0px 0px;
	font-size: 19px;
}
.recom-wrap p {
	padding: 5px 0px;
}

.content-recom {
	border-bottom: 1px solid hsla(0, 0%, 53.3%, 0.4);
	margin: 0 15px;
	padding: 5px 0;
}
</style>
