<script>
export default{
data(){
    return{
        subject: [
        {
            title: "История", 
            themes:["Отечественная история", "Мировая история", "Культура"],
            textbook:["Учебник 1", "Учебник 2", "Учебник 3"]
        },
        {
            title: "Международные отношения", 
            themes:["Отечественная история", "Мировая история", "Культура"],
            textbook:["Учебник 1", "Учебник 2", "Учебник 3"],
            
        },
        {
            title: "Политология", 
            themes:["Отечественная история", "Мировая история", "Культура"],
            textbook:["Учебник 1", "Учебник 2", "Учебник 3"],
            
        },
        {
            title: "Социология", 
            themes:["Отечественная история", "Мировая история", "Культура"],
            textbook:["Учебник 1", "Учебник 2", "Учебник 3"],
            
        },
       
        ],
    }
}



}

</script>

<template>
<div class="subjects font" v-for="subject in subject" :key="subject.title">
    {{ subject.title }}
    <ul class="subjects_list font">
    <li v-for="theme in subject.themes" :key="theme">
       {{ theme }}
       <ul class="textbook_list">
        <li v-for="book in subject.textbook" :key="book">
            {{ book }}
            
        </li>
        <p class="plus_book">+</p>
       </ul>
        </li>
        
    </ul>
    <p class="plus_list">+</p>
   
</div>
<p class="plus_subject font">+</p>
</template>

<style scoped>
.font{
    font-size: 24px;
    margin-left: 30px;
}
.subjects_list{
    margin-left: 20px;
}
.plus_list{
    margin-left: 20px;
}
.textbook_list{
    margin-left: 30px;
}
</style>