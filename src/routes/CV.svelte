<script>
  import cv from "$lib/assets/svg/cv.svg";
  import download from "$lib/assets/svg/download.svg";

  const cvFileName = "curriculum_vitae.svg";

  let {showCV = $bindable()} = $props();

  let dialog = $state(); // HTMLDialogElement

  $effect(() => {
    if (showCV) {
      dialog.showModal();
    }
  });
</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions-->
<dialog bind:this={dialog}
        class="bg-transparent"
        onclose={() => (showCV = false)}
        onclick={(e) => { if (e.target === dialog) dialog.close(); }}>
    <div class="flex flex-col max-h-[90vh] max-w-[90vw]">
        <!-- Header -->
        <div class="flex flex-row justify-between items-center p-4 sticky top-0 z-10">
            <h1 class="text-2xl font-bold dark:text-white dark:text-shadow dark:shadow-white font-jetBrainsMono">{cvFileName}</h1>
            <button class="text-2xl font-bold dark:text-white dark:text-shadow dark:shadow-white"
                    onclick={() => (dialog.close())}>&cross;
            </button>
        </div>
        <!--    Content-->
        <div class="flex-1 overflow-y-scroll px-4">
            <img src={cv} alt="My curriculum vitae" class="w-full h-full"/>
        </div>
        <!--    Footer-->
        <div class="flex flex-row justify-center items-center p-4 sticky bottom-0 z-10">
            <a href={cv}
               download={cvFileName}
               class="inline-flex items-center">
                <img src={download} alt="Download icon"
                     class="w-8 invert dark:invert-0 dark:shadow-white dark:drop-shadow-[0_0_6px_var(--tw-shadow-color)]"/>
                <span class="m-2 text-2xl font-bold dark:text-white dark:text-shadow dark:shadow-white">Download</span>
            </a>
        </div>
    </div>
</dialog>
