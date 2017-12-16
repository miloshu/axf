<template>
   <header class="header">
      <div class="header-content">
        <address>
          深圳市行政服务大厅西厅 306▼
        </address>
      </div>
      <span class="searchIco">搜索</span>
    </header>
</template>  

<!-- Add "scoped" attribute to limit CSS to this component only -->
<script>
export default {
}
</script>

<style scoped>
html {
  font-size: 10px;
}
.header {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 4.5rem;
  line-height: 4.5rem;
  font-size: 1rem;
  background: #ffd600;
  /*border: 1px solid #ffd600;*/
}
.header-content {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 4rem;
  right: 4rem;
  text-align: center;
  font-weight: 700;
}
.header-content > address {
  font-size: 0.85rem;
  font-style: normal;
  color: #000;
}
.searchIco {
  position: absolute;
  right: 1rem;
  width: 6rem;
  height: 4.5rem;
  line-height: 7rem;
  text-align: right;
  background-image: url("./images/serach.png");
  background-repeat: no-repeat;
  -webkit-background-size: auto 2rem;
  background-size: auto 2rem;
  background-position: right .5rem;
  text-align: right;
  line-height: 7rem;
}
</style>
