<script>

</script>

<template>
    <div class="row content">
        <div class="col-12 title">
            <q-span class="title title_kurses"> КУРСЫ </q-span> <q-span class="arrow">></q-span> <q-span class="title olympiad_title">ОЛИМПИАДЫ ПО М.О.
            </q-span> <q-span class="arrow">></q-span> <q-span class="title international_title">МЕЖДУНАРОДНЫЕ ОРГАНИЗАЦИИ </q-span> <q-span class="arrow">></q-span> <q-span
                class="title block_title international_title">БЛОК 2</q-span>
        </div>
        <div class="col-12">
            <q-input rounded outlined bottom-slots v-model="text" label="Нажмите, чтобы начать поиск">
                <template v-slot:prepend>
                    <q-icon name="search" />
                </template>

            </q-input>
        </div>
        <div class="col-12">
            <q-span class="textbook_title">УЧЕБНИК ПО МЕЖДУНАРОДНЫМ ОРГАНИЗАЦИЯМ</q-span>
        </div>
        <div class="row information_block fit row wrap justify-between items-center content-start">
            <div class="col-md-8 information_text">
                <p class="information_source">Информация взята из следующих источников: <br>
                «Политология 11 класс» Р.Д Рубцовский (2014) <br>
                «Политика ХХ века» Г.М Синицын (2007)</p>
            </div>
            <div class="col-md-4 downoload_block">
                <q-btn class="button_downoload">cкачать / .pdf (7,9 МБ)</q-btn>
            </div>
        </div>
    </div>


</template>

<style>

@import url(../css/pages/PoliticalTextbook.scss);

</style>