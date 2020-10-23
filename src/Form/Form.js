import React from 'react'

const Form = () => {
    
    return(
        <div className="Form">
            <form>
                <input
                    type='text'
                    name='Date'
                    placeholder='Day(eg: Monday, etc..)'
                />
                <input
                    type='text'
                    name='Time'
                    placeholder='Time (eg: 2:00pm)'
                />
                <input
                    type='text'
                    name='Food Item'
                    placeholder='Food Item'
                />
                <input
                    type='number'
                    name='Calories'
                    placeholder='Calories'
                />
                <input
                    type='submit' 
                />
            </form>  
        </div>
    )
}

export default Form;