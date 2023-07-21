Page({
  data: {
    visible: true,
    placement: "left",
    sidebar: [
      {
        title: "首页",
      },
      {
        title: "搜索页",
      },
      {
        title: "发布页",
      },
      {
        title: "消息列表页",
      },
      {
        title: "对话页",
      },
      {
        title: "个人中心页（已登录）",
      },
      {
        title: "个人中心页（未登录）",
      },
      {
        title: "个人消息表单页",
      },
      {
        title: "设置页",
      },
      {
        title: "数据图表页",
      },
      {
        title: "登录注册页（验证登录）",
      },
      {
        title: "登录注册页（密码登录）",
      },
    ],
  },

  methods: {
    openDrawerBase() {
      this.setData({
        visible: true,
        sidebar: this.data.baseSidebar,
      });
    },

    itemClick(e) {
      console.log(e.detail);
    },

    overlayClick(e) {
      console.log(e.detail);
    },
  },
});
