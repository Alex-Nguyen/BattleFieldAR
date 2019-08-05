
AFRAME.registerComponent('manager', {
    init: function () {
        this.stage1Handler = this.stage1Handler.bind(this);
        this.stage2Handler = this.stage2Handler.bind(this);
        this.stage3Handler = this.stage3Handler.bind(this);
        this.stage4Handler = this.stage4Handler.bind(this);
        this.el.addEventListener('StartStage1',this.stage1Handler);
        this.el.addEventListener('StartStage2',this.stage2Handler);
        this.el.addEventListener('StartStage3',this.stage3Handler);
        this.el.addEventListener('StartStage4',this.stage4Handler);
        this.el.emit('StartStage1','',false)
    },
    stage1Handler:function(){
        console.log("Start stage 1")
        let self = this;
        var timeToStart = 3;
        var downloadTimer = setInterval(function () {
            $("#countdown").text(`Scene 1 will start in ${timeToStart} seconds`);
            timeToStart -= 1;
            if (timeToStart <= 0) {
                let el = document.querySelector('#source');
                el.setAttribute('alongpath', {curve: '#track1', dur: 5000, rotate: true});
                el.setAttribute('animation-mixer',{clip:'mixamo.com'})
                el.addEventListener('movingended',function () {
                    el.removeAttribute('alongpath');
                    el.removeAttribute('animation-mixer')
                    $("#countdown").text(`Stage 1 clear - Start Stage 2`);
                    self.el.emit('StartStage2','',false);
                });
                clearInterval(downloadTimer);
            }
        }, 1000);

    },
    stage2Handler:function(){
        console.log("Start stage 2")
        let timer = 3;
        let action = setInterval(function () {
            timer--;
            $("#countdown").text(`Scene 2 will start in ${timer} seconds`);
            if(timer <=0){
                let t1 = document.querySelector("#target1");
                let t2 = document.querySelector("#target2");
                let t3 = document.querySelector("#target3");
                t1.setAttribute('animation-mixer',{clip:'mixamo.com'});
                t1.setAttribute('alongpath', {curve: '#track2', dur: 5000, rotate: true});
                t2.setAttribute('animation-mixer',{clip:'mixamo.com'});
                t2.setAttribute('alongpath', {curve: '#track3', dur: 5000, rotate: true});
                t3.setAttribute('animation-mixer',{clip:'mixamo.com'});
                t3.setAttribute('alongpath', {curve: '#track4', dur: 5000, rotate: true});
                t1.addEventListener('movingended',function () {
                    t1.removeAttribute('animation-mixer');
                    t2.removeAttribute('animation-mixer');
                    t3.removeAttribute('animation-mixer');
                    $("#countdown").text(`Stage 2 clear - Start Stage 3`);
                    self.el.emit('StartStage3','',false);
                });


                clearInterval(action)
            }
        },1000)

    },
    stage3Handler:function(){
        console.log("Start stage 3")
    },
    stage4Handler:function(){
        console.log("Start stage 4")
    },
    tick:function (time, timeDelta) {
        
    }
});