<template>
    <th class="table__head-cell" :class="{
        'table__head-cell_width_min': minWidth,
        'table__head-cell_actions': type === 'actions'
    }">
        <template v-if="type === 'actions'">
            <a class="button button_no-text button_size_xs button_transparent" href="#">
                <svg class="icon icon_type_cog">
                    <use xlink:href="@/shared/assets/i/sprite/sprite.svg#cog"></use>
                </svg></a><a class="button button_no-text button_size_xs button_transparent" href="#">
                <svg class="icon icon_type_filter">
                    <use xlink:href="@/shared/assets/i/sprite/sprite.svg#filter"></use>
                </svg></a>
        </template>
        <span v-else-if="title">{{ title }}</span>
    </th>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: false
    },
    type: {
        type: String,
        required: false,
        default: '',
        validator(value){
            return ['', 'actions'].includes(value);
        }
    },
    minWidth: Boolean
});
</script>
