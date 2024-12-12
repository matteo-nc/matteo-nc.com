<script>
    import cv from "$lib/assets/svg/cv.svg";

    let { showCV = $bindable() } = $props();

    let dialog = $state(); // HTMLDialogElement

    $effect(() => {
        if (showCV) dialog.showModal();
    });
</script>

<dialog
    bind:this={dialog}
    onclose={() => (showCV = false)}
    onclick={(e) => { if (e.target === dialog) dialog.close(); }}
>
    <div>
        <img src={cv} alt="My curriculum vitae" class="w-full h-full"/>
    </div>
</dialog>
