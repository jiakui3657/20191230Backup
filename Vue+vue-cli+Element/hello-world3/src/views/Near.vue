<template>
  <div class="classify">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="team.no < team.totalPage ? false : true"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell v-for="(item, index) in team.list" :key="index">{{
          item.name
        }}</van-cell>
      </van-list>
    </van-pull-refresh>
    <TabBar name="near" />
  </div>
</template>

<script>
import TabBar from "@/components/TabBar";

export default {
  name: "near",
  components: {
    TabBar
  },
  data() {
    return {
      team: {},
      loading: false,
      finished: true,
      no: 1,
      isLoading: false
    };
  },
  mounted: function() {
    this.getTeam(this.no, this.$store.state.size);
  },
  methods: {
    onLoad() {
      if (this.team.no < this.team.totalPage) {
        this.team.no = this.team.no + 1;
        this.getTeam(this.team.no, this.$store.state.size);
      }
    },
    onRefresh() {
      this.getTeam(1, this.no * this.$store.state.size).then(() => {
        this.isLoading = false;
        this.$toast.success("刷新成功");
      });
    },
    getTeam(no, size, name = "") {
      // eslint-disable-next-line no-unused-vars
      let _this = this;
      let params = {
        name: name,
        no: no,
        size: size
      };
      // eslint-disable-next-line no-undef
      return _this.https
        .fetchPost("/rest/agent/teams.htm", params)
        .then(data => {
          if (data.code == 0) {
            window.console.log(data);
            if (no > 1) {
              _this.team.list = _this.team.list.concat(data.list);
            } else {
              _this.team = data;
            }
          } else {
            this.$toast(data.msg);
          }
        })
        .catch(err => {
          window.console.log(err);
        });
    }
  }
};
</script>
<style lang="less">
.classify {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.van-pull-refresh {
  min-height: 100%;
}

.van-list {
  padding-bottom: 50px;
}
</style>
