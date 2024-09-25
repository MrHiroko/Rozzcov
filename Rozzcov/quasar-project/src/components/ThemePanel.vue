<script>
export default {
  props: {
    title: String,
    time: String,
    button: String,
    icon: String,
    percent: String,
  },
  components: {},
  data() {
    return {};
  },
  mounted() {},

  methods: {},
};
</script>

<template>
  <div class="test row wrap justify-between items-center content-center">
    <div class="title-block">{{ title }}</div>
    <div class="row content-block">
      <div class="time">
        {{ time }}
        <q-btn @click="$router.push('/politicaltextbook')" class="button">
          <svg width="20" height="20" viewBox="0 0 500 500" v-html="icon"></svg>
          {{ button }}
        </q-btn>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.button {
}
svg {
  position: absolute;
  left: 20px;
}
.title {
  font-size: 30px;
}
.title_second {
  color: #5f25ff;
}
.title_third {
  color: black;
}
.content {
  position: relative;
  padding: 0 10px;
}
.card {
  position: relative;
  top: 0;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  margin: 10px;
  height: 50px;

  padding: 0 20px;

  border-radius: 30px;
}
.button {
  width: 260px;
  margin-left: 30px;
  border-radius: 20px;
  height: 10px;
  background: blue;
  box-shadow: none;
  text-shadow: none;
  color: white;
}
.tests {
  margin-top: 60px;
}
.test {
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  margin: 10px;
  height: 50px;

  padding: 0 20px;

  border-radius: 30px;
}

@media (min-width: 320px) and (max-width: 375px) {
  .content {
    font-size: 16px;
  }
  .title {
    font-size: 14px;
  }
  .work {
    text-align: center;
  }
  .test {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: center;
    position: relative;
    top: 0;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    margin: 10px;
    height: 140px;

    padding: 0 20px;

    border-radius: 30px;
  }
  .time {
    text-align: center;
  }
  .content-block {
    line-height: 250%;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: center;
  }
  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: center;
    position: relative;
    top: 0;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    margin: 10px;
    height: 140px;

    padding: 0 20px;

    border-radius: 30px;
  }
  .button {
    width: 240px;
    margin-left: 30px;
    border-radius: 20px;
    height: 10px;
    background: blue;
    box-shadow: none;
    text-shadow: none;
    color: white;
  }
}

@media (min-width: 375px) and (max-width: 425px) {
  .content {
    font-size: 18px;
  }
  .title {
    font-size: 16px;
  }
  .work {
    font-size: 16px;
    text-align: center;
  }
  .title-block {
    font-size: 18px;
  }
  .test {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: center;
    font-size: 20px;
    position: relative;
    top: 0;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    margin: 10px;
    height: 140px;

    padding: 0 20px;

    border-radius: 30px;
  }
  .time {
    text-align: center;
  }
  .content-block {
    font-size: 16px;
    line-height: 250%;
    display: flex;

    justify-content: center;
    align-items: center;
    justify-self: center;
  }
  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: center;
    position: relative;
    top: 0;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    margin: 10px;
    height: 150px;

    padding: 0 20px;

    border-radius: 30px;
  }
  .button {
    width: 280px;
    margin-left: 30px;
    border-radius: 20px;
    height: 10px;
    background: blue;
    box-shadow: none;
    text-shadow: none;
    color: white;
  }
}

@media (min-width: 425px) and (max-width: 471px) {
  .content {
    font-size: 18px;
  }
  .title {
    font-size: 20px;
  }
  .work {
    font-size: 16px;
    text-align: center;
  }
  .title-block {
    font-size: 18px;
  }
  .test {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: center;
    font-size: 20px;
    position: relative;
    top: 0;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    margin: 10px;
    height: 140px;

    padding: 0 20px;

    border-radius: 30px;
  }
  .time {
    text-align: center;
  }
  .content-block {
    font-size: 16px;
    line-height: 250%;
    display: flex;

    justify-content: center;
    align-items: center;
    justify-self: center;
  }
  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: center;
    position: relative;
    top: 0;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    margin: 10px;
    height: 150px;

    padding: 0 20px;

    border-radius: 30px;
  }
  .button {
    width: 280px;
    margin-left: 30px;
    border-radius: 20px;
    height: 10px;
    background: blue;
    box-shadow: none;
    text-shadow: none;
    color: white;
  }
}
@media (min-width: 472px) and (max-width: 768px) {
  .content {
    font-size: 18px;
  }
  .title {
    font-size: 20px;
  }
  .work {
    display: flex;
    flex-direction: column;

    font-size: 16px;
    text-align: center;
  }
  .title-block {
    font-size: 18px;
  }
  .test {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: center;
    font-size: 20px;
    position: relative;
    top: 0;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    margin: 10px;
    height: 140px;

    padding: 0 20px;

    border-radius: 30px;
  }
  .time {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .content-block {
    font-size: 16px;
    line-height: 250%;
    display: flex;

    justify-content: center;
    align-items: center;
    justify-self: center;
  }
  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: center;
    position: relative;
    top: 0;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    margin: 10px;
    height: 150px;

    padding: 0 20px;

    border-radius: 30px;
  }
  .button {
    width: 280px;
    margin-left: 30px;
    border-radius: 20px;
    height: 10px;
    background: blue;
    box-shadow: none;
    text-shadow: none;
    color: white;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .title {
    font-size: 20px;
  }
  .test {
    position: relative;
    top: 0;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    margin: 10px;
    height: 100px;

    padding: 0 20px;

    border-radius: 30px;
  }

  .content-block {
    font-size: 16px;
  }
  .card {
    position: relative;
    top: 0;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    margin: 10px;
    height: 50px;

    padding: 0 20px;

    border-radius: 30px;
  }
  .button {
    width: 240px;
    margin-left: 30px;
    border-radius: 20px;
    height: 10px;
    background: blue;
    box-shadow: none;
    text-shadow: none;
    color: white;
  }
}
</style>
