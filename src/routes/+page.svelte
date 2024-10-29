<script lang="ts">
    import {fade} from "svelte/transition";
    import {onMount} from "svelte";

    const domain = 'matteo-nc.com';
    const name = 'Mattéo NADLER CAMPOURCY';
    const year = new Date().getFullYear();

    let mounted = false;

    onMount(() => {
        mounted = true;
    });
</script>

<svelte:head>
    <title>{domain}</title>
    <link rel="preload" href="/src/fonts/JetBrainsMono/JetBrainsMono-Regular.woff2" as="font" type="font/woff2" crossorigin="anonymous">
</svelte:head>

<div class="flex flex-col w-dvh h-dvh bg-white dark:bg-black">
    <div class="flex flex-grow justify-center items-center">
        {#if mounted}
            <h1 id="domainDiv"
                class="md:text-7xl sm:text-6xl text-5xl text-black bg-transparent font-jetBrainsMono dark:text-white dark:text-shadow dark:shadow-white"
                transition:fade>
                {domain}</h1>
        {/if}
    </div>
    <div class="flex justify-center items-end">
        <p class="text-xs text-gray-800 dark:text-gray-200">&copy; {year} {name}</p>
    </div>
</div>

<style>

</style>
