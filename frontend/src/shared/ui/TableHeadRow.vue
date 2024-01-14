<template>
    <tr class="table__head-row">
        <TableHeadCell
            v-for="column in columns"
            v-bind="column"
        />

        <TableHeadCell min-width/>
        <TableHeadCell title="ФИО"/>
        <TableHeadCell title="Контрагент"/>
        <TableHeadCell title="E-mail"/>
        <TableHeadCell title="Должность"/>
        <TableHeadCell title="Тип контрагента"/>
        <TableHeadCell type="actions"/>
    </tr>
</template>

<script setup lang="ts">
import TableHeadCell from '@/shared/ui/TableHeadCell.vue';
import { TColumns } from '@/shared/ui/TableHeadRow.types';

const props = defineProps<{
    columns: TColumns
}>();
</script>
