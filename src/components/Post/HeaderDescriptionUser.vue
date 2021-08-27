<template>
	<div class="all-info-post">
		<div class="user-img">
			<img src="../../assets/logo.png" alt="" />
		</div>
		<div class="wrap-name">
			<span class="normal-name">
				<slot name="name" />
			</span>
			<span class="user-name">
				<slot name="user" />
			</span>
			<span class="time-create-post">
				<slot name="time" />
			</span>
			<div class="list-from">
				<p>
					From <span><slot name="from-user"/></span>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.all-info-post {
	display: flex;
	align-items: center;

	padding: 0 15px;
	width: 100%;
}

/* user img */
.user-img {
	width: 46px;

	margin-right: 10px;
}

.user-img img {
	width: 100%;
	-o-object-fit: fill;
	object-fit: fill;
	box-shadow: 0 1px 4px 0 rgb(0 0 0 / 20%);
	border-radius: 50%;
	background: white;
}

.wrap-name {
	line-height: 1.4;
}

/* all text */
.normal-name {
	font-size: 1.1em;
	font-family: Arial, Helvetica, sans-serif;
	font-weight: bold;
	padding-bottom: 2px;
}

.user-name {
	font-size: 1.1em;
	font-family: Arial, Helvetica, sans-serif;
	font-weight: bold;
	opacity: 0.6;
}

.time-create-post {
	font-size: 1.1em;
	font-family: Arial, Helvetica, sans-serif;
	opacity: 0.6;
}

.list-from {
	font-size: 1.1em;
	font-family: Arial, Helvetica, sans-serif;
	opacity: 0.6;
}
</style>
