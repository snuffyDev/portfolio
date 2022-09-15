<script lang="ts">
	import { animateScroll } from '$lib/actions/animateScroll';
	import Group from '../Group';
</script>

<nav use:animateScroll>
	<div class="content-spacing">
		<div class="links">
			<a href="#about">About me</a>
			<a href="#projects">Projects</a>
		</div>
	</div>
</nav>

<style src="./index.scss" lang="scss">
</style>
