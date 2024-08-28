import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Slide, MistakeBox } from "../../components";

export default function ContactMeSlide() {

    const [ mistakes, setMistakes ] = useState([]);
    const { register, handleSubmit, reset } = useForm();
    
    // User submits the form
    const onSubmit = (data) => {
        if(Object.values(data).some(field => !field)) { // If any of the values in data is empty
            addMistake("Please, fill out every box in the form.")
        } else {
            addMistake("Thank you!");
            reset();
        }
    }

    // Adds a mistake to a list
    const addMistake = (message) => {
        setMistakes(prev => {
            const updatedMistakes = [...prev, {id: Date.now(), message}];

            if(updatedMistakes.length > 4) {
                updatedMistakes.shift();
            }

            return updatedMistakes;
        })
    }

    // Removes a mistake from the mistake list
    const removeMistake = (id) => {
        setMistakes(prev => prev.filter(mistake => mistake.id !== id))
    }

    return(
        <Slide title="Contact Me" className="">
            
            {
                mistakes.map(mistake => {
                    return <MistakeBox key={mistake.id} message={mistake.message} remove={ () => removeMistake(mistake.id) } />
                })
            }

            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Name: </label>
                <input id="name" name="name" type="text" {
                    ...register("name", {})} autoComplete="name" />
                <label htmlFor="email">Email: </label>
                <input id="email" name="email" {
                    ...register("email", {
                    })
                } autocomplete="an-email@example.com"/>
                <label htmlFor="message" >Message: </label>
                <textarea id="message" name="message" {
                    ...register("message", {
                    })
                } autoComplete="Hello!"/>
                <input type="submit" className="border border-black p-3 rounded-xl" />
            </form>
        </Slide>
    );
}