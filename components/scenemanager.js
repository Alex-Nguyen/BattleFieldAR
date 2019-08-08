
AFRAME.registerComponent('manager', {
    init: function () {
        let self = this;

        this.directionV3 = new THREE.Vector3();
        this.stage1Animation=false;
        this.stage1Handler = this.stage1Handler.bind(this);
        $( "#stage1" ).click(self.stage1Handler);


    },
    stage1Handler:function(){
        this.stage1Animation=true;
        let self = this;
        var el = document.createElement('a-entity');
        el.setAttribute('gltf-model','#man');
        let target = document.querySelector('#union')
        target.parentNode.removeChild(target);

        let scene = document.querySelector('a-scene');
        let pos1 = document.querySelector('#pos1').object3D;
        let pos2 =document.querySelector('#pos2').object3D.position;

        el.object3D.position.x = pos1.position.x;
        el.object3D.position.y = pos1.position.y;
        el.object3D.position.z = pos1.position.z;
        scene.appendChild(el);

        createjs.Tween.get(el.object3D.position).to(pos2, 3000).call(self.stage2Handler)


        },
    stage2Handler:function(){
        let scene = document.querySelector('a-scene');
        let pos2 =document.querySelector('#pos2').object3D.position;
        let pos3 =document.querySelector('#pos3').object3D.position;
        let pos4 =document.querySelector('#pos4').object3D.position;
        let pos5 =document.querySelector('#pos5').object3D.position;
        let el1 = document.createElement('a-entity');
        el1.setAttribute('gltf-model','#man');
        el1.object3D.position.x = pos2.position.x;
        el1.object3D.position.y = pos2.position.y;
        el1.object3D.position.z = pos2.position.z;
        scene.appendChild(el1);

        let el2 = document.createElement('a-entity');
        el2.setAttribute('gltf-model','#man');
        el2.object3D.position.x = pos2.position.x;
        el2.object3D.position.y = pos2.position.y;
        el2.object3D.position.z = pos2.position.z;
        scene.appendChild(el2);


        let el3 = document.createElement('a-entity');
        el3.setAttribute('gltf-model','#man');
        el3.object3D.position.x = pos2.position.x;
        el3.object3D.position.y = pos2.position.y;
        el3.object3D.position.z = pos2.position.z;
        scene.appendChild(el3);

        createjs.Tween.get(el1.object3D.position).to(pos3, 3000);
        createjs.Tween.get(el2.object3D.position).to(pos4, 3000);
        createjs.Tween.get(el3.object3D.position).to(pos5, 3000);




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
        let flag2 = pos2.visible === true && pos3.visible === true;
        let flag3 = pos2.visible === true;
        let flag4 = pos1.visible === true && pos2.visible === true&& pos3.visible === true&& pos4.visible === true&& pos5.visible === true&& pos6.visible === true;

        $('#stage1').prop('disabled', !flag1);
        $('#stage2').prop('disabled', !flag2);
        $('#stage3').prop('disabled', !flag3);
        $('#stage4').prop('disabled', !flag4);



    }
});