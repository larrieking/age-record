import {useState} from "react";
import classes from "./Userinput.module.css";

function Userinput(props) {
 const [email, setEmail] = useState({state:'', error :false});
 const [amount, setAmount] = useState({state:'', error :false});

 const submitHandler = (event) => {
     let errorState = false
  event.preventDefault()
  if(email.state.trim().length<1){
      setEmail({error: true, state: ''} )
      errorState = true;
  }
     if(amount.state.trim().length<1){
         setAmount({error: true, state: ''} )
         errorState = true
     }
     if (errorState)
         return
     const submittedForm = {
         email: email.state,
         amount: amount.state
     }
     console.log(submittedForm)
     props.onAdd(submittedForm)
     setEmail({error: false, state: ''} )
     setAmount({error: false, state: ''} )


}
const emailChangeListener = (event) => {

     if (event.target.value.trim().length < 1){

         setEmail({state: event.target.value, error: true})

     }
     setEmail({state: event.target.value, error: false})
}
const numberChangeHandler = (event) => {
    if (event.target.value.trim().length < 1){
        setAmount({state: event.target.value, error: true})
    }
    setAmount({state: event.target.value, error: false})
    console.log(amount)
}

    return (
        <div className={`container ${classes.container}`}>
            <div className={`card ${classes.card}`}>
                <form className={"g-3 needs-validation"}  onSubmit={submitHandler}>
                    <div className="mb-3 ">
                        <label htmlFor="exampleFormControlInput1" className={`form-label ${email.error && classes.error}`}>Email address</label>
                        <input value={email.state} onChange={emailChangeListener} type="email" className={`form-control ${email.error && classes.error}`} id="exampleFormControlInput1" placeholder="name@example.com"/>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className={`form-label ${amount.error && classes.error}`}>Amount</label>
                        <input value={amount.state} onChange={numberChangeHandler} type={"number"} className={`form-control ${amount.error && classes.error}`} id={"amount"} placeholder={"Enter an amount"}/>
                        <div className={"invalid-feedback"}>Pls enter valid amount</div>
                    </div>
                    <button className={"btn btn-sm btn-primary"}>Submit</button>
                </form>

            </div>

        </div>





    )
}

export default Userinput