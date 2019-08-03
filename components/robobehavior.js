AFRAME.registerComponent('behavior', {
    init:function () {
        let self = this;
       this.el.addEventListener('movingstarted',function () {
           self._walking();
       })
        this.el.addEventListener('movingended',function () {
            self._idle();
        })
    },
    _walking:function(){
        this.el.setAttribute('animation-mixer',{clip:'Walking'})
    },
    _idle:function(){
        this.el.setAttribute('animation-mixer',{clip:'Idle'})
    },
    tick:function (time,timeDelta) {

    }
});