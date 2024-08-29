import { useState } from "react";
import Title from "./Title";


function Esignature() {

    const [date, setDate] = useState("")
    const [text, setText] = useState("")

    function handleDateInput(params) {
        setDate(params.target.value)

    }

    function handleTextInput(params) {
        setText(params.target.value)

    }

    return (

        <>
        <Title text={text} />
        <Title text={date} />

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam obcaecati, labore eveniet dignissimos odit nulla sapiente porro nemo quibusdam! Sit.</p>

        <input type="date" value={date} onChange={handleDateInput} />
        <input type="text" value={text} onChange={handleTextInput} />

        </>
    )
}

export default Esignature;