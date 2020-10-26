import React from 'react'

const Form = (props) => {
    const [formData, setFormData] = React.useState(props.food); 

    const handleSubmit = (e)=>{
        e.preventDefault();
        props.handleSubmit(formData);
        props.history.push('/')
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.day]: e.target.value})
    }

    return(
        <div className="Form">
            <form onSubmit={handleSubmit}>
                <input
                    type='Date'
                    name='Date'
                    value={formData.date}
                    onChange={handleChange}
                    placeholder='Date'
                />
                <input
                    type='text'
                    name='Day'
                    value={formData.day}
                    onChange={handleChange}
                    placeholder='Day(eg: Monday, etc..)'
                />
                <input
                    type='text'
                    name='Time'
                    value={formData.time}
                    onChange={handleChange}
                    placeholder='Time (eg: 2:00pm)'
                />
                <input
                    type='text'
                    name='Food Item'
                    value={formData.foodItem}
                    onChange={handleChange}
                    placeholder='Food Item'
                />
                <input
                    type='number'
                    name='Calories'
                    value={formData.calories}
                    onChange={handleChange}
                    placeholder='Calories'
                />
                <input
                    type='submit' 
                    value={props.label}
                />
            </form>  
        </div>
    )
}

export default Form;