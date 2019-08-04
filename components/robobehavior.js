AFRAME.registerComponent('behavior', {
    init:function () {
        this.fightTimes = 10;
        let self = this;
       this.el.addEventListener('movingstarted',function () {
           self._walking();
       })
        this.el.addEventListener('movingended',function () {
            self._punch();
        })
    },
    _walking:function(){
        this.el.setAttribute('animation-mixer',{clip:'Walking'})
    },
    _idle:function(){
        this.el.setAttribute('animation-mixer',{clip:'Idle'})

    },
    _punch:function(){
        let time = this.fightTimes;
        let target = document.querySelector("#target");
        let self = this;
        this.el.setAttribute('animation-mixer',{clip:'Punch'});
        target.setAttribute('animation-mixer',{clip:'Punch'});
        let countdown = setInterval(function () {
            time--;
            if(time <=0){
                target.setAttribute('animation-mixer',{clip:'Running'});
                target.setAttribute('alongpath', {curve: '#track2', dur: 5000, rotate: true});
                target.addEventListener('movingended',function () {
                    target.setAttribute('animation-mixer',{clip:'Idle'});
                });
                self.el.setAttribute('animation-mixer',{clip:'Idle'});
                clearInterval(countdown);
            }
        },1000)

        setTimeout(function () {
            target.setAttribute('animation-mixer',{clip:'Death',loop:'pingpong'})
        },3000)
    },
    tick:function (time,timeDelta) {

    }
});

