<script>
export default{
    data(){
        return{
            book:{
                title:"УЧЕБНИК ПО ПОЛИТОЛОГИИ",
                information:"Политология 11 класс Р.Д. Рубцовский (2014)",
                information_second:"Политика XX века Г.М Синицын (2007)",

            }
        }
    }
}
</script>

<template>
<div class="book_block">
    <div class="title_block">
        Название: <span class="book_title">{{ book.title }}</span>
    </div>
    <div class="info_block title_block">
      <p> Информация: Информация взята из следующих источников: </p> 
      <p class="book_info"> {{ book.information }} </p> 
      <p class="book_info"> {{ book.information_second }} </p> 
    </div>
</div>

</template>

<style scoped>
.book_block{
    line-height: normal;
}
.title_block{
    font-size: 24px;
    
}
.book_title{
    font-size: 34px;
    font-weight: 800;
    font-family: "Murs-Gothic";
}

</style>