<template>
	<div>
		<div>
			<div class="books-for-post">
				<div class="wrap-book-post">
					<div v-for="img in posts.books" :key="img.id">
						<div class="img-for-book">
							<img
								:src="
									'http://books.google.com/books/content?id=' +
										img +
										'&printsec=frontcover&img=1&zoom=1&source=gbs_api'
								"
							/>
						</div>
					</div>
				</div>
				<div class="name-readlist-post">
					<p>{{ posts.readList }}</p>
				</div>
			</div>
			<div class="wrap-comment">
				<p>
					{{ posts.a_writtenPost }}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["posts"],
};
</script>

<style scoped>
/* books */
.wrap-book-post {
	display: flex;
	align-items: center;
	overflow-x: scroll;
	width: 100%;
	height: 240px;
	padding-left: 20px;
	padding-right: 20px;
}

.img-for-book {
	width: 140px;
	height: 210px;

	margin-right: 20px;

	box-shadow: 0px 7px 9px 0px rgb(47 50 50 / 52%);
}

.img-for-book img {
	width: 100%;
	height: 100%;
	-o-object-fit: fill;
	object-fit: fill;
}

.name-readlist-post,
.wrap-comment {
	padding: 0 15px;
}

.name-readlist-post {
	padding-bottom: 10px;
}

.name-readlist-post {
	font-size: 1.1em;
	font-family: Arial, Helvetica, sans-serif;
	opacity: 0.6;
}

.wrap-comment p {
	font-size: 1.1em;
	font-family: Arial, Helvetica, sans-serif;
	color: #0f1419;
}
</style>
