<script lang="ts">
	import { cn } from '$lib/utils';

	export let img: string;
	export let name: string;
	export let username: string;
	export let body: string;
</script>

<figure
	class={cn(
		'relative w-64 cursor-pointer overflow-hidden rounded-lg shadow-lg p-6',
		// light styles
		'bg-white hover:bg-gray-100',
		// dark styles
		'dark:bg-gray-800 dark:hover:bg-gray-700'
	)}
>
	<div class="flex flex-col items-center">
		<img class="w-20 h-20 rounded-full object-cover" alt="{name}" src={img} />
		<figcaption class="text-lg font-semibold text-gray-900 dark:text-white">
			{name}
		</figcaption>
		<p class="text-sm text-gray-500 dark:text-gray-400">{username}</p>
	</div>
	<p class="mt-4 text-sm text-center text-gray-700 dark:text-gray-300">
		{body}
	</p>
</figure>

<style>
	figure {
		transition: background-color 0.3s ease;
	}
</style>
