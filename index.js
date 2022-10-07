// https://www.youtube.com/watch?v=4q2vvZn5aoo
// 27:34

const canvas = document.querySelector('canvas') //henter canvas fra HTML

const c = canvas.getContext('2d')

canvas.width = window.innerWidth // setter canvas størrelsen, må ikke skrive window men er klarere
canvas.height = window.innerHeight

console.log(c)

const gravity = 0.5


class Player { //standard med stor bokstav for klasse
 constructor(){
   this.position = {
     x: 100,
     y: 100
   }

   this.velocity = {
     x: 0,
     y: 0 // gjør at spilleren går ned
   }
   this.width = 30
   this.height = 30
 }

 draw(){
   c.fillStyle = 'pink' //setter farge på figuren
   c.fillRect(this.position.x,this.position.y, this.width, this.height)
 }

update(){
  this.draw()
  this.position.x += this.velocity.x
  this.position.y += this.velocity.y

  if (this.position.y +this.height +this.velocity.y <= canvas.height) this.velocity.y += gravity
  else this.velocity.y = 0

  //if (this.position.x +this.width +this.velocity.x <= canvas.width) this.velocity.y += gravity
  //else this.velocity.x = 0 legger man til denne synker den til bakken
}

}

const player = new Player()


function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)
  player.update()
}

animate()

// key kode space 32 < 37 > 39

window.addEventListener('keydown', ({ keyCode }) => { // keydown gjelder alle keys
  //console.log(keyCode) finner keycode
  switch (keyCode){
    case 37:
    console.log('left')
    player.velocity.x -= 5
    break

    case 39:
    console.log('rigth')
    player.velocity.x += 5
    break

    case 32:
    console.log('up')
    player.velocity.y -= 20
    break
  }
})

window.addEventListener('keyup', ({ keyCode }) => { // keydown gjelder alle keys
  //console.log(keyCode) finner keycode
  switch (keyCode){
    case 37:
    console.log('left')
    player.velocity.x -= 0
    break

    case 39:
    console.log('rigth')
    player.velocity.x += 0
    break

    case 32:
    console.log('up')
    player.velocity.y -= 0
    break
  }
})
