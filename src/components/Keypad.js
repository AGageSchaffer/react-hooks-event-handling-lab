// Code Keypad Component Here

function keypadReact(event){
    console.log("Entering password...")
}

function Keypad (){
    return (
        <div>
            <input type="password" onChange={keypadReact} />
        </div>
    )
}

export default Keypad;