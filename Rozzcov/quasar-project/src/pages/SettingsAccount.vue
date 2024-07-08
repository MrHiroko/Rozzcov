<script>

</script>

<template>
    <div class="title">
        НАСТРОЙКИ
    </div>
    <div class="content">
        <div class="row">
            <div class="col-12">
                <div class="row">
                    <div class="col">
                        <q-card class="card card-data">
                            <div class="icon_block">
                                <img class="icon_person" src="src/assets/icons/person.svg">
                                <span class="data-text">Личные данные</span>
                            </div>
                            <div class="q-pa-md example-row-equal-width data_input_block">

                                <div class="row">
                                    <div class="col family_block">
                                        <label>Фамилия</label>
                                        <q-input rounded outlined class="input input_family input-sm"  ></q-input>
                                    </div>
                                    <div class="col name_block">
                                        <label>Имя</label>
                                        <q-input rounded outlined class="input input_name input-sm"  ></q-input>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col secondfam_block">
                                        <label>Отчество</label>
                                        <q-input rounded outlined class="input input_second input-sm"   ></q-input>
                                    </div>
                                    <div class="col secondfam_block birthday_block ">
                                        <label>Дата рождения</label>
                                        <q-input class="input"  outlined square v-model="text" hint="" :dense="dense" />
                                        </div>
                                </div>
                            </div>
                        </q-card>
                    </div>
                    <div class="col">
                        <q-card class="card">
                            djfh
                        </q-card>
                    </div>
                </div>
            </div>

            <div class="col-12">
                <q-card class="card">

                </q-card>
            </div>
        </div>
    </div>
</template>

<style>

.name_block{
    margin-right: 30px;
    height: 97px;
}
.family_block{
    margin-right: 30px;
    height: 97px;
}
.secondfam_block{
    margin-top: 20px;
    margin-right: 30px; 
}
.icon_person {
    width: 35px;
    height: 35px;
}

.icon_block {
    width: 500px;
    height: 60px;
    display: flex;
    align-items: center;
    gap: 20px;
}

.title {
    font-family: 'Murs Gothic', sans-serif;
    font-weight: bold;
    margin-bottom: 35px;
    font-size: 4vw;
    color: blue;
    font-family: 'Murs-Gothic';
}

.card {
    margin: 4vh;
    padding-top: 15px;
    padding-left: 35px;
    border: 1px solid black;
    width: 700px;

    border-radius: 30px;
}

.card-data {
    height: 350px;
}

.data-text {
    font-size: 30px;
}
.input{
    font-size: 18px;
}
</style>