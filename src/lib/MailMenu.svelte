<script>
    import { categories } from "./store";
</script>

<div>
    <ul class="category-list">
        {#each $categories as category}
        <a href="/mail/{category.id}"><li class="category-item">
            {category.title}
        </li></a>
        {/each}
        <a href="/add">
            <li class="category-item add-btn">Add category</li>
        </a>
    </ul>
</div>


<style>
.category-list {
    @apply p-2 grid grid-cols-2 gap-2 font-semibold text-slate-700;
}
.category-item {
    @apply p-2 rounded-md bg-slate-50 shadow-sm;
    @apply hover:bg-slate-200;
}
.add-btn {
    @apply text-center bg-gray-100 shadow-none;
    @apply hover:bg-slate-50;
}
</style>