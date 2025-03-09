"use client"
import React, {useEffect, useState} from "react";
import SignUp from "./signUp";
import SignIn from "./signIn";
import ForgotPassword from "./forgotPassword";
import DescriptionAlerts from "@/app/components/utility/alert";
import { useRouter } from 'next/navigation';


function LoginRoute() {

  const [type, setType] = useState("signIn");
  const [alertType, setAlertType] = useState('')
  const [message, setMessage] = useState('')
  const [openAlert, setOpenAlert] = useState(false)

  const router = useRouter();


  const  handleAlert = (alertType, message) =>{
    setAlertType(alertType)
    setMessage(message)
    setOpenAlert(true)
  }

  useEffect(() => {
     setTimeout(() => setOpenAlert(false), 5000);
  }, [setType]);


  return (
    <div>
      {/* --- Alert Notification --- */}
      {/*{openEmailVerify?<p>{message}</p>:null}*/}
      {openAlert? <DescriptionAlerts alertType={alertType} message={message} setOpenAlert={setOpenAlert}/> :null}
        {type === 'signIn'?
            <SignIn setType={setType} alert={handleAlert}/>
            :
            type === 'signUp'?
                <SignUp setType={setType} alert={handleAlert}/>
            :
            type === 'forgotPassword'?
                <ForgotPassword setType={setType} alert={handleAlert} router={useRouter()}/>
            :
              null
        }
    </div>
  );
}
export default LoginRoute;