<script></script>
<template>
  <div class="panel">
    <div class="title">АДМИН</div>
    <ul class="list">
      <li @click="$router.push('/UsersApp')" class="cursor-pointer">
        пользователи
      </li>
      <li @click="$router.push('/subscriptionApp')" class="cursor-pointer">
        подписка
      </li>
      <li @click="$router.push('/ManageTheory')" class="cursor-pointer">
        управление теорией
      </li>
      <li @click="$router.push('/ManageTask')" class="cursor-pointer">
        управление заданиями
      </li>
    </ul>
  </div>
</template>

<style scoped>
.title {
  font-size: 28px;
  text-align: center;
  color: #8900fe;
}
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 200%;
  padding: 20px;
  border-radius: 24px;
  background: #8900fe;
  color: white;
}
</style>
