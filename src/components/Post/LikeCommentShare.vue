<template>
	<div>
		<div class="icon-respuesta">
			<div class="icon-like">
				<i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
				<slot name="like" />
			</div>
			<div class="icon-comment">
				<i class="fa fa-comment-o" aria-hidden="true"></i>
				<slot name="comment" />
			</div>
			<div class="icon-re">
				<i class="fa fa-bullhorn" aria-hidden="true"></i>
				<slot name="re-post" />
			</div>
			<div class="icon-share">
				<i class="fa fa-share-alt" aria-hidden="true"></i>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.icon-respuesta {
	width: 100%;

	display: flex;
	justify-content: space-around;
}

.icon-respuesta span {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 14px;
}

.icon-comment,
.icon-re,
.icon-like,
.icon-share {
	margin: 10px 0;
}

.icon-comment i,
.icon-re i,
.icon-like i,
.icon-share i {
	padding-right: 5px;
}
</style>
