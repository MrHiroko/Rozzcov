<script>


</script>

<template>
<q-card class="card_profile">
    <div class="row">
    <div class="logo_block col-12">
        <img src="src/assets/img/RO_main_logo.svg">
        
    </div>
    <div class="title_block col-12">
        <q-span>Вход в профиль</q-span>
    </div>
    <div class="input_block col-12">
        <div class="posta_input_block">
        <label class="label">Почта</label>
        <q-input rounded outlined type="email" class="posta_input" dense />
        
    </div>
    <div class="posta_input_block block_password">
       
        <label class="label">Пароль</label>
        <q-input rounded outlined type="password" class="posta_input password_input" dense />
    </div>
    </div>
    <div class="btn_block col-12">
        <q-btn class="login_btn">Войти</q-btn>
        <q-span class="forgot_password">Забыли пароль?</q-span>
        <q-btn class="login_btn">Войти без профиля</q-btn>
        <q-btn class="login_btn">Cоздать профиль</q-btn>
    </div>
</div>
</q-card>

</template>

<style scoped>
@import url(../css/pages/LoginProfile.scss);

</style>