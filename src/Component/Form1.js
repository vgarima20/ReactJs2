import React, { useState } from  "react";
function Form(){
    const [userregistratioon , setuserregistration] = useState({
        username :"",
        email:"",
        Phone:"",
        Password:""
    });
    const [records ,setrecords]=useState([]);
    const handleInput = (e)=>{
            const name = e.target.name;
            const value =e.target.value;
            console.log(name ,value)
            setuserregistration({...userregistratioon,[name]:value})
    }
    const formsubmit =(e)=>{
            e.preventDefault();
            const newRecord = {...userregistratioon, id : new Date().getTime().toString()}
            console.log(records)
            setrecords([...records,newRecord])
            console.log(records)
            setuserregistration({ username :"",
            email:"",
            Phone:"",
            Password:""});
    }
    return(
        <>
            
            <form action ="" onSubmit ={formsubmit}>
                <h2>Register here</h2>
                <div>
                    <label htmlFor ="username">Username</label>
                    <input type ="text" id ="username" autoComplete ="off"
                    value ={userregistratioon.username}
                    onChange = {handleInput}
                    name ="username"></input>
                </div>
                <div>
                    <label htmlFor ="email">email</label>
                    <input type ="text" id ="email" autoComplete ="off"
                    value ={userregistratioon.email}
                    onChange = {handleInput}
                    name ="email"></input>
                </div>
                <div>
                    <label htmlFor ="Phone">Phone</label>
                    <input type ="text" id ="Phone" autoComplete ="off" 
                    value ={userregistratioon.Phone}
                    onChange = {handleInput}
                    name ="Phone"></input>
                </div>
                <div>
                    <label htmlFor ="Password">Password</label>
                    <input type ="password" id ="Password" autoComplete ="off" 
                    value ={userregistratioon.Password}
                    onChange = {handleInput}
                    name ="Password"></input>
                </div>
                <button  type ="submit">Submit</button>
            </form>
            <div>
                {
                    records.map((curElem)=>{
                        return(
                            <div className ="showDataStyle" key ={curElem.id}>
                                <p>{curElem.username}</p>
                                <p>{curElem.email}</p>
                                <p>{curElem.Phone}</p>
                                <p>{curElem.Password}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Form;