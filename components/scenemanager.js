AFRAME.registerComponent('manager', {
    init: function () {
        let self = this;
        this.fire = document.querySelector('#fire1');
        this.scene = document.querySelector('a-scene');

        this.fire.setAttribute('visible', 'false')
        this.stage1Handler = this.stage1Handler.bind(this);
        this.stage2Handler = this.stage2Handler.bind(this);
        this.stage3Handler = this.stage3Handler.bind(this);
        this.stage4Handler = this.stage4Handler.bind(this);
        this.stage5Handler = this.stage5Handler.bind(this);

        $("#stage1").click(self.stage1Handler);
        $("#stage2").click(self.stage2Handler);
        $("#stage3").click(self.stage3Handler);
        $("#stage4").click(self.stage4Handler);
        $("#stage5").click(self.stage5Handler);
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
        });
        this.initializeModels();

    },
    initializeModels: function () {
        let marker1 = document.querySelector('#pos1').object3D.position;
        let marker2 = document.querySelector('#pos2').object3D.position;
        let marker3 = document.querySelector('#pos3').object3D.position;
        let marker4 = document.querySelector('#pos4').object3D.position;
        let marker5 = document.querySelector('#pos5').object3D.position;
        let marker6 = document.querySelector('#pos6').object3D.position;

        let s1 = this.create3Dmodel('s1', 'union');
        s1.object3D.position.x = marker1.x;
        s1.object3D.position.y = marker1.y;
        s1.object3D.position.z = marker1.z;

        let t1 = this.create3Dmodel('t1', 'conf');
        t1.object3D.position.x = marker2.x;
        t1.object3D.position.y = marker2.y;
        t1.object3D.position.z = marker2.z;

        let t2 = this.create3Dmodel('t2', 'conf');
        t2.object3D.position.x = marker2.x - 0.5;
        t2.object3D.position.y = marker2.y - 0.3;
        t2.object3D.position.z = marker2.z;


        let t3 = this.create3Dmodel('t3', 'conf');
        t3.object3D.position.x = marker2.x - 0.5;
        t3.object3D.position.y = marker2.y + 0.3;
        t3.object3D.position.z = marker2.z;
        this.scene.appendChild(s1);
        this.scene.appendChild(t1);
        this.scene.appendChild(t2);
        this.scene.appendChild(t3);

    },
    stage1StartPosition: function () {
        let fire = document.querySelector('#fire1')
        fire.setAttribute('visible', 'false');
        $('#stage1').removeClass('btn-dark').addClass('btn-danger active');
        $('#stage2').removeClass('btn-danger active').addClass('btn-dark');
        $('#stage3').removeClass('btn-danger active').addClass('btn-dark');
        $('#stage4').removeClass('btn-danger active').addClass('btn-dark');
        $('#stage5').removeClass('btn-danger active').addClass('btn-dark');

        let s1 = document.querySelector('#s1');
        let t1 = document.querySelector('#t1');
        let t2 = document.querySelector('#t2');
        let t3 = document.querySelector('#t3');

        let marker1 = document.querySelector('#pos1').object3D.position;
        let marker2 = document.querySelector('#pos2').object3D.position;
        let marker3 = document.querySelector('#pos3').object3D.position;
        let marker4 = document.querySelector('#pos4').object3D.position;
        let marker5 = document.querySelector('#pos5').object3D.position;
        let marker6 = document.querySelector('#pos6').object3D.position;
        s1.object3D.position.x = marker1.x;
        s1.object3D.position.y = marker1.y;
        s1.object3D.position.z = marker1.z;

        t1.object3D.position.x = marker2.x;
        t1.object3D.position.y = marker2.y;
        t1.object3D.position.z = marker2.z;

        t2.object3D.position.x = marker2.x - 0.5;
        t2.object3D.position.y = marker2.y - 0.3;
        t2.object3D.position.z = marker2.z;

        t3.object3D.position.x = marker2.x - 0.5;
        t3.object3D.position.y = marker2.y + 0.3;
        t3.object3D.position.z = marker2.z;

    },
    stage2StartPosition: function () {
        let fire = document.querySelector('#fire1')
        fire.setAttribute('visible', 'false');
        $('#stage2').removeClass('btn-dark').addClass('btn-danger active');
        $('#stage1').removeClass('btn-danger active').addClass('btn-dark');
        $('#stage3').removeClass('btn-danger active').addClass('btn-dark');
        $('#stage4').removeClass('btn-danger active').addClass('btn-dark');
        $('#stage5').removeClass('btn-danger active').addClass('btn-dark');
        let s1 = document.querySelector('#s1');
        let t1 = document.querySelector('#t1');
        let t2 = document.querySelector('#t2');
        let t3 = document.querySelector('#t3');
        let marker1 = document.querySelector('#pos1').object3D.position;
        let marker2 = document.querySelector('#pos2').object3D.position;
        let marker3 = document.querySelector('#pos3').object3D.position;
        let marker4 = document.querySelector('#pos4').object3D.position;
        let marker5 = document.querySelector('#pos5').object3D.position;
        let marker6 = document.querySelector('#pos6').object3D.position;

        s1.object3D.position.x = marker2.x + 0.3;
        s1.object3D.position.y = marker2.y;
        s1.object3D.position.z = marker2.z;

        t1.object3D.position.x = marker2.x - 0.5;
        t1.object3D.position.y = marker2.y;
        t1.object3D.position.z = marker2.z;

        t2.object3D.position.x = marker2.x - 0.5;
        t2.object3D.position.y = marker2.y - 0.3;
        t2.object3D.position.z = marker2.z;

        t3.object3D.position.x = marker2.x - 0.5;
        t3.object3D.position.y = marker2.y + 0.3;
        t3.object3D.position.z = marker2.z;

    },
    stage3StartPosition: function () {
        let fire = document.querySelector('#fire1')
        fire.setAttribute('visible', 'false');
        $('#stage3').removeClass('btn-dark').addClass('btn-danger active');
        $('#stage2').removeClass('btn-danger active').addClass('btn-dark');
        $('#stage1').removeClass('btn-danger active').addClass('btn-dark');
        $('#stage4').removeClass('btn-danger active').addClass('btn-dark');
        $('#stage5').removeClass('btn-danger active').addClass('btn-dark');
        let s1 = document.querySelector('#s1');
        let t1 = document.querySelector('#t1');
        let t2 = document.querySelector('#t2');
        let t3 = document.querySelector('#t3');
        let marker1 = document.querySelector('#pos1').object3D.position;
        let marker2 = document.querySelector('#pos2').object3D.position;
        let marker3 = document.querySelector('#pos3').object3D.position;
        let marker4 = document.querySelector('#pos4').object3D.position;
        let marker5 = document.querySelector('#pos5').object3D.position;
        let marker6 = document.querySelector('#pos6').object3D.position;

        s1.object3D.position.x = marker2.x;
        s1.object3D.position.y = marker2.y;
        s1.object3D.position.z = marker2.z;

        t1.object3D.position.x = marker4.x;
        t1.object3D.position.y = marker4.y;
        t1.object3D.position.z = marker4.z;

        t2.object3D.position.x = marker5.x;
        t2.object3D.position.y = marker5.y;
        t2.object3D.position.z = marker5.z;

        t3.object3D.position.x = marker6.x;
        t3.object3D.position.y = marker6.y;
        t3.object3D.position.z = marker6.z;
    },
    stage4StartPosition: function () {
        let fire = document.querySelector('#fire1')
        fire.setAttribute('visible', 'false');
        $('#stage4').removeClass('btn-dark').addClass('btn-danger active');
        $('#stage2').removeClass('btn-danger active').addClass('btn-dark');
        $('#stage1').removeClass('btn-danger active').addClass('btn-dark');
        $('#stage3').removeClass('btn-danger active').addClass('btn-dark');
        $('#stage5').removeClass('btn-danger active').addClass('btn-dark');
        let s1 = document.querySelector('#s1');
        let t1 = document.querySelector('#t1');
        let t2 = document.querySelector('#t2');
        let t3 = document.querySelector('#t3');
        let marker1 = document.querySelector('#pos1').object3D.position;
        let marker2 = document.querySelector('#pos2').object3D.position;
        let marker3 = document.querySelector('#pos3').object3D.position;
        let marker4 = document.querySelector('#pos4').object3D.position;
        let marker5 = document.querySelector('#pos5').object3D.position;
        let marker6 = document.querySelector('#pos6').object3D.position;
        s1.object3D.position.x = marker3.x;
        s1.object3D.position.y = marker3.y;
        s1.object3D.position.z = marker3.z;

        t1.object3D.position.x = marker4.x;
        t1.object3D.position.y = marker4.y;
        t1.object3D.position.z = marker4.z;

        t2.object3D.position.x = marker5.x;
        t2.object3D.position.y = marker5.y;
        t2.object3D.position.z = marker5.z;

        t3.object3D.position.x = marker6.x;
        t3.object3D.position.y = marker6.y;
        t3.object3D.position.z = marker6.z;
    },
    stage5StartPosition:function(){
        let fire = document.querySelector('#fire1')
        fire.setAttribute('visible', 'false');
        fire.object3D.position.x = this.marker2.x;
        fire.object3D.position.y = this.marker2.y;
        fire.object3D.position.z = this.marker2.z;
        $('#stage5').removeClass('btn-dark').addClass('btn-danger active');
        $('#stage2').removeClass('btn-danger active').addClass('btn-dark');
        $('#stage3').removeClass('btn-danger active').addClass('btn-dark');
        $('#stage1').removeClass('btn-danger active').addClass('btn-dark');
        $('#stage4').removeClass('btn-danger active').addClass('btn-dark');
        let s1 = document.querySelector('#s1');
        let t1 = document.querySelector('#t1');
        let t2 = document.querySelector('#t2');
        let t3 = document.querySelector('#t3');

        let marker1 = document.querySelector('#pos1').object3D.position;
        let marker2 = document.querySelector('#pos2').object3D.position;
        let marker3 = document.querySelector('#pos3').object3D.position;
        let marker4 = document.querySelector('#pos4').object3D.position;
        let marker5 = document.querySelector('#pos5').object3D.position;
        let marker6 = document.querySelector('#pos6').object3D.position;

        s1.object3D.position.x = marker3.x;
        s1.object3D.position.y = marker3.y;
        s1.object3D.position.z = marker3.z;

        t1.object3D.position.x = marker2.x;
        t1.object3D.position.y = marker2.y;
        t1.object3D.position.z = marker2.z;

        t2.object3D.position.x = marker2.x - 0.5;
        t2.object3D.position.y = marker2.y - 0.3;
        t2.object3D.position.z = marker2.z;

        t3.object3D.position.x = marker2.x - 0.5;
        t3.object3D.position.y = marker2.y + 0.3;
        t3.object3D.position.z = marker2.z;
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

        let marker2 = document.querySelector('#pos2').object3D.position;

        this.stage1StartPosition();
        var self = this;
        let s1 = document.querySelector('#s1');
        s1.setAttribute('animation-mixer', {clip: 'mixamo.com'})
        let curve = document.createElement('a-curve');
        curve.setAttribute('id', 'track1');
        let curvePoint1 = document.createElement('a-curve-point');
        let curvePoint2 = document.createElement('a-curve-point');
        curvePoint1.setAttribute('position', s1.object3D.position);
        curvePoint2.setAttribute('position', marker2);
        curve.appendChild(curvePoint1);
        curve.appendChild(curvePoint2);
        this.scene.appendChild(curve);
        s1.setAttribute('alongpath', {curve: '#track1', dur: 3000, rotate: true, delay: 2000});
        $("#battleInfo").html("8:30 AM May 12th 1865 Branson led his men off to attack a Confederate camp at Palmito Ranch");
        s1.addEventListener('movingended', stage1Finish)

        function stage1Finish() {
            let s11 = document.querySelector('#s1');
            s11.removeEventListener('movingended', stage1Finish);
            s11.removeAttribute('animation-mixer');
            s11.removeAttribute('alongpath');
            setTimeout(self.stage2Handler,2000);
        }

    },
    stage2Handler: function () {
        this.stage2StartPosition();
        let self = this;
        let t1 = document.querySelector('#t1');
        let t2 = document.querySelector('#t2');
        let t3 = document.querySelector('#t3');
        let marker1 = document.querySelector('#pos1').object3D.position;
        let marker2 = document.querySelector('#pos2').object3D.position;
        let marker3 = document.querySelector('#pos3').object3D.position;
        let marker4 = document.querySelector('#pos4').object3D.position;
        let marker5 = document.querySelector('#pos5').object3D.position;
        let marker6 = document.querySelector('#pos6').object3D.position;
        // Set animations
        t1.setAttribute('animation-mixer', {clip: 'mixamo.com'});
        t2.setAttribute('animation-mixer', {clip: 'mixamo.com'});
        t3.setAttribute('animation-mixer', {clip: 'mixamo.com'});

        // Create track4,5,6
        let track4 = document.createElement('a-curve');
        track4.setAttribute('id', 'track4');
        let track41 = document.createElement('a-curve-point');
        let track42 = document.createElement('a-curve-point');
        track41.setAttribute('position', t1.object3D.position);
        track42.setAttribute('position', marker4);
        track4.appendChild(track41);
        track4.appendChild(track42);
        this.scene.appendChild(track4);

        let track5 = document.createElement('a-curve');
        track5.setAttribute('id', 'track5');
        let track51 = document.createElement('a-curve-point');
        let track52 = document.createElement('a-curve-point');
        track51.setAttribute('position', t2.object3D.position);
        track52.setAttribute('position', marker5);
        track5.appendChild(track51);
        track5.appendChild(track52);
        this.scene.appendChild(track5);

        let track6 = document.createElement('a-curve');
        track6.setAttribute('id', 'track6');
        let track61 = document.createElement('a-curve-point');
        let track62 = document.createElement('a-curve-point');
        track61.setAttribute('position', t3.object3D.position);
        track62.setAttribute('position', marker6);
        track6.appendChild(track61);
        track6.appendChild(track62);
        this.scene.appendChild(track6);

        t1.setAttribute('alongpath', {curve: '#track4', dur: 3000, rotate: true, delay: 2000});
        t2.setAttribute('alongpath', {curve: '#track5', dur: 3000, rotate: true, delay: 2000});
        t3.setAttribute('alongpath', {curve: '#track6', dur: 3000, rotate: true, delay: 200});
        t1.addEventListener('movingended', stage2Finish);
        function stage2Finish() {
            let t1 = document.querySelector('#t1');
            let t2 = document.querySelector('#t2');
            let t3 = document.querySelector('#t3');
            t1.removeEventListener('movingended', stage2Finish);
            t1.removeAttribute('animation-mixer');
            t1.removeAttribute('alongpath');
            t2.removeAttribute('animation-mixer');
            t2.removeAttribute('alongpath');
            t3.removeAttribute('animation-mixer');
            t3.removeAttribute('alongpath');
            setTimeout(self.stage3Handler,2000);
        }
    },
    stage3Handler: function () {
        this.stage3StartPosition();
        let marker1 = document.querySelector('#pos1').object3D.position;
        let marker2 = document.querySelector('#pos2').object3D.position;
        let marker3 = document.querySelector('#pos3').object3D.position;
        let marker4 = document.querySelector('#pos4').object3D.position;
        let marker5 = document.querySelector('#pos5').object3D.position;
        let marker6 = document.querySelector('#pos6').object3D.position;
        let self = this;
        let s1 = document.querySelector('#s1');
        s1.setAttribute('animation-mixer', {clip: 'mixamo.com'})
        let track7 = document.createElement('a-curve');
        track7.setAttribute('id', 'track7');
        let curvePoint1 = document.createElement('a-curve-point');
        let curvePoint2 = document.createElement('a-curve-point');
        curvePoint1.setAttribute('position', s1.object3D.position);
        curvePoint2.setAttribute('position', marker3);
        track7.appendChild(curvePoint1);
        track7.appendChild(curvePoint2);
        this.scene.appendChild(track7);
        s1.setAttribute('alongpath', {curve: '#track7', dur: 3000, rotate: true, delay: 2000});
        s1.addEventListener('movingended', stage3Finished)
        function stage3Finished() {
            let s11 = document.querySelector('#s1');
            s11.removeEventListener('movingended', stage3Finished);
            s11.removeAttribute('animation-mixer');
            s11.removeAttribute('alongpath');
            let fire = document.querySelector('#fire1')
            fire.setAttribute('visible', 'true');
            setTimeout(self.stage4Handler,2000);

        }

    },
    stage4Handler: function () {
        this.stage4StartPosition();
        let self = this;
        let marker1 = document.querySelector('#pos1').object3D.position;
        let marker2 = document.querySelector('#pos2').object3D.position;
        let marker3 = document.querySelector('#pos3').object3D.position;
        let marker4 = document.querySelector('#pos4').object3D.position;
        let marker5 = document.querySelector('#pos5').object3D.position;
        let marker6 = document.querySelector('#pos6').object3D.position;
        let t1 = document.querySelector('#t1');
        let t2 = document.querySelector('#t2');
        let t3 = document.querySelector('#t3');
        let tt1 = document.querySelector('#track8');
        let tt2 = document.querySelector('#track9');
        let tt3 = document.querySelector('#track10');
        if(tt1) tt1.parentNode.removeChild(tt1);
        if(tt2) tt2.parentNode.removeChild(tt2);
        if(tt3) tt3.parentNode.removeChild(tt3);
        t1.setAttribute('animation-mixer', {clip: 'mixamo.com'});
        t2.setAttribute('animation-mixer', {clip: 'mixamo.com'});
        t3.setAttribute('animation-mixer', {clip: 'mixamo.com'});

        let track8 = document.createElement('a-curve');
        track8.setAttribute('id', 'track8');
        let track81 = document.createElement('a-curve-point');
        let track82 = document.createElement('a-curve-point');
        track81.setAttribute('position', t1.object3D.position);
        track82.setAttribute('position', marker2);
        track8.appendChild(track81);
        track8.appendChild(track82);
        this.scene.appendChild(track8);

        let track9 = document.createElement('a-curve');
        track9.setAttribute('id', 'track9');
        let track91 = document.createElement('a-curve-point');
        let track92 = document.createElement('a-curve-point');
        track91.setAttribute('position', t2.object3D.position);
        track92.setAttribute('position',marker2);
        track9.appendChild(track91);
        track9.appendChild(track92);
        this.scene.appendChild(track9);

        let track10 = document.createElement('a-curve');
        track10.setAttribute('id', 'track10');
        let track101 = document.createElement('a-curve-point');
        let track102 = document.createElement('a-curve-point');
        track101.setAttribute('position', t3.object3D.position);
        track102.setAttribute('position', marker2);
        track10.appendChild(track101);
        track10.appendChild(track102);
        this.scene.appendChild(track10);

        t1.setAttribute('alongpath', {curve: '#track8', dur: 3000, rotate: true, delay: 2000});
        t2.setAttribute('alongpath', {curve: '#track9', dur: 3000, rotate: true, delay: 2000});
        t3.setAttribute('alongpath', {curve: '#track10', dur: 3000, rotate: true, delay: 2000});
        t1.addEventListener('movingended', stage4Finished)
        function stage4Finished() {
            let t1 = document.querySelector('#t1');
            let t2 = document.querySelector('#t2');
            let t3 = document.querySelector('#t3');

            t1.removeEventListener('movingended', stage4Finished);
            t1.removeAttribute('animation-mixer');
            t1.removeAttribute('alongpath');
            t2.removeAttribute('animation-mixer');
            t2.removeAttribute('alongpath');
            t3.removeAttribute('animation-mixer');
            t3.removeAttribute('alongpath');
            setTimeout(self.stage5Handler,2000);
        }

    },
    stage5Handler:function(){
        this.stage5StartPosition();
        let marker1 = document.querySelector('#pos1').object3D.position;
        let marker2 = document.querySelector('#pos2').object3D.position;
        let marker3 = document.querySelector('#pos3').object3D.position;
        let marker4 = document.querySelector('#pos4').object3D.position;
        let marker5 = document.querySelector('#pos5').object3D.position;
        let marker6 = document.querySelector('#pos6').object3D.position;
        let s1 = document.querySelector('#s1');
        s1.setAttribute('animation-mixer', {clip: 'mixamo.com'})
        let track11 = document.createElement('a-curve');
        track11.setAttribute('id', 'track11');
        let curvePoint111 = document.createElement('a-curve-point');
        let curvePoint112 = document.createElement('a-curve-point');
        curvePoint111.setAttribute('position', s1.object3D.position);
        curvePoint112.setAttribute('position', marker1);
        track11.appendChild(curvePoint111);
        track11.appendChild(curvePoint112);
        this.scene.appendChild(track11);
        s1.setAttribute('alongpath', {curve: '#track11', dur: 3000, rotate: true, delay: 2000});
        s1.addEventListener('movingended', stage5Finished)

        function stage5Finished() {
            let s1 = document.querySelector('#s1');
            s1.removeAttribute('animation-mixer');
            s1.removeAttribute('alongpath');
            s1.removeEventListener('movingended', stage5Finished);
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
        $('#stage5').prop('disabled', !flag1);


    }
});