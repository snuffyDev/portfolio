<script lang="ts">
	export let row = false;
	export let column = false;
	export let grid = false;
	export let gap: string | false = false;
	export let style = '';
</script>

<div
	class="group"
	class:row
	class:column
	class:gap
	class:grid
	style="{gap ? `--gap-size: ${gap};` : ''} {style}"
>
	<slot />
</div>

<style src="./index.scss" lang="scss">
</style>
