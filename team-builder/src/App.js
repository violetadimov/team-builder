import React, { useState } from 'react';
import './App.css';
import Form from './Form'
import styled from 'styled-components'


const StyleMemberList = styled.div`
    /* width: 90%; */
    background-color: ${props => props.theme.secondaryColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${props => props.color || props.theme.primaryColor};
    margin: ${props => props.theme.margins.small};
    font-size: '1em';
    border-radius: 20px;
`
const StyleMember = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: seashell;
    border-radius: 5px;
    margin: 2%;
    h3{
      font-size: '1.3em';
    }
`

const initMemberList = {
  name:"violeta",
  email: "violeta@dimov.com",
  role: "student"
}
const initFormValues = {
  name:"",
  email: "",
  role: ""
}
// const fakeAxiosGet = () => {
//   return Promise.resolve({ status: 200, success: true, data: initMemberList })
// }
// const fakeAxiosPost = (url, { username, email, role }) => {
//   const newFriend = { username, email, role }
//   return Promise.resolve({ status: 200, success: true, data: newFriend })
// }
function App() {

  const [members, setMembers] = useState([])
  const [formValues, setFormValues] = useState(initFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]:inputValue})
  }

  const submitForm = () => {
    setMembers([...members, formValues])
    setFormValues(initFormValues)
    // const member = {
    //   name: formValues.name.trim(),
    //   email: formValues.email.trim(),
    //   role: formValues.role,
    // }
    // if(!member.name || !member.email) return
    //   fakeAxiosPost('fakeapi.com', member)
    //   .then(res => {
    //     debugger
    //     setMembers([...members, res.data])
    //   })
    //   .catch(err => {
    //     debugger
    //   })
    //   .finally(() => {
    //     setFormValues(initFormValues)
    //   })
  }


  // useEffect(() => {
  //   fakeAxiosGet('fakeapi.com')
  //   .then(res => setMembers(res.data))
  // }, [])
  
  return (
    <StyleMemberList className="App">
      <h1>Member List</h1>
      <Form
      values={formValues}
      update={updateForm}
      submit={submitForm}
      />
      
      {
        // <div className='member' >
        //   <h2>{members.name}</h2>
        //   <p>Email: {members.email}</p>
        //   <p>Role: {members.role}</p>
        // </div>
        members.map((member, index) => {
          return (
            //<Member key={index} details={member}/>
            <StyleMember className='member' key={index}>
              <h3>{member.name}</h3>
              <p>Email: {member.email}</p>
              <p>Role: {member.role}</p>
            </StyleMember>
          )
        })
      }
    </StyleMemberList>
  );
}

export default App;
