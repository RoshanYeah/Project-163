AFRAME.registerComponent("wall",{
  schema:{
    height:{type:'number',default:3},
    width:{type:'number',default:7},
  },
  init:function(){
    this.createBoxes()
  },
  createBoxes:function(){
    for(i=0;i<=10;i++){
      var boxEl = document.createElement("a-entity")

      boxEl.setAttribute("id","boxEl"+i)

      var posX = Math.random()*30-10
      var posY = 1.5
      var posZ = Math.random()*-10-5
      var ranY = Math.random()*-45+45
      boxEl.setAttribute("position",{x:posX,y:posY,z:posZ})

      boxEl.setAttribute("rotation",{x:0,y:ranY,z:0})

      boxEl.setAttribute("material",{
        src:"./images/wall.png"
      })

      boxEl.setAttribute("geometry",{
        primitive:"plane",
        height:this.data.height,
        width:this.data.width
      })
      boxEl.setAttribute("static-body",{})
      var scene = document.querySelector("#scene")

      scene.appendChild(boxEl)
    }
  }
})