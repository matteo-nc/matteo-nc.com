<script lang="ts">
    import {fade} from "svelte/transition";
    import {onMount} from "svelte";
    import github from '$lib/assets/svg/github.svg';
    import linkedin from '$lib/assets/svg/linkedin.svg';

    const domain = 'matteo-nc.com';
    const githubUrl = 'https://github.com/matteo-nc';
    const linkedinUrl = 'https://linkedin.com/in/matteo-nc';
    const name = 'Mattéo NADLER CAMPOURCY';
    const year = new Date().getFullYear();

    let mounted = $state(false);

    onMount(async () => {
        mounted = true;
    });
</script>

<svelte:head>
    <title>{domain}</title>
    <link as="font" crossorigin="anonymous" href="/src/lib/assets/fonts/JetBrainsMono/JetBrainsMono-Regular.woff2"
          rel="preload"
          type="font/woff2">
</svelte:head>

<div class="flex flex-col w-dvh h-dvh bg-white dark:bg-black">
    <div class="flex flex-grow justify-center items-center">
        <div class="flex-wrap text-black dark:text-white dark:text-shadow dark:shadow-white">
            {#if mounted}
                <div class="flex flex-row">
                    <h1 id="domainDiv"
                        class="md:text-7xl sm:text-6xl text-5xl font-jetBrainsMono"
                        transition:fade={{ duration: 1500 }}>
                        {domain}</h1>
                </div>
                <div class="flex flex-row justify-center pt-0">
                    <a href="{githubUrl}" target="_blank" class="flex flex-row items-center m-3"
                       transition:fade={{ delay: 2000, duration: 500 }}>
                        <img src={github} alt="GitHub logo"
                             class="md:w-20 w-16 p-1 dark:invert dark:shadow-white dark:drop-shadow-[0_0_6px_var(--tw-shadow-color)]"/>
                        <span class="md:text-2xl sm:text-l sm:block md:m-4 m-2 hidden">GitHub</span>
                    </a>
                    <div class="w-8"></div>
                    <a href="{linkedinUrl}" target="_blank" class="flex flex-row items-center m-3"
                       transition:fade={{ delay: 2500, duration: 500 }}>
                        <img src={linkedin} alt="LinkedIn logo"
                             class="md:w-20 w-16 dark:invert dark:shadow-white dark:drop-shadow-[0_0_6px_var(--tw-shadow-color)]"/>
                        <span class="md:text-2xl sm:text-l sm:block md:m-4 m-2 hidden">LinkedIn</span>
                    </a>
                </div>
            {/if}
        </div>
    </div>
    <div class="flex justify-center items-end">
        <p class="text-xs text-gray-800 dark:text-gray-200">&copy; {year} {name}</p>
    </div>
</div>
