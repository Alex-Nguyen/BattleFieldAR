
AFRAME.registerComponent('manager', {
    init: function () {
        let self = this;
        this.stage1Handler = this.stage1Handler.bind(this);
        $( "#stage1" ).click(self.stage1Handler);
        let pos1 = document.querySelector('#pos1').object3D.visible;
        let pos2 = document.querySelector('#pos2').object3D.visible;
        let pos3 = document.querySelector('#pos3').object3D.visible;
        let pos4 = document.querySelector('#pos4').object3D.visible;
        let pos5 = document.querySelector('#pos5').object3D.visible;
        let pos6 = document.querySelector('#pos6').object3D.visible;

        // this.stage2Handler = this.stage2Handler.bind(this);
        // this.stage3Handler = this.stage3Handler.bind(this);
        // this.stage4Handler = this.stage4Handler.bind(this);
        // this.el.addEventListener('StartStage1',this.stage1Handler);
        // this.el.addEventListener('StartStage2',this.stage2Handler);
        // this.el.addEventListener('StartStage3',this.stage3Handler);
        // this.el.addEventListener('StartStage4',this.stage4Handler);
        // this.el.emit('StartStage1','',false)
    },
    stage1Handler:function(){
        console.log("Start stage 1")
        let self = this;
        var timeToStart = 2;
        var downloadTimer = setInterval(function () {
            $("#countdown").text(`Stage1 starts in ${timeToStart} secs`);
            timeToStart -= 1;
            if (timeToStart <= 0) {
                let el = document.querySelector('#source').object3D;
                let tg = document.querySelector('#pos2').object3D.getWorldPosition();
                createjs.Tween.get(el.position)
                    .to(tg, 3000)
                $("#countdown").text(`Stage1 starts in ${tg.x} secs`);

                clearInterval(downloadTimer);
            }
        }, 1000);

    },
    stage2Handler:function(){
        console.log("Start stage 2")
        let self = this;
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
        let el = document.querySelector('#source');
        el.setAttribute('alongpath', {curve: '#smove2', dur: 3, rotate: true});
        el.setAttribute('animation-mixer',{clip:'mixamo.com'})
        let fire = document.querySelector('#fire1');
        fire.setAttribute('visible','true')
    },
    stage4Handler:function(){
        console.log("Start stage 4")
    },
    tick:function (time, timeDelta) {
        let pos1 = document.querySelector('#pos1').object3D;
        let pos2 = document.querySelector('#pos2').object3D;
        let pos3 = document.querySelector('#pos3').object3D;
        let pos4 = document.querySelector('#pos4').object3D;
        let pos5 = document.querySelector('#pos5').object3D;
        let pos6 = document.querySelector('#pos6').object3D;
        let flag1 = pos1.visible === true && pos2.visible === true;
        $('#stage1').prop('disabled', !flag1);

    }
});