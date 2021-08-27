<template>
	<div>
		<div class="veremos-ver" style="margin-top: 50px">
			<div class="wrap-all-btn">
				<div class="wrap-btn" @click="goToHome()">
					<div class="btn-icon">
						<i class="fa fa-home" aria-hidden="true"></i>
					</div>
					<p>Home</p>
				</div>
				<div class="wrap-btn">
					<div class="btn-icon" @click="goToPrueba()">
						<i
							style="	font-size: 20px;"
							class="fa fa-paper-plane-o"
							aria-hidden="true"
						></i>
					</div>
					<p>prueba</p>
				</div>
				<div class="wrap-btn" @click="goToReadings()">
					<div class="btn-icon">
						<i
							style="	font-size: 20px;"
							class="fa fa-book"
							aria-hidden="true"
						></i>
					</div>
					<p>Readings</p>
				</div>
				<div class="wrap-btn" @click="goToSearch()">
					<div class="btn-icon">
						<i
							style="	font-size: 21px;"
							class="fa fa-search"
							aria-hidden="true"
						></i>
					</div>
					<p>Search</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		goToHome() {
			this.$router.push("/post");
		},
		goToSearch() {
			this.$router.push("/");
		},
		goToReadings() {
			this.$router.push("/readings");
		},
		goToPrueba() {
			this.$router.push("/profileRead");
		},
	},
};
</script>

<style scoped>
.wrap-all-btn {
	display: flex;

	background: white;

	justify-content: space-around;

	height: 50px;
	width: 100%;

	border-top: 1px solid hsla(0, 0%, 53.3%, 0.4);
	background: #ffffff;
	color: #0f0f0f;

	position: fixed;
	bottom: 0;

	padding: 0 4px;
}

.wrap-btn {
	width: 100%;
}

.btn-icon {
	position: relative;

	height: 30px;

	padding-top: 3px;
}

.wrap-btn i {
	font-size: 23px;

	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.wrap-btn p {
	text-align: center;

	font-family: Arial, Helvetica, sans-serif;
	font-size: 11px;

	padding-bottom: 3px;
}
</style>
