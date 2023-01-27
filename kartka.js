import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

// obrazki

loadSprite("kartka","choina.png")
loadSprite("gwiazda","gwiazda.png")
loadSprite("napis", "napis.png")
loadSound("muzyka", "helpppmeeee.mp3")


add([
    sprite("kartka"),
    pos(0,0)
])

const gwiazda = add([
    sprite("gwiazda"),
    pos(400,50)
])

onUpdate(()=>{

    if(gwiazda.pos.x>50)

    gwiazda.pos.x=gwiazda.pos.x-1

    else
    
    {
        destroy(gwiazda)

        add([
            sprite("napis"),
            pos(150,150)
        ])
    }
})

onKeyPress("space", ()=>{
    play("muzyka")
})
