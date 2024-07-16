<script>

</script>

<template>
    <div class="row">
        <div class="col-12 title">
            <q-span class="title title_kurses"> КУРСЫ </q-span> > <q-span class="title olympiad_title">ОЛИМПИАДЫ ПО М.О.
            </q-span> > <q-span class="title international_title">МЕЖДУНАРОДНЫЕ ОРГАНИЗАЦИИ </q-span> > <q-span
                class="title block_title">БЛОК 2</q-span>
        </div>
        <div class="col-12">
            <q-input rounded outlined bottom-slots v-model="text" label="Нажмите, чтобы начать поиск">
                <template v-slot:prepend>
                    <q-icon name="search" />
                </template>

            </q-input>
        </div>
        <div class="col-12">
            <q-span class="textbook_title">УЧБЕНИК ПО МЕЖДУНАРОДНЫМ ОРГАНИЗАЦИЯМ</q-span>
        </div>
        <div class="row information_block fit row wrap justify-between items-center content-start">
            <div class="col-8 information_text">
                <p class="information_source">Информация взята из следующих источников:</p>
                <p>«Политология 11 класс» Р.Д Рубцовский (2014)</p>
                <p>«Политика ХХ века» Г.М Синицын (2007)</p>
            </div>
            <div class="col-4 downoload_block">
                <q-btn class="button_downoload">cкачать / .pdf (7,9 МБ)</q-btn>
            </div>
        </div>
    </div>


</template>

<style>
.title {
    font-family: 'Murs Gothic', sans-serif;
    font-weight: bold;
    margin-bottom: 35px;
    font-size: 30px;

    font-family: 'Murs-Gothic';
}

.title_kurses {
    color: #0000FF;
}

.olympiad_title {
    color: #4800FF;
}

.textbook_title {
    font-size: 70px;
    font-family: 'Murs-Gothic';
}

.information_text {
    font-size: 24px;
    line-height: 18px;
    color: #000000;
    font-weight: normal;
    font-family: "Geist Variable";
    margin-top: 10px;
   
}

.information_source {
    font-weight: bold;
    
}

.information_block {}



.button_downoload {
    width: 375px;
    height:45px;
    border-radius: 30px;
    text-align: center;
    background: blue;
    box-shadow: none;
    text-shadow: none;
    color: white;
}
</style>