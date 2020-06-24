<style>
.c-w {
  color: #fff;
}
.c-bk {
  color: #231f20;
}
.c-ch {
  color: inherit;
}
.list .img {
  position: relative;
  display: inline-block;
  overflow: hidden;
  width: 24px;
  height: 24px;
  border-radius: 50%;
}
.list .img img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
}
.list .name {
  line-height: 24px;
  font-size: 16px;
  color: inherit;
}
.list .rank {
  font-size: 14px;
  line-height: 20px;
}
/* .v-enter-active, .v-leave-active {
  transition: 1s;
}
.v-leave-active {
  background-color: #fff;
}
.v-enter-active {
  background-color: #1574F6;
} */
.list {
  transition: 0.2s;
  border-radius: 8px;
}
.list.on {
  background-color: #fff;
  color: #231f20;
}
.list.off {
  background-color: #1574F6;
  color: #fff;
}
</style>

<template>
    <li class="list" v-bind:class="[on ? 'on': 'off']" @click="click">
      <span class="img"><img :src="link" alt=""></span>
      <span class="name c-ch">{{name}}</span>
      <span class="rank c-ch">{{rank}}</span>
    </li>
</template>

<script>
export default {
  props: [
    'link',
    'name',
    'rank'
  ],
  data(){
    return {
        test : 'test',
        on : true
    }
  },
  methods: {
    click(){
      this.on = !this.on;
      console.log(this.on);
    }
  }
}
</script>