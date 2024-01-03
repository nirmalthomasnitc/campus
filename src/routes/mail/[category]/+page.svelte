<script>
    import { categories } from '$lib/store.js';
    export let data;


    function getCategory(id) {
        return $categories.find(category => category.id === id);
    }

    const category = getCategory(data.category_id);
</script>

<svelte:head>
    <title>{category?.title}</title>
</svelte:head>


<div class="p-2">
    <h1 class="font-semibold text-slate-700 text-lg">
        {category?.title}
    </h1>
</div>