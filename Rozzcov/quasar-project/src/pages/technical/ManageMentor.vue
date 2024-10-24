<script>
export default{
    data(){
        return{
            mentors: ["Мишанов Е.А", "Мишанов Е.А", "Мишанов Е.А"]
        }
    }
}
</script>



<template>
 <table class="manage_table">
    <tr>
        <td class="fio">ФИО</td>
        <td class="fio">Действие</td>
    </tr>
    <tr v-for="mentor in mentors" :key="mentor" >
        <td>
            {{mentor}}
        </td>
        <td><q-btn
            
            label="Редактировать"
            color="primary"
          /></td>
    </tr>
 </table>
</template>



<style>
table{
    border-collapse: collapse;
}
th, td{
    border-bottom:1px solid black;
    line-height: 65px;
}
.manage_table{
    font-size: 24px;
    width: 1500px;
}
.fio{
    color:grey;
}
</style>