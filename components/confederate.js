AFRAME.registerComponent('manager', {
    init: function () {
        let self = this;
        this.fire = document.querySelector('#fire1')
        this.fire.setAttribute('visible', 'false')
        this.stage1Handler = this.stage1Handler.bind(this);
        this.stage2Handler = this.stage2Handler.bind(this);
        this.stage3Handler = this.stage3Handler.bind(this);
        this.stage4Handler = this.stage4Handler.bind(this);
        this.marker1 = document.querySelector('#pos1').object3D.position;
        this.marker2 = document.querySelector('#pos2').object3D.position;
        this.marker3 = document.querySelector('#pos3').object3D.position;
        this.marker4 = document.querySelector('#pos4').object3D.position;
        this.marker5 = document.querySelector('#pos5').object3D.position;
        this.marker6 = document.querySelector('#pos6').object3D.position;
        $("#stage1").click(self.stage1Handler);
        $("#stage2").click(self.stage2Handler);
        $("#stage3").click(self.stage3Handler);
        $("#stage4").click(self.stage4Handler);
        $("#fullScreen").click(function () {
            if (!document.fullscreenElement
                && !document.mozFullScreenElement
                && !document.webkitFullscreenElement && !document.msFullscreenElement
            ) {  // current working methods
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen();
                } else if (document.documentElement.msRequestFullscreen) {
                    document.documentElement.msRequestFullscreen();
                } else if (document.documentElement.mozRequestFullScreen) {
                    document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullscreen) {
                    document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
            }
        })
        this.initializeModels();

    },
    initializeModels:function(){

        let s1 = this.create3Dmodel('s1','union');
        s1.object3D.position.x = this.marker1.x;
        s1.object3D.position.y = this.marker1.y;
        s1.object3D.position.z = this.marker1.z;

        let t1 =this.create3Dmodel('t1','conf');
        t1.object3D.position.x = this.marker2.x;
        t1.object3D.position.y = this.marker2.y;
        t1.object3D.position.z = this.marker2.z;

        let t2 =this.create3Dmodel('t2','conf');
        t2.object3D.position.x = this.marker2.x-0.5;
        t2.object3D.position.y = this.marker2.y-0.3;
        t2.object3D.position.z = this.marker2.z;


        let t3 =this.create3Dmodel('t3','conf');
        t3.object3D.position.x = this.marker2.x-0.5;
        t3.object3D.position.y = this.marker2.y+0.3;
        t3.object3D.position.z = this.marker2.z;

    },
    stage1StartPosition:function(){
        $('#stage1').removeClass('btn-dark').addClass('btn-danger active');
        $('#stage2').removeClass('btn-danger active').addClass('btn-dark');
        $('#stage3').removeClass('btn-danger active').addClass('btn-dark');
        $('#stage4').removeClass('btn-danger active').addClass('btn-dark');
        $('#stage5').removeClass('btn-danger active').addClass('btn-dark');

        let s1 = document.querySelector('#s1');
        let t1 = document.querySelector('#t1');
        let t2 = document.querySelector('#t2');
        let t3 = document.querySelector('#t3');

        s1.object3D.position.x = this.marker1.x;
        s1.object3D.position.y = this.marker1.y;
        s1.object3D.position.z = this.marker1.z;

        t1.object3D.position.x = this.marker2.x;
        t1.object3D.position.y = this.marker2.y;
        t1.object3D.position.z = this.marker2.z;

        t2.object3D.position.x = this.marker2.x-0.5;
        t2.object3D.position.y = this.marker2.y-0.3;
        t2.object3D.position.z = this.marker2.z;

        t3.object3D.position.x = this.marker2.x-0.5;
        t3.object3D.position.y = this.marker2.y+0.3;
        t3.object3D.position.z = this.marker2.z;

    },
    stage2StartPosition:function(){
        $('#stage2').removeClass('btn-dark').addClass('btn-danger active');
        $('#stage1').removeClass('btn-danger active').addClass('btn-dark');
        $('#stage3').removeClass('btn-danger active').addClass('btn-dark');
        $('#stage4').removeClass('btn-danger active').addClass('btn-dark');
        $('#stage5').removeClass('btn-danger active').addClass('btn-dark');
        let s1 = document.querySelector('#s1');
        let t1 = document.querySelector('#t1');
        let t2 = document.querySelector('#t2');
        let t3 = document.querySelector('#t3');

        s1.object3D.position.x = this.marker2.x;
        s1.object3D.position.y = this.marker2.y;
        s1.object3D.position.z = this.marker2.z;

        t1.object3D.position.x = this.marker2.x;
        t1.object3D.position.y = this.marker2.y;
        t1.object3D.position.z = this.marker2.z;

        t2.object3D.position.x = this.marker2.x-0.5;
        t2.object3D.position.y = this.marker2.y-0.3;
        t2.object3D.position.z = this.marker2.z;

        t3.object3D.position.x = this.marker2.x-0.5;
        t3.object3D.position.y = this.marker2.y+0.3;
        t3.object3D.position.z = this.marker2.z;

    },
    stage3StartPosition:function(){
        $('#stage3').removeClass('btn-dark').addClass('btn-danger active');
        $('#stage2').removeClass('btn-danger active').addClass('btn-dark');
        $('#stage1').removeClass('btn-danger active').addClass('btn-dark');
        $('#stage4').removeClass('btn-danger active').addClass('btn-dark');
        $('#stage5').removeClass('btn-danger active').addClass('btn-dark');
        let s1 = document.querySelector('#s1');
        let t1 = document.querySelector('#t1');
        let t2 = document.querySelector('#t2');
        let t3 = document.querySelector('#t3');

        s1.object3D.position.x = this.marker2.x;
        s1.object3D.position.y = this.marker2.y;
        s1.object3D.position.z = this.marker2.z;

        t1.object3D.position.x = this.marker4.x;
        t1.object3D.position.y = this.marker4.y;
        t1.object3D.position.z = this.marker4.z;

        t2.object3D.position.x = this.marker5.x;
        t2.object3D.position.y = this.marker5.y;
        t2.object3D.position.z = this.marker5.z;

        t3.object3D.position.x = this.marker6.x;
        t3.object3D.position.y = this.marker6.y;
        t3.object3D.position.z = this.marker6.z;
    },
    stage4StartPosition:function(){

        $('#stage4').removeClass('btn-dark').addClass('btn-danger active');
        $('#stage2').removeClass('btn-danger active').addClass('btn-dark');
        $('#stage3').removeClass('btn-danger active').addClass('btn-dark');
        $('#stage1').removeClass('btn-danger active').addClass('btn-dark');
        $('#stage5').removeClass('btn-danger active').addClass('btn-dark');
        let s1 = document.querySelector('#s1');
        let t1 = document.querySelector('#t1');
        let t2 = document.querySelector('#t2');
        let t3 = document.querySelector('#t3');

        s1.object3D.position.x = this.marker3.x;
        s1.object3D.position.y = this.marker3.y;
        s1.object3D.position.z = this.marker3.z;

        t1.object3D.position.x = this.marker2.x;
        t1.object3D.position.y = this.marker2.y;
        t1.object3D.position.z = this.marker2.z;

        t2.object3D.position.x = this.marker2.x-0.5;
        t2.object3D.position.y = this.marker2.y-0.3;
        t2.object3D.position.z = this.marker2.z;

        t3.object3D.position.x = this.marker2.x-0.5;
        t3.object3D.position.y = this.marker2.y+0.3;
        t3.object3D.position.z = this.marker2.z;
    },
    removeMarkerModels: function () {
        let u = document.querySelector('#union')
        let c = document.querySelector('#conf');
        if (u) {
            u.parentNode.removeChild(u)
        }
        if (c) {
            c.parentNode.removeChild(c)
        }
    },
    create3Dmodel: function (id, type) {
        let el = document.createElement('a-entity');
        el.setAttribute('gltf-model', '#man');
        el.setAttribute('id', id);


        if (type === 'union') {
            let unionFlag = document.createElement('a-plane');
            unionFlag.setAttribute('src', '#unionFlag');
            unionFlag.setAttribute('height', "0.8");
            unionFlag.setAttribute('width', "1.2");
            unionFlag.setAttribute('position', "0 2 0");
            unionFlag.setAttribute('look-at', "[camera]");
            el.appendChild(unionFlag)

        } else {
            let confederateFlag = document.createElement('a-plane');
            confederateFlag.setAttribute('src', '#confederate');
            confederateFlag.setAttribute('height', "0.8");
            confederateFlag.setAttribute('width', "1.2");
            confederateFlag.setAttribute('position', "0 2 0");
            confederateFlag.setAttribute('look-at', "[camera]");
            el.appendChild(confederateFlag)
        }
        let scene = document.querySelector('a-scene');
        scene.appendChild(el)
        return el;
    },
    stage1Handler: function () {
        this.removeMarkerModels();
        let scene = document.querySelector('a-scene');
        let fire = document.querySelector('#fire1')
        fire.setAttribute('visible', 'false')
        let self = this;


        let el = this.create3Dmodel('s1','union');
        el.setAttribute('animation-mixer', {clip: 'mixamo.com'})

        let pos1 = document.querySelector('#pos1').object3D;
        let pos2 = document.querySelector('#pos2').object3D;

        el.object3D.position.x = pos1.position.x;
        el.object3D.position.y = pos1.position.y;
        el.object3D.position.z = pos1.position.z;


        let el1 = this.create3Dmodel('s11','confederate');
        el1.object3D.position.x = pos2.position.x - 0.5;
        el1.object3D.position.y = pos2.position.y + 0.2;
        el1.object3D.position.z = pos2.position.z;



        let el2 = this.create3Dmodel('s22','confederate');
        el2.object3D.position.x = pos2.position.x - 0.5;
        el2.object3D.position.y = pos2.position.y;
        el2.object3D.position.z = pos2.position.z;

        let el3 = this.create3Dmodel('s33','confederate');
        el3.object3D.position.x = pos2.position.x - 0.5;
        el3.object3D.position.y = pos2.position.y - 0.2;
        el3.object3D.position.z = pos2.position.z;



        let curve = document.createElement('a-curve');
        curve.setAttribute('id', 'track1');
        let curvePoint1 = document.createElement('a-curve-point');
        let curvePoint2 = document.createElement('a-curve-point');
        curvePoint1.setAttribute('position', el.object3D.position);
        curvePoint2.setAttribute('position', pos2.position);
        curve.appendChild(curvePoint1);
        curve.appendChild(curvePoint2);
        scene.appendChild(curve);
        el.setAttribute('alongpath', {curve: '#track1', dur: 3000, rotate: true, delay: 2000});
        el.addEventListener('movingended', runaway)
        $("#battleInfo").html("8:30 AM May 12th 1865 Branson led his men off to attack a Confederate camp at Palmito Ranch");

        function runaway() {
            let old = document.querySelector('#s1');
            old.removeAttribute('animation-mixer');
            old.removeEventListener('movingended', runaway)
            let scene = document.querySelector('a-scene');

            let pos4 = document.querySelector('#pos4').object3D.position;
            let pos5 = document.querySelector('#pos5').object3D.position;
            let pos6 = document.querySelector('#pos6').object3D.position;
            let el1 = document.querySelector('#s11');
            el1.setAttribute('animation-mixer', {clip: 'mixamo.com'})
            let el2 = document.querySelector('#s22');
            el2.setAttribute('animation-mixer', {clip: 'mixamo.com'})
            let el3 = document.querySelector('#s33');
            el3.setAttribute('animation-mixer', {clip: 'mixamo.com'})


            $("#battleInfo").text(`After skirmishing along the way, the Federals attacked the camp and scattered the Confederates`)

            let track4 = document.createElement('a-curve');
            track4.setAttribute('id', 'track4');
            let track41 = document.createElement('a-curve-point');
            let track42 = document.createElement('a-curve-point');
            track41.setAttribute('position', el1.object3D.position);
            track42.setAttribute('position', pos4);
            track4.appendChild(track41);
            track4.appendChild(track42);
            scene.appendChild(track4);

            let track5 = document.createElement('a-curve');
            track5.setAttribute('id', 'track5');
            let track51 = document.createElement('a-curve-point');
            let track52 = document.createElement('a-curve-point');
            track51.setAttribute('position', el2.object3D.position);
            track52.setAttribute('position', pos5);
            track5.appendChild(track51);
            track5.appendChild(track52);
            scene.appendChild(track5);

            let track6 = document.createElement('a-curve');
            track6.setAttribute('id', 'track6');
            let track61 = document.createElement('a-curve-point');
            let track62 = document.createElement('a-curve-point');
            track61.setAttribute('position', el3.object3D.position);
            track62.setAttribute('position', pos6);
            track6.appendChild(track61);
            track6.appendChild(track62);
            scene.appendChild(track6);


            el1.setAttribute('alongpath', {curve: '#track4', dur: 3000, rotate: true, delay: 2000});
            el2.setAttribute('alongpath', {curve: '#track5', dur: 3000, rotate: true, delay: 2000});
            el3.setAttribute('alongpath', {curve: '#track6', dur: 3000, rotate: true, delay: 2000});
            el1.addEventListener('movingended', self.stage2Handler)

        }


    },
    stage2Handler: function () {
        $('#stage1').removeClass('btn-danger active').addClass('btn-dark');
        $('#stage3').removeClass('btn-danger active').addClass('btn-dark');
        $('#stage4').removeClass('btn-danger active').addClass('btn-dark');
        $('#stage5').removeClass('btn-danger active').addClass('btn-dark');
        $('#stage2').removeClass('btn-dark').addClass('btn-danger active');
        let pos4 = document.querySelector('#pos4').object3D.position;
        let pos5 = document.querySelector('#pos5').object3D.position;
        let pos6 = document.querySelector('#pos6').object3D.position;
        let fire = document.querySelector('#fire1')
        fire.setAttribute('visible', 'false')
        let scene = document.querySelector('a-scene');
        let self = this;


        let el = document.querySelector('#s1');
        el.setAttribute('animation-mixer', {clip: 'mixamo.com'})

        let pos2 = document.querySelector('#pos2').object3D.position;
        el.object3D.position.x = pos2.x;
        el.object3D.position.y = pos2.y;
        el.object3D.position.z = pos2.z;

        let old1 = document.querySelector('#s11');
        if (old1) {
            old1.object3D.position.x = pos4.x;
            old1.object3D.position.y = pos4.y;
            old1.object3D.position.z = pos4.z;
            old1.removeAttribute('animation-mixer');

        }
        let old2 = document.querySelector('#s22');
        if (old2) {
            old2.object3D.position.x = pos5.x;
            old2.object3D.position.y = pos5.y;
            old2.object3D.position.z = pos5.z;
            old2.removeAttribute('animation-mixer')

        }
        let old3 = document.querySelector('#s33');
        if (old3) {
            old3.object3D.position.x = pos6.x;
            old3.object3D.position.y = pos6.y;
            old3.object3D.position.z = pos6.z;
            old3.removeAttribute('animation-mixer');

        }
        let pos3 = document.querySelector('#pos3').object3D.position;
        $("#battleInfo").text(`After the small confrontation at Palmito Ranch, Branson and the Union troops retreated to the hill nearby to rest their troops and animals`)

        let curve = document.createElement('a-curve');
        curve.setAttribute('id', 'track7');
        let curvePoint1 = document.createElement('a-curve-point');
        let curvePoint2 = document.createElement('a-curve-point');
        curvePoint1.setAttribute('position', el.object3D.position);
        curvePoint2.setAttribute('position', pos3);
        curve.appendChild(curvePoint1);
        curve.appendChild(curvePoint2);
        scene.appendChild(curve);
        el.setAttribute('alongpath', {curve: '#track7', dur: 3000, rotate: true, delay: 2000});
        el.addEventListener('movingended', self.stage3Handler)
    },
    stage3Handler: function () {
        $('#stage3').addClass('btn-danger active').removeClass('btn-dark')
        $('#stage2').addClass('btn-dark').removeClass('btn-danger active');
        $('#stage1').removeClass('btn-danger active').addClass('btn-dark');
        $('#stage4').removeClass('btn-danger active').addClass('btn-dark');
        $('#stage5').removeClass('btn-danger active').addClass('btn-dark');


        let self = this;
        let el = document.querySelector('#s1');
        el.removeAttribute('animation-mixer');
        el.removeEventListener('movingended', self.stage3Handler);
        let fire = document.querySelector('#fire1')
        fire.setAttribute('visible', 'true')
        let pos2 = document.querySelector('#pos2').object3D.position;
        fire.object3D.position.x = pos2.x;
        fire.object3D.position.y = pos2.y;
        fire.object3D.position.z = pos2.z;

        let pos3 = document.querySelector('#pos3').object3D.position;
        el.object3D.position.x = pos3.x;
        el.object3D.position.y = pos3.y;
        el.object3D.position.z = pos3.z;


        let pos4 = document.querySelector('#pos4').object3D.position;
        let pos5 = document.querySelector('#pos5').object3D.position;
        let pos6 = document.querySelector('#pos6').object3D.position;
        let old1 = document.querySelector('#s11');
        if (old1) {
            old1.object3D.position.x = pos4.x;
            old1.object3D.position.y = pos4.y;
            old1.object3D.position.z = pos4.z;
            old1.removeAttribute('animation-mixer');

        }
        let old2 = document.querySelector('#s22');
        if (old2) {
            old2.object3D.position.x = pos5.x;
            old2.object3D.position.y = pos5.y;
            old2.object3D.position.z = pos5.z;
            old2.removeAttribute('animation-mixer')

        }
        let old3 = document.querySelector('#s33');
        if (old3) {
            old3.object3D.position.x = pos6.x;
            old3.object3D.position.y = pos6.y;
            old3.object3D.position.z = pos6.z;
            old3.removeAttribute('animation-mixer');

        }

        $("#battleInfo").text(`The Union took Palmito Ranch, burning any supplies that they found abandoned at the camp, and capturing three prisoners`);
        setTimeout(self.stage4Handler, 2000);
    },
    stage4Handler: function () {
        $("#battleInfo").html("At 3pm, the Confederates came with reinforcements");
        $('#stage4').addClass('btn-danger active').removeClass('btn-dark')

        $('#stage3').removeClass('btn-danger active').addClass('btn-dark');
        $('#stage2').removeClass('btn-danger active').addClass('btn-dark');
        $('#stage1').removeClass('btn-danger active').addClass('btn-dark');
        $('#stage5').removeClass('btn-danger active').addClass('btn-dark');
        let scene = document.querySelector('a-scene');
        let pos2 = document.querySelector('#pos2').object3D.position;

        let pos4 = document.querySelector('#pos4').object3D.position;
        let pos5 = document.querySelector('#pos5').object3D.position;
        let pos6 = document.querySelector('#pos6').object3D.position;

        let el1 = document.querySelector('#s11');
        el1.setAttribute('animation-mixer', {clip: 'mixamo.com'})
        el1.object3D.position.x = pos4.x;
        el1.object3D.position.y = pos4.y;
        el1.object3D.position.z = pos4.z;



        let el2 = document.querySelector('#s22');
        el2.setAttribute('animation-mixer', {clip: 'mixamo.com'})
        el2.object3D.position.x = pos5.x;
        el2.object3D.position.y = pos5.y;
        el2.object3D.position.z = pos5.z;


        let el3 = document.querySelector('#s33');
        el3.setAttribute('animation-mixer', {clip: 'mixamo.com'})
        el3.object3D.position.x = pos6.x;
        el3.object3D.position.y = pos6.y;
        el3.object3D.position.z = pos6.z;

        this.fire.setAttribute('visible', 'false');


        let track8 = document.createElement('a-curve');
        track8.setAttribute('id', 'track8');
        let track81 = document.createElement('a-curve-point');
        let track82 = document.createElement('a-curve-point');
        track81.setAttribute('position', el1.object3D.position);
        track82.setAttribute('position', pos2);
        track8.appendChild(track81);
        track8.appendChild(track82);
        scene.appendChild(track8);

        let track9 = document.createElement('a-curve');
        track9.setAttribute('id', 'track9');
        let track91 = document.createElement('a-curve-point');
        let track92 = document.createElement('a-curve-point');
        track91.setAttribute('position', el2.object3D.position);
        track92.setAttribute('position', pos2);
        track9.appendChild(track91);
        track9.appendChild(track92);
        scene.appendChild(track9);

        let track10 = document.createElement('a-curve');
        track10.setAttribute('id', 'track10');
        let track101 = document.createElement('a-curve-point');
        let track102 = document.createElement('a-curve-point');
        track101.setAttribute('position', el3.object3D.position);
        track102.setAttribute('position', pos2);
        track10.appendChild(track101);
        track10.appendChild(track102);
        scene.appendChild(track10);


        el1.setAttribute('alongpath', {curve: '#track8', dur: 3000, rotate: true, delay: 2000});
        el2.setAttribute('alongpath', {curve: '#track9', dur: 3000, rotate: true, delay: 2000});
        el3.setAttribute('alongpath', {curve: '#track10', dur: 3000, rotate: true, delay: 2000});
        el1.addEventListener('movingended', returnToBase)

        function returnToBase() {
            $("#battleInfo").html("Federals retreated to White’s Ranch.");

            let old1 = document.querySelector('#s11');
            let old2 = document.querySelector('#s22');
            let old3 = document.querySelector('#s33');
            old1.removeEventListener('movingended', returnToBase);
            old1.removeAttribute('animation-mixer');
            old2.removeAttribute('animation-mixer');
            old3.removeAttribute('animation-mixer');

            let el = document.querySelector('#s1');
            el.setAttribute('animation-mixer', {clip: 'mixamo.com'})
            let pos3 = document.querySelector('#pos3').object3D.position;
            el.object3D.position.x = pos3.x;
            el.object3D.position.y = pos3.y;
            el.object3D.position.z = pos3.z;

            let pos1 = document.querySelector('#pos1').object3D.position;
            let track11 = document.createElement('a-curve');
            track11.setAttribute('id', 'track11');
            let curvePoint111 = document.createElement('a-curve-point');
            let curvePoint112 = document.createElement('a-curve-point');
            curvePoint111.setAttribute('position', el.object3D.position);
            curvePoint112.setAttribute('position', pos1);
            track11.appendChild(curvePoint111);
            track11.appendChild(curvePoint112);
            scene.appendChild(track11);

            el.setAttribute('alongpath', {curve: '#track11', dur: 3000, rotate: true, delay: 2000});
            el.addEventListener('movingended', reachBased1)

            function reachBased1() {
                let s1 = document.querySelector('#s1');
                s1.removeAttribute('animation-mixer');
                s1.removeEventListener('movingended', reachBased1);
            }
        }

    },
    tick: function (time, timeDelta) {
        let pos1 = document.querySelector('#pos1').object3D;
        let pos2 = document.querySelector('#pos2').object3D;
        let pos3 = document.querySelector('#pos3').object3D;
        let pos4 = document.querySelector('#pos4').object3D;
        let pos5 = document.querySelector('#pos5').object3D;
        let pos6 = document.querySelector('#pos6').object3D;
        let flag1 = pos1.visible === true && pos2.visible === true;
        let flag2 = pos2.visible === true && pos3.visible === true;
        let flag3 = pos2.visible === true;
        let flag4 = pos1.visible === true && pos2.visible === true && pos3.visible === true && pos4.visible === true && pos5.visible === true && pos6.visible === true;

        $('#stage1').prop('disabled', !flag1);
        $('#stage2').prop('disabled', !flag2);
        $('#stage3').prop('disabled', !flag3);
        $('#stage4').prop('disabled', !flag4);


    }
});