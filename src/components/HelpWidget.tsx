import { useState } from "react"

export const HelpWidget = () => {
    const [isDisplayed, setIsDisplayed] = useState(false);

    return isDisplayed ? <div className="fixed bottom-10 right-10 h-96 w-52  bg-white text-blue p-8 ">
        <button onClick={() => setIsDisplayed(false)}>X</button>
    </div> : (<button onClick={() => setIsDisplayed(true)}
        className="fixed bottom-10 right-10 bg-blue-400 text-white p-2 px-3 hover:bg-blue-500"
    >Speak to Support Team(Real Person)</button>)
}