<template>
  <div class="customSearch">
    <header class="bar bar-nav search">
        <div class="search-out" >
            <a class="external search-inner" href="javascript:void(0);" v-on:click="tosearch">
                <div class="search-box">
                    <input type="text" class="order-two" placeholder="搜索商品" />
                </div>
            </a>
            <a class="go" href="javascript:void(0);" v-if="textToggle" v-on:click="searchEnd">搜索</a>
        </div>
    </header>
  </div>
</template>

<script>

import {} from 'mint-ui'

export default {
  props: [
    'searchToggle'
  ],
  components: {
  },
  name: 'customSearch',
  data () {
    return {
      textToggle: this.searchToggle
    }
  },
  methods: {
    tosearch: function () {
      if (!this.textToggle) {
        this.$emit('toggle', !this.textToggle)
        this.textToggle = !this.textToggle
        this.$router.push({path: 'search'})
        console.log('111')
      }
    },
    searchEnd: function () {
      this.textToggle = !this.textToggle
      this.$emit('toggle', this.textToggle)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .search {
        padding: 0.26rem;
        background-color: transparent;
        transition: background-color 0.5s;
        height: auto;
        color: #000;
    }

    .search-out {
        width: 100%;
        height: 0.8rem;
        display: flex;
    }

    .bar:after {
        width: 0;
        height: 0;
    }

    .has-bg {
        background-color: #f0f0f0;
    }

    .scan {
        width: 1.06rem;
        height: 100%;
        text-align: center;
    }

    .scan img {
        width: 0.8rem;
        height: 0.8rem;
    }

    .search-inner {
        flex: 1;
        height: 0.8rem;
        background-color: #fff;
        border-radius: 20px;
        padding: 0.16rem;
        border: 1px solid #979797;
        box-sizing: border-box;
    }

    .search-box {
        width: 100%;
        height: 100%;
        display: flex;
    }

    .down {
        width: 0px;
        height: 0px;
        border-top: 5px solid #666;
        border-left: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-right: 5px solid transparent;
        position: absolute;
        right: 0.106rem;
        top: 0.186rem;
    }

    .order-two {
        flex: 1;
        height: 100%;
        line-height: 0.48rem;
        padding: 0 0.16rem;
        border: none;
        outline: none;
        background-image: url(../assets/home/search.png);
        background-size: auto 0.293rem;
        background-repeat: no-repeat;
        background-position: 5px center;
        padding-left: 0.64rem;
    }

    .go {
        width: 1rem;
        height: 0.8rem;
        line-height: 0.8rem;
        text-align: center;
        color: #ff5a00;
        text-decoration: none;
        font-size: 0.35rem;
    }
</style>
