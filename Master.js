// JavaScript source code

new Vue({
    el:'#app',
    data:{
        message: 'Hello World'

    },
    methods:{
        clearhover:function () {
            for (var t = this.$el.querySelectorAll(".js-hover"), e = 0; e < t.length; ++e)
                t[e].classList.remove("js-hover")
        },
        hideList: function () {
            o["default"].fire("hideList")
        },
        highlightLinks: function (t) {
            this.clearHover(),
            o["default"].fire("highlight", t.asin)
        },
        scrollIntoView: function (t) {
            if (this.vm.visible) {
                if (this.lastShowDetailTime) {
                    var e = new Date - this.lastShowDetailTime;
                    if (50 > e)
                        return
                }
            }
        },
        showDetails:function (t) {
            this.lastShowDetailTime = new Date,
            o["default"].fire("showDetails", t.asin)
        },
        showList:function () {
            o["default"].fire("showList")
        },
        showSideBarIfNeeded: function () {
            if (!this.vm.visible) {
                var t = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                t > v["default"].screenSmall && this.showList()
            }
        }
    },
    $remove:function (t) {
        if (this.length) {
            var e = _(this, t);
            return e > -1 ? this.splice(e, 1) : void 0
        }
    }

});