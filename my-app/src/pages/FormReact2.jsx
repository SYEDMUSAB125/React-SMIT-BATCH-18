import React, { useState } from 'react'
import "../App.css"
import Swal from 'sweetalert2'

function FormReact2() {
    const [formData, setForm] = useState({
        email: "",
        password: ""
    })
    const [err, setError] = useState(null)
    const [data, setData] = useState(null)

    //  const city1 = ["karachi", "islamabad"]
    //  const city2 = city1 wrong
    //  const city2 = [...city1, "lahore"]
    //  city2 = ["karachi", "islamabad"]
    // city2.push("lahore ")
    //  city2 = ["karachi", "islamabad" , "lahore"]
    // city1 = [["karachi", "islamabad" , "lahore"]]

    const handleSubmit = (e) => {
        e.preventDefault()

        if (formData.email.trim() == "") {
            setError("email must use @ ")

        } else if (formData.password.length < 5) {
            setError("minimum 5 numbers required")

        } else {
            Swal.fire({
                title: "Form Submitted",
                text: "Your response is submitted",
                icon: "success"
            })
            const storeValue  = JSON.stringify(formData)
            localStorage.setItem("userData",storeValue )
           const getVlaue =  localStorage.getItem("userData")
         const parseValue =   JSON.parse(getVlaue)
         setData(parseValue)
        }


    }


    const handleChange = (e) => {

        const { name, value } = e.target
        setForm({
            ...formData,
            [name]: value

        }

        )

        // const value  = e.target.value
        // console.log(e.target.name)


    }
    return (
        <div className='main' >
            <h1>Hello Validating Class</h1>
            <form onSubmit={(e) => handleSubmit(e)} >
                <label htmlFor="email">Email</label>
                <br />
                <input type="email" name="email" id="email" placeholder='Enter your Email' onChange={handleChange} />
                <br />
                <label htmlFor="pass">Password</label >
                <br />
                <input type="password" name="password" id="pass" placeholder='Enter Your Password' onChange={handleChange} />
                <br />
                <button>Submit</button>
            </form>
          {
            data ? <h2>Welcome : {data.email}</h2> : "data is not found"
          }
        </div>
    )
}

export default FormReact2
