<template>
	<div :class="click ? 'style-color-event-open' : 'style-color-event-clouse'">
		<BarBtnTop>
			Readings
		</BarBtnTop>
		<div class="search-wrap-all">
			<div class="specificar-search">
				<div
					:class="searchStyle ? 'search-style' : 'search-books'"
					@click="searchStyleEvent(true)"
					style="transition-duration: 200ms;"
				>
					<span>Readlist</span>
				</div>
				<div
					:class="searchStyle ? 'search-readers' : 'search-style'"
					@click="searchStyleEvent(false)"
					style="transition-duration: 200ms;"
				>
					<span>Readlater</span>
				</div>
			</div>
		</div>
		<div v-if="searchStyle">
			<MyReadList />
		</div>
		<div v-else>
			<MyReadLater />
		</div>
		<BarForButton />
	</div>
</template>

<script>
import BarForButton from "../BarBottom/BarForButton";
import BarBtnTop from "../BarHeaderTop/BarBtnTop";

import MyReadLater from "../ReadListBtn/MyReadLater";
import MyReadList from "../ReadListBtn/MyReadList";

import { mapState } from "vuex";

export default {
	components: { BarForButton, BarBtnTop, MyReadLater, MyReadList },
	data() {
		return {
			searchStyle: true,
		};
	},
	computed: {
		...mapState({
			click: "barTopEvent",
			myReadList: (state) => state.myList.myReadList,
		}),
	},
	methods: {
		searchStyleEvent(bool) {
			this.searchStyle = bool;
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
}

.style-color-event-clouse {
	background: white;
	transition-duration: 200ms;
}
</style>
