import React from 'react'
import Form from '../Form/Form'
import Food from '../Food/Food'


const Days = (props) => {
    console.log('this is props', props)

    let displayDays = <h1>Loading...</h1>
    if (props.days[0]) {
        displayDays = props.days.map(days => {
            return (
                <>
                <h2>{days.date}</h2>
                <p>{days.food}</p>
                </>
            )
        })
    }
    
    
    return (
        <div className= "Days">
            {displayDays}
            <Form />
            <Food />
        </div>
    )
}

export default Days;