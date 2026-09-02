<script lang="ts">
    import cv_en from "$lib/assets/svg/cv-en.svg";
    import cv_en_download from "$lib/assets/pdf/cv-en.pdf";
    import cv_fr from "$lib/assets/svg/cv-fr.svg";
    import cv_fr_download from "$lib/assets/pdf/cv-fr.pdf";
    import download from "$lib/assets/svg/download.svg";

    const cvFileName = "curriculum_vitae.pdf";

    type languages = "en" | "fr";
    const cvVersions: Record<languages, { image: string; download: string }> = {
        en: { image: cv_en, download: cv_en_download },
        fr: { image: cv_fr, download: cv_fr_download }
    };
    let language: languages = $state("en");

    let {showCV = $bindable()} = $props();
    let dialog: HTMLDialogElement = $state() as any;

    $effect(() => {
        if (showCV) {
            dialog.showModal();
        }
    });
</script>

<dialog bind:this={dialog}
        class="bg-transparent"
        onclose={() => (showCV = false)}
        onclick={(e) => { if (e.target === dialog) dialog.close(); }}>
    <div class="fixed left-1/2 top-1/2 flex w-[90vw] max-h-[90vh] -translate-x-1/2 -translate-y-1/2 flex-col">
        <!-- Header -->
        <div class="flex flex-row justify-between items-center p-4 sticky top-0 z-10">
            <h1 class="text-2xl font-bold dark:text-white dark:text-shadow dark:shadow-white font-jetBrainsMono">{cvFileName}</h1>
            <button class="text-2xl font-bold dark:text-white dark:text-shadow dark:shadow-white"
                    onclick={() => (dialog.close())}>&cross;
            </button>
        </div>
        <!--    Content-->
        <div class="flex-1 overflow-y-scroll px-4">
            <img src={cvVersions[language].image} alt="My curriculum vitae" class="w-full h-full" />
        </div>
        <!--    Footer-->
        <div class="flex flex-row justify-between items-center p-4 sticky bottom-0 z-10">
            <div class="m-2">
                <button
                        class={`text-2xl font-bold dark:text-white dark:text-shadow dark:shadow-white ${language === "en" ? "underline" : "opacity-60"}`}
                        onclick={() => (language = "en")}>EN
                </button>
                <button
                        class={`text-2xl font-bold dark:text-white dark:text-shadow dark:shadow-white ${language === "fr" ? "underline" : "opacity-60"}`}
                        onclick={() => (language = "fr")}>FR
                </button>
            </div>
            <a href={cvVersions[language].download}
               download={cvFileName}
               class="inline-flex items-center">
                <img src={download} alt="Download icon"
                     class="w-8 invert dark:invert-0 dark:shadow-white dark:drop-shadow-[0_0_6px_var(--tw-shadow-color)]"/>
                <span class="m-2 text-2xl font-bold dark:text-white dark:text-shadow dark:shadow-white">Download</span>
            </a>
        </div>
    </div>
</dialog>
