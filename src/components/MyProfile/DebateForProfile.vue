<template>
	<div>
		<div class="debate-wrap-all">
			<div class="respuesta-user">
				<div class="img-respuesta-user">
					<img src="../../assets/logo.png" alt="" />
				</div>
			</div>
			<div class="content-respuesta">
				<div class="name-respuesta-user">
					<p>tedcruz</p>
				</div>
				<div class="content-respuesta-wrap">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						<br />
						Laborum, eveniet mollitia neque facilis modi aspernatur dolorem
						nobis? <br />Placeat sequi est inventore modi! Neque voluptates
						praesentium animi maiores nulla autem quidem iure.
					</p>
				</div>
				<LikeCommentShare>
					<template v-slot:like>
						<span>5,000</span>
					</template>
					<template v-slot:comment>
						<span>1,000</span>
					</template>
					<template v-slot:re-post>
						<span>50</span>
					</template>
				</LikeCommentShare>
			</div>
		</div>
	</div>
</template>

<script>
import LikeCommentShare from "../Post/LikeCommentShare";

export default {
	components: { LikeCommentShare },
};
</script>

<style scoped>
.debate-wrap-all {
	border-bottom: 1px solid hsla(0, 0%, 53.3%, 0.4);

	display: flex;

	padding: 0px 15px;
	padding-top: 10px;

	z-index: -1;
}

.respuesta-user {
	margin-right: 5px;
}

.img-respuesta-user {
	width: 46px;
}

.img-respuesta-user img {
	width: 100%;
	object-fit: fill;
	box-shadow: 0 1px 4px 0 rgb(0 0 0 / 20%);
	border-radius: 50%;
	background: white;
}

.name-respuesta-user {
	margin: 15px 0 5px 0;
}

.name-respuesta-user p {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 17px;
	font-weight: bold;
}

.content-respuesta {
	width: 100%;
}

.content-respuesta-wrap p {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 16px;

	opacity: 0.8;
}
</style>
