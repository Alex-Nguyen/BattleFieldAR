AFRAME.registerComponent('confederate', {
    init:function () {
        this.el.addEventListener('movingended',function () {
            self._death();
        })
    },
    _walking:function(){
        this.el.setAttribute('animation-mixer',{clip:'Walking'})
    },
    _death:function(){
        this.el.setAttribute('animation-mixer',{clip:'Dealth'})
    },
    _idle:function(){
        this.el.setAttribute('animation-mixer',{clip:'Idle'})
    },
    tick:function (time,timeDelta) {

    }
});