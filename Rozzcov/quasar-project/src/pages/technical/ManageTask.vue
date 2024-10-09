<script>
export default{
data(){
    return{
        subject: [
        {
            title: "История", 
            themes:["Отечественная история", "Мировая история", "Культура"],

        },
        {
            title: "Международные отношения", 
            themes:["Отечественная история", "Мировая история", "Культура"],
            
        },
        {
            title: "Политология", 
            themes:["Отечественная история", "Мировая история", "Культура"],
            
        },
        {
            title: "Социология", 
            themes:["Отечественная история", "Мировая история", "Культура"],
            
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

</style>