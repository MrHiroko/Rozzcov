<script>

</script>

<template>
<q-card class="card_profile">
    <div class="row">
    <div class="logo_block col-12">
        <img src="src/assets/img/RO_main_logo.svg">
        
    </div>
    <div class="title_block col-12">
    <div class="reg_title">
        <q-span>Регистрация</q-span>
    </div>
    <div class="posta_title">
        <q-span>На вашу почту было выслано<br> письмо с кодом</q-span>
    </div>
    <div class="input_title">
        <q-span>Введите его для<br> подтверждения профиля</q-span>
    </div>
</div>
    
    <div class="input_block col-12">
       
    <div class="posta_input_block block_password">
       
       <label class="label">Код</label>
       <q-input rounded outlined type="text" class="posta_input password_input" />
   </div>
    </div>
    <div class="btn_block col-12">
        <q-btn class="login_btn">Подтвердить</q-btn>
        
    </div> 
</div>
</q-card>

</template>

<style scoped>
@import url(../css/pages/RegConfirm.scss);
</style>