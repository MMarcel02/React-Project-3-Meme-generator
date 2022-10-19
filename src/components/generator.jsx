import React from "react";

export default function Generator () {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState()

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(data => setAllMemeImages(data.data.memes))
    }, [])

    function getMemeImage () {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        setMeme(function (prevMeme) {
            return {
                ...meme,
                randomImage: url
            }
        })
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...meme, 
            [name]: value
        }))
    }
    
    return (
        <main>
            <div className="form">
                <div className="inputs">
                    <input 
                        type="text" 
                        placeholder="Top text"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    <input 
                        type="text" 
                        placeholder="Bottom text" 
                        className="bottom"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <button onClick={getMemeImage}>Get a new meme image</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top--text">{meme.topText}</h2>
                <h2 className="meme--text bottom--text">{meme.bottomText}</h2>
            </div>
        </main>
    )
}