
AFRAME.registerComponent('manager', {
    init: function () {
        let self = this;
        this.fire = document.querySelector('#fire1')
        this.fire.setAttribute('visible','false')
        this.directionV3 = new THREE.Vector3();
        this.stage1Animation=false;
        this.stage1Handler = this.stage1Handler.bind(this);
        this.stage2Handler = this.stage2Handler.bind(this);
        this.stage3Handler = this.stage3Handler.bind(this);
        this.stage4Handler = this.stage4Handler.bind(this);
        $( "#stage1" ).click(self.stage1Handler);
        $( "#stage2" ).click(self.stage2Handler);
        $( "#stage3" ).click(self.stage3Handler);
        $( "#stage4" ).click(self.stage4Handler);
        $("#buttonFullscreen").click(function () {
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


    },
    stage1Handler:function(){
        this.stage1Animation=true;
        let fire = document.querySelector('#fire1')
        fire.setAttribute('visible','false')
        let self = this;
        let old = document.querySelector('#s1');
        if(old){
            old.parentNode.removeChild(old);

        }

        let el = document.createElement('a-entity');
        el.setAttribute('gltf-model','#man');
        el.setAttribute('id','s1');
        el.setAttribute('animation-mixer',{clip:'mixamo.com'})
        let target = document.querySelector('#union');
        if(target){
            target.parentNode.removeChild(target);
        }

        let conf = document.querySelector('#conf');
        if(conf){
            conf.parentNode.removeChild(conf);
        }

        let unionFlag = document.createElement('a-plane');
        unionFlag.setAttribute('src','#unionFlag');
        unionFlag.setAttribute('height',"0.8");
        unionFlag.setAttribute('width',"1.2");
        unionFlag.setAttribute('position',"0 2 0");
        unionFlag.setAttribute('look-at',"[camera]");
        el.appendChild(unionFlag)

        let scene = document.querySelector('a-scene');
        let pos1 = document.querySelector('#pos1').object3D;
        let pos2 =document.querySelector('#pos2').object3D.position;

        el.object3D.position.x = pos1.position.x;
        el.object3D.position.y = pos1.position.y;
        el.object3D.position.z = pos1.position.z;
        scene.appendChild(el);

        let curve = document.createElement('a-curve');
        curve.setAttribute('id','track1');
        let curvePoint1 = document.createElement('a-curve-point');
        let curvePoint2 = document.createElement('a-curve-point');
        curvePoint1.setAttribute('position',el.object3D.position);
        curvePoint2.setAttribute('position',pos2);
        curve.appendChild(curvePoint1);
        curve.appendChild(curvePoint2);
        scene.appendChild(curve);
        el.setAttribute('alongpath', {curve: '#track1', dur: 3000, rotate: true, delay:2000});
        el.addEventListener('movingended',runaway)
        $("#battleInfo").html("8:30 AM May 12th 1865 Branson led his men off to attack a Confederate camp at Palmito Ranch");
        // createjs.Tween.get(el.object3D.position).to(pos2, 3000).call(runaway)
        function runaway() {
            let old = document.querySelector('#s1');
            old.removeAttribute('animation-mixer');
            old.removeEventListener('movingended',runaway)
            let old1 = document.querySelector('#s11');
            let old2 = document.querySelector('#s22');
            let old3 = document.querySelector('#s33');
            if(old1){
                old1.parentNode.removeChild(old1);

            }
            if(old2){
                old2.parentNode.removeChild(old2);

            }
            if(old3){
                old3.parentNode.removeChild(old3);

            }

            let pos2 =document.querySelector('#pos2').object3D;
            let pos4 =document.querySelector('#pos4').object3D.position;
            let pos5 =document.querySelector('#pos5').object3D.position;
            let pos6 =document.querySelector('#pos6').object3D.position;
            let el1 = document.createElement('a-entity');
            el1.setAttribute('gltf-model','#man');
            el1.setAttribute('id','s11');
            el1.setAttribute('animation-mixer',{clip:'mixamo.com'})
            el1.object3D.position.x = pos2.position.x-0.5;
            el1.object3D.position.y = pos2.position.y+0.2;
            el1.object3D.position.z = pos2.position.z;

            let confederateFlag = document.createElement('a-plane');
            confederateFlag.setAttribute('src','#confederate');
            confederateFlag.setAttribute('height',"0.8");
            confederateFlag.setAttribute('width',"1.2");
            confederateFlag.setAttribute('position',"0 2 0");
            confederateFlag.setAttribute('look-at',"[camera]");
            el1.appendChild(confederateFlag)
            scene.appendChild(el1);

            let el2 = document.createElement('a-entity');
            el2.setAttribute('gltf-model','#man');
            el2.setAttribute('id','s22');
            el2.setAttribute('animation-mixer',{clip:'mixamo.com'})
            el2.object3D.position.x = pos2.position.x-0.5;
            el2.object3D.position.y = pos2.position.y;
            el2.object3D.position.z = pos2.position.z;

            scene.appendChild(el2);


            let el3 = document.createElement('a-entity');
            el3.setAttribute('gltf-model','#man');
            el3.setAttribute('id','s33');
            el3.setAttribute('animation-mixer',{clip:'mixamo.com'})
            el3.object3D.position.x = pos2.position.x-0.5;
            el3.object3D.position.y = pos2.position.y-0.2;
            el3.object3D.position.z = pos2.position.z;

            scene.appendChild(el3);
            $("#battleInfo").text(`After skirmishing along the way, the Federals attacked the camp and scattered the Confederates`)

            let track4 = document.createElement('a-curve');
            track4.setAttribute('id','track4');
            let track41 = document.createElement('a-curve-point');
            let track42 = document.createElement('a-curve-point');
            track41.setAttribute('position',el1.object3D.position);
            track42.setAttribute('position',pos4);
            track4.appendChild(track41);
            track4.appendChild(track42);
            scene.appendChild(track4);

            let track5 = document.createElement('a-curve');
            track5.setAttribute('id','track5');
            let track51 = document.createElement('a-curve-point');
            let track52 = document.createElement('a-curve-point');
            track51.setAttribute('position',el2.object3D.position);
            track52.setAttribute('position',pos5);
            track5.appendChild(track51);
            track5.appendChild(track52);
            scene.appendChild(track5);

            let track6 = document.createElement('a-curve');
            track6.setAttribute('id','track6');
            let track61 = document.createElement('a-curve-point');
            let track62 = document.createElement('a-curve-point');
            track61.setAttribute('position',el3.object3D.position);
            track62.setAttribute('position',pos6);
            track6.appendChild(track61);
            track6.appendChild(track62);
            scene.appendChild(track6);


            el1.setAttribute('alongpath', {curve: '#track4', dur: 3000, rotate: true, delay:2000});
            el2.setAttribute('alongpath', {curve: '#track5', dur: 3000, rotate: true, delay:2000});
            el3.setAttribute('alongpath', {curve: '#track6', dur: 3000, rotate: true, delay:2000});
            el1.addEventListener('movingended',self.stage2Handler)

        }


        },
    stage2Handler:function(){
        let fire = document.querySelector('#fire1')
        fire.setAttribute('visible','false')
        let scene = document.querySelector('a-scene');
        let self = this;

        let old = document.querySelector('#s1');
        if(old){
            old.parentNode.removeChild(old);

        }

        let el = document.createElement('a-entity');
        el.setAttribute('gltf-model','#man');
        el.setAttribute('id','s1');
        el.setAttribute('animation-mixer',{clip:'mixamo.com'})
        let pos2 =document.querySelector('#pos2').object3D.position;
        el.object3D.position.x = pos2.x;
        el.object3D.position.y = pos2.y;
        el.object3D.position.z = pos2.z;
        let unionFlag = document.createElement('a-plane');
        unionFlag.setAttribute('src','#unionFlag');
        unionFlag.setAttribute('height',"0.8");
        unionFlag.setAttribute('width',"1.2");
        unionFlag.setAttribute('position',"0 2 0");
        unionFlag.setAttribute('look-at',"[camera]");
        el.appendChild(unionFlag)
        scene.appendChild(el);
        let old1 = document.querySelector('#s11');
        if(old1){
            old1.removeAttribute('animation-mixer');

        }

        let old2 = document.querySelector('#s22');
        if(old2){
            old2.removeAttribute('animation-mixer')

        }

        let old3 = document.querySelector('#s33');
        if(old3){
            old3.removeAttribute('animation-mixer');

        }

        let pos3 =document.querySelector('#pos3').object3D.position;
        $("#battleInfo").text(`After the small confrontation at Palmito Ranch, Branson and the Union troops retreated to the hill nearby to rest their troops and animals`)

        let curve = document.createElement('a-curve');
        curve.setAttribute('id','track7');
        let curvePoint1 = document.createElement('a-curve-point');
        let curvePoint2 = document.createElement('a-curve-point');
        curvePoint1.setAttribute('position',el.object3D.position);
        curvePoint2.setAttribute('position',pos3);
        curve.appendChild(curvePoint1);
        curve.appendChild(curvePoint2);
        scene.appendChild(curve);
        el.setAttribute('alongpath', {curve: '#track7', dur: 3000, rotate: true, delay:2000});
        el.addEventListener('movingended',self.stage3Handler)
        // createjs.Tween.get(el.object3D.position).wait(2000).to(pos3, 3000).call(self.stage3Handler);
    },
    stage3Handler:function(){
        let self = this;
        let s1 = document.querySelector('#s1');
        s1.removeAttribute('animation-mixer');
        s1.removeEventListener('movingended',self.stage3Handler);
        let fire = document.querySelector('#fire1')
        fire.setAttribute('visible','true')
        let pos2 =document.querySelector('#pos2').object3D.position;
        fire.object3D.position.x = pos2.x;
        fire.object3D.position.y = pos2.y;
        fire.object3D.position.z = pos2.z;
        $("#battleInfo").text(`The Union took Palmito Ranch, burning any supplies that they found abandoned at the camp, and capturing three prisoners`);
        setTimeout(self.stage4Handler,2000);
    },
    stage4Handler:function(){
        $("#battleInfo").html("At 3pm, the Confederates came with reinforcements");

        let scene = document.querySelector('a-scene');
        let pos2 =document.querySelector('#pos2').object3D.position;
        let old1 = document.querySelector('#s11');
        let old2 = document.querySelector('#s22');
        let old3 = document.querySelector('#s33');
        if(old1){
            old1.parentNode.removeChild(old1);

        }
        if(old2){
            old2.parentNode.removeChild(old2);

        }
        if(old3){
            old3.parentNode.removeChild(old3);

        }
        let pos4 =document.querySelector('#pos4').object3D.position;
        let pos5 =document.querySelector('#pos5').object3D.position;
        let pos6 =document.querySelector('#pos6').object3D.position;

        let el1 = document.createElement('a-entity');
        el1.setAttribute('gltf-model','#man');
        el1.setAttribute('id','s11');
        el1.setAttribute('animation-mixer',{clip:'mixamo.com'})
        el1.object3D.position.x = pos4.x
        el1.object3D.position.y = pos4.y;
        el1.object3D.position.z = pos4.z;

        let confederateFlag = document.createElement('a-plane');
        confederateFlag.setAttribute('src','#confederate');
        confederateFlag.setAttribute('height',"0.8");
        confederateFlag.setAttribute('width',"1.2");
        confederateFlag.setAttribute('position',"0 2 0");
        confederateFlag.setAttribute('look-at',"[camera]");
        el1.appendChild(confederateFlag)
        scene.appendChild(el1);

        let el2 = document.createElement('a-entity');
        el2.setAttribute('gltf-model','#man');
        el2.setAttribute('id','s22');
        el2.setAttribute('animation-mixer',{clip:'mixamo.com'})
        el2.object3D.position.x = pos5.x;
        el2.object3D.position.y = pos5.y;
        el2.object3D.position.z = pos5.z;

        scene.appendChild(el2);
        let el3 = document.createElement('a-entity');
        el3.setAttribute('gltf-model','#man');
        el3.setAttribute('id','s33');
        el3.setAttribute('animation-mixer',{clip:'mixamo.com'})
        el3.object3D.position.x = pos6.x;
        el3.object3D.position.y = pos6.y;
        el3.object3D.position.z = pos6.z;
        scene.appendChild(el3);
        this.fire.setAttribute('visible','false');


        let track8 = document.createElement('a-curve');
        track8.setAttribute('id','track8');
        let track81 = document.createElement('a-curve-point');
        let track82 = document.createElement('a-curve-point');
        track81.setAttribute('position',el1.object3D.position);
        track82.setAttribute('position',pos2);
        track8.appendChild(track81);
        track8.appendChild(track82);
        scene.appendChild(track8);

        let track9 = document.createElement('a-curve');
        track9.setAttribute('id','track9');
        let track91 = document.createElement('a-curve-point');
        let track92 = document.createElement('a-curve-point');
        track91.setAttribute('position',el2.object3D.position);
        track92.setAttribute('position',pos2);
        track9.appendChild(track91);
        track9.appendChild(track92);
        scene.appendChild(track9);

        let track10 = document.createElement('a-curve');
        track10.setAttribute('id','track10');
        let track101 = document.createElement('a-curve-point');
        let track102 = document.createElement('a-curve-point');
        track101.setAttribute('position',el3.object3D.position);
        track102.setAttribute('position',pos2);
        track10.appendChild(track101);
        track10.appendChild(track102);
        scene.appendChild(track10);


        el1.setAttribute('alongpath', {curve: '#track8', dur: 3000, rotate: true, delay:2000});
        el2.setAttribute('alongpath', {curve: '#track9', dur: 3000, rotate: true, delay:2000});
        el3.setAttribute('alongpath', {curve: '#track10', dur: 3000, rotate: true, delay:2000});
        el1.addEventListener('movingended',returnToBase)

        function returnToBase() {
            $("#battleInfo").html("Federals retreated to White’s Ranch.");

            let old1 = document.querySelector('#s11');
            let old2 = document.querySelector('#s22');
            let old3 = document.querySelector('#s33');
            old1.removeEventListener('movingended',returnToBase);
            old1.removeAttribute('animation-mixer');
            old2.removeAttribute('animation-mixer');
            old3.removeAttribute('animation-mixer');
            let old = document.querySelector('#s1');
            if(old){
                old.parentNode.removeChild(old);

            }

            let el = document.createElement('a-entity');
            el.setAttribute('gltf-model','#man');
            el.setAttribute('id','s1');
            el.setAttribute('animation-mixer',{clip:'mixamo.com'})
            let pos3 =document.querySelector('#pos3').object3D.position;
            el.object3D.position.x = pos3.x;
            el.object3D.position.y = pos3.y;
            el.object3D.position.z = pos3.z;
            let unionFlag = document.createElement('a-plane');
            unionFlag.setAttribute('src','#unionFlag');
            unionFlag.setAttribute('height',"0.8");
            unionFlag.setAttribute('width',"1.2");
            unionFlag.setAttribute('position',"0 2 0");
            unionFlag.setAttribute('look-at',"[camera]");
            el.appendChild(unionFlag)
            scene.appendChild(el);

            let pos1 =document.querySelector('#pos1').object3D.position;


            let track11 = document.createElement('a-curve');
            track11.setAttribute('id','track11');
            let curvePoint111 = document.createElement('a-curve-point');
            let curvePoint112 = document.createElement('a-curve-point');
            curvePoint111.setAttribute('position',el.object3D.position);
            curvePoint112.setAttribute('position',pos1);
            track11.appendChild(curvePoint111);
            track11.appendChild(curvePoint112);
            scene.appendChild(track11);

            el.setAttribute('alongpath', {curve: '#track11', dur: 3000, rotate: true, delay:2000});
            el.addEventListener('movingended',reachBased1)
            function reachBased1() {
                let s1 = document.querySelector('#s1');
                s1.removeAttribute('animation-mixer');
                s1.removeEventListener('movingended',reachBased1);
            }
        }

    },
    tick:function (time, timeDelta) {
        let pos1 = document.querySelector('#pos1').object3D;
        let pos2 = document.querySelector('#pos2').object3D;
        let pos3 = document.querySelector('#pos3').object3D;
        let pos4 = document.querySelector('#pos4').object3D;
        let pos5 = document.querySelector('#pos5').object3D;
        let pos6 = document.querySelector('#pos6').object3D;
        let flag1 = pos1.visible === true && pos2.visible === true;
        let flag2 = pos2.visible === true && pos3.visible === true;
        let flag3 = pos2.visible === true;
        let flag4 = pos1.visible === true && pos2.visible === true&& pos3.visible === true&& pos4.visible === true&& pos5.visible === true&& pos6.visible === true;

        $('#stage1').prop('disabled', !flag1);
        $('#stage2').prop('disabled', !flag2);
        $('#stage3').prop('disabled', !flag3);
        $('#stage4').prop('disabled', !flag4);



    }
});