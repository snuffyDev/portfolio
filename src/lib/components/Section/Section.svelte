<script lang="ts">
	let _class = '';
	export let style = '';
	export { _class as class };
</script>

<section class={_class} {style}>
	<slot />
</section>

<style src="./index.scss" lang="scss">
</style>
