import React from 'react'
import styled from 'styled-components'

const StyleForm = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1%;
    width: 100%;
    label {
        margin: 5% 0;
        text-align-last: center;
        
    }
    .option{
            width: 75%;
            margin: 0 0 0 5%;
        }
    
    button{
        width: 45%;
        align-self: center;
        margin: 5% 0;
    }

`

function Form(props) {
    const { values, update, submit } = props

    const onChange = evt => {
        const { name, value } = evt.target
        update(name, value)
    }
    const onSubmit = evt => {
        evt.preventDefault();
        submit()
    }
    return (
        <form onSubmit={onSubmit}>
            <StyleForm>
                <h2>Add Member</h2>
                <label> Name:&nbsp;
                    {
                        <input
                        value={values.name}
                        onChange={onChange}
                        name='name'
                        placeholder='Type Name'
                        maxLength='30'
                        type='text'
                        />
                    }
                </label>
                <label>Email:&nbsp;
                    {
                        <input
                            value={values.email}
                            onChange={onChange}
                            name='email'
                            placeholder='enter email'
                            maxLength='30'
                            type='email'
                        />
                    }
                </label>
                <label>Role:&nbsp;
                    {
                        <select className='option' onChange={onChange} value={values.role} name='role'>
                            <option value=''>--Select a Role--</option>
                            <option value='student'>Student</option>
                            <option value='Team leader'>Team Leader</option>
                            <option value='section leader'>Section Leader</option>
                            <option value='instructor'>Instructor</option>
                        </select>
                    }
                </label>
                <button disabled={!values.name || !values.email || !values.role ? true : false}>Submit</button>
            </StyleForm>
        </form>
    )
}
export default Form;
  