<template>
    <table class="table">
        <thead class="table__head">
            <TableHeadRow :columns="columns" />
        </thead>
        <tbody class="table__body">
            <tr class="table__body-row">
                <td class="table__body-cell">
                    <div class="user-avatar user-avatar_size_s">
                        <div class="user-avatar__wrapper"><img class="user-avatar__image"
                                src="@/shared/assets/i/avatar-example.jpg" alt="avatar">
                        </div>
                    </div>
                </td>
                <td class="table__body-cell"><a href="user.html">Иванов Иван</a>
                </td>
                <td class="table__body-cell">ООО "Иванов и партнеры"
                </td>
                <td class="table__body-cell"><a href="#">noemail@please.com</a>
                </td>
                <td class="table__body-cell">Гендиректор
                </td>
                <td class="table__body-cell">Заказчик
                </td>
                <td class="table__body-cell table__body-cell_actions"><a
                        class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
                        <svg class="icon icon_type_pencil">
                            <use xlink:href="@/shared/assets/i/sprite/sprite.svg#pencil"></use>
                        </svg></a><a class="button button_size_xs button_rounded button_no-text button_transparent"
                        href="#">
                        <svg class="icon icon_type_trash">
                            <use xlink:href="@/shared/assets/i/sprite/sprite.svg#trash"></use>
                        </svg></a><a class="button button_size_xs button_rounded button_no-text button_transparent"
                        href="#">
                        <svg class="icon icon_type_check-circle">
                            <use xlink:href="@/shared/assets/i/sprite/sprite.svg#check-circle"></use>
                        </svg></a>
                </td>
            </tr>
            <tr class="table__body-row">
                <td class="table__body-cell">
                    <div class="user-avatar user-avatar_size_s">
                        <div class="user-avatar__wrapper"><img class="user-avatar__image"
                                src="@/shared/assets/i/avatar-example.jpg" alt="avatar">
                        </div>
                    </div>
                </td>
                <td class="table__body-cell">Иванов Иван
                </td>
                <td class="table__body-cell">ООО "Иванов и партнеры"
                </td>
                <td class="table__body-cell"><a href="#">noemail@please.com</a>
                </td>
                <td class="table__body-cell">Гендиректор
                </td>
                <td class="table__body-cell">Заказчик
                </td>
                <td class="table__body-cell table__body-cell_actions"><a
                        class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
                        <svg class="icon icon_type_pencil">
                            <use xlink:href="@/shared/assets/i/sprite/sprite.svg#pencil"></use>
                        </svg></a><a class="button button_size_xs button_rounded button_no-text button_transparent"
                        href="#">
                        <svg class="icon icon_type_trash">
                            <use xlink:href="@/shared/assets/i/sprite/sprite.svg#trash"></use>
                        </svg></a><a class="button button_size_xs button_rounded button_no-text button_transparent"
                        href="#">
                        <svg class="icon icon_type_check-circle">
                            <use xlink:href="@/shared/assets/i/sprite/sprite.svg#check-circle"></use>
                        </svg></a>
                </td>
            </tr>
            <tr class="table__body-row">
                <td class="table__body-cell">
                    <div class="user-avatar user-avatar_size_s">
                        <div class="user-avatar__wrapper"><img class="user-avatar__image"
                                src="@/shared/assets/i/avatar-example.jpg" alt="avatar">
                        </div>
                    </div>
                </td>
                <td class="table__body-cell">Иванов Иван
                </td>
                <td class="table__body-cell">ООО "Иванов и партнеры"
                </td>
                <td class="table__body-cell"><a href="#">noemail@please.com</a>
                </td>
                <td class="table__body-cell">Гендиректор
                </td>
                <td class="table__body-cell">Заказчик
                </td>
                <td class="table__body-cell table__body-cell_actions"><a
                        class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
                        <svg class="icon icon_type_pencil">
                            <use xlink:href="@/shared/assets/i/sprite/sprite.svg#pencil"></use>
                        </svg></a><a class="button button_size_xs button_rounded button_no-text button_transparent"
                        href="#">
                        <svg class="icon icon_type_trash">
                            <use xlink:href="@/shared/assets/i/sprite/sprite.svg#trash"></use>
                        </svg></a><a class="button button_size_xs button_rounded button_no-text button_transparent"
                        href="#">
                        <svg class="icon icon_type_check-circle">
                            <use xlink:href="@/shared/assets/i/sprite/sprite.svg#check-circle"></use>
                        </svg></a>
                </td>
            </tr>
            <tr class="table__body-row">
                <td class="table__body-cell">
                    <div class="user-avatar user-avatar_size_s">
                        <div class="user-avatar__wrapper"><img class="user-avatar__image"
                                src="@/shared/assets/i/avatar-example.jpg" alt="avatar">
                        </div>
                    </div>
                </td>
                <td class="table__body-cell">Иванов Иван
                </td>
                <td class="table__body-cell">ООО "Иванов и партнеры"
                </td>
                <td class="table__body-cell"><a href="#">noemail@please.com</a>
                </td>
                <td class="table__body-cell">Гендиректор
                </td>
                <td class="table__body-cell">Заказчик
                </td>
                <td class="table__body-cell table__body-cell_actions"><a
                        class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
                        <svg class="icon icon_type_pencil">
                            <use xlink:href="@/shared/assets/i/sprite/sprite.svg#pencil"></use>
                        </svg></a><a class="button button_size_xs button_rounded button_no-text button_transparent"
                        href="#">
                        <svg class="icon icon_type_trash">
                            <use xlink:href="@/shared/assets/i/sprite/sprite.svg#trash"></use>
                        </svg></a><a class="button button_size_xs button_rounded button_no-text button_transparent"
                        href="#">
                        <svg class="icon icon_type_check-circle">
                            <use xlink:href="@/shared/assets/i/sprite/sprite.svg#check-circle"></use>
                        </svg></a>
                </td>
            </tr>
            <tr class="table__body-row">
                <td class="table__body-cell">
                    <div class="user-avatar user-avatar_size_s">
                        <div class="user-avatar__wrapper"><img class="user-avatar__image"
                                src="@/shared/assets/i/avatar-example.jpg" alt="avatar">
                        </div>
                    </div>
                </td>
                <td class="table__body-cell">Иванов Иван
                </td>
                <td class="table__body-cell">ООО "Иванов и партнеры"
                </td>
                <td class="table__body-cell"><a href="#">noemail@please.com</a>
                </td>
                <td class="table__body-cell">Гендиректор
                </td>
                <td class="table__body-cell">Заказчик
                </td>
                <td class="table__body-cell table__body-cell_actions"><a
                        class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
                        <svg class="icon icon_type_pencil">
                            <use xlink:href="@/shared/assets/i/sprite/sprite.svg#pencil"></use>
                        </svg></a><a class="button button_size_xs button_rounded button_no-text button_transparent"
                        href="#">
                        <svg class="icon icon_type_trash">
                            <use xlink:href="@/shared/assets/i/sprite/sprite.svg#trash"></use>
                        </svg></a><a class="button button_size_xs button_rounded button_no-text button_transparent"
                        href="#">
                        <svg class="icon icon_type_check-circle">
                            <use xlink:href="@/shared/assets/i/sprite/sprite.svg#check-circle"></use>
                        </svg></a>
                </td>
            </tr>
            <tr class="table__body-row">
                <td class="table__body-cell">
                    <div class="user-avatar user-avatar_size_s">
                        <div class="user-avatar__wrapper"><img class="user-avatar__image"
                                src="@/shared/assets/i/avatar-example.jpg" alt="avatar">
                        </div>
                    </div>
                </td>
                <td class="table__body-cell">Иванов Иван
                </td>
                <td class="table__body-cell">ООО "Иванов и партнеры"
                </td>
                <td class="table__body-cell"><a href="#">noemail@please.com</a>
                </td>
                <td class="table__body-cell">Гендиректор
                </td>
                <td class="table__body-cell">Заказчик
                </td>
                <td class="table__body-cell table__body-cell_actions"><a
                        class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
                        <svg class="icon icon_type_pencil">
                            <use xlink:href="@/shared/assets/i/sprite/sprite.svg#pencil"></use>
                        </svg></a><a class="button button_size_xs button_rounded button_no-text button_transparent"
                        href="#">
                        <svg class="icon icon_type_trash">
                            <use xlink:href="@/shared/assets/i/sprite/sprite.svg#trash"></use>
                        </svg></a><a class="button button_size_xs button_rounded button_no-text button_transparent"
                        href="#">
                        <svg class="icon icon_type_check-circle">
                            <use xlink:href="@/shared/assets/i/sprite/sprite.svg#check-circle"></use>
                        </svg></a>
                </td>
            </tr>
            <tr class="table__body-row">
                <td class="table__body-cell">
                    <div class="user-avatar user-avatar_size_s">
                        <div class="user-avatar__wrapper"><img class="user-avatar__image"
                                src="@/shared/assets/i/avatar-example.jpg" alt="avatar">
                        </div>
                    </div>
                </td>
                <td class="table__body-cell">Иванов Иван
                </td>
                <td class="table__body-cell">ООО "Иванов и партнеры"
                </td>
                <td class="table__body-cell"><a href="#">noemail@please.com</a>
                </td>
                <td class="table__body-cell">Гендиректор
                </td>
                <td class="table__body-cell">Заказчик
                </td>
                <td class="table__body-cell table__body-cell_actions"><a
                        class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
                        <svg class="icon icon_type_pencil">
                            <use xlink:href="@/shared/assets/i/sprite/sprite.svg#pencil"></use>
                        </svg></a><a class="button button_size_xs button_rounded button_no-text button_transparent"
                        href="#">
                        <svg class="icon icon_type_trash">
                            <use xlink:href="@/shared/assets/i/sprite/sprite.svg#trash"></use>
                        </svg></a><a class="button button_size_xs button_rounded button_no-text button_transparent"
                        href="#">
                        <svg class="icon icon_type_check-circle">
                            <use xlink:href="@/shared/assets/i/sprite/sprite.svg#check-circle"></use>
                        </svg></a>
                </td>
            </tr>
            <tr class="table__body-row">
                <td class="table__body-cell">
                    <div class="user-avatar user-avatar_size_s">
                        <div class="user-avatar__wrapper"><img class="user-avatar__image"
                                src="@/shared/assets/i/avatar-example.jpg" alt="avatar">
                        </div>
                    </div>
                </td>
                <td class="table__body-cell">Иванов Иван
                </td>
                <td class="table__body-cell">ООО "Иванов и партнеры"
                </td>
                <td class="table__body-cell"><a href="#">noemail@please.com</a>
                </td>
                <td class="table__body-cell">Гендиректор
                </td>
                <td class="table__body-cell">Заказчик
                </td>
                <td class="table__body-cell table__body-cell_actions"><a
                        class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
                        <svg class="icon icon_type_pencil">
                            <use xlink:href="@/shared/assets/i/sprite/sprite.svg#pencil"></use>
                        </svg></a><a class="button button_size_xs button_rounded button_no-text button_transparent"
                        href="#">
                        <svg class="icon icon_type_trash">
                            <use xlink:href="@/shared/assets/i/sprite/sprite.svg#trash"></use>
                        </svg></a><a class="button button_size_xs button_rounded button_no-text button_transparent"
                        href="#">
                        <svg class="icon icon_type_check-circle">
                            <use xlink:href="@/shared/assets/i/sprite/sprite.svg#check-circle"></use>
                        </svg></a>
                </td>
            </tr>
            <tr class="table__body-row">
                <td class="table__body-cell">
                    <div class="user-avatar user-avatar_size_s">
                        <div class="user-avatar__wrapper"><img class="user-avatar__image"
                                src="@/shared/assets/i/avatar-example.jpg" alt="avatar">
                        </div>
                    </div>
                </td>
                <td class="table__body-cell">Иванов Иван
                </td>
                <td class="table__body-cell">ООО "Иванов и партнеры"
                </td>
                <td class="table__body-cell"><a href="#">noemail@please.com</a>
                </td>
                <td class="table__body-cell">Гендиректор
                </td>
                <td class="table__body-cell">Заказчик
                </td>
                <td class="table__body-cell table__body-cell_actions"><a
                        class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
                        <svg class="icon icon_type_pencil">
                            <use xlink:href="@/shared/assets/i/sprite/sprite.svg#pencil"></use>
                        </svg></a><a class="button button_size_xs button_rounded button_no-text button_transparent"
                        href="#">
                        <svg class="icon icon_type_trash">
                            <use xlink:href="@/shared/assets/i/sprite/sprite.svg#trash"></use>
                        </svg></a><a class="button button_size_xs button_rounded button_no-text button_transparent"
                        href="#">
                        <svg class="icon icon_type_check-circle">
                            <use xlink:href="@/shared/assets/i/sprite/sprite.svg#check-circle"></use>
                        </svg></a>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import TableHeadRow from '@/shared/ui/TableHeadRow.vue';
import { TColumns } from '@/shared/ui/TableHeadRow.types';

const columns:TColumns = [
    {
        minWidth: true
    }, {
        title: 'ФИО'
    }, {
        title: 'Контрагент'
    }, {
        title: 'E-mail'
    }, {
        title: 'Должность'
    }, {
        title: 'Тип контрагента'
    }, {
        type: 'actions'
    }
];
</script>
