import React from 'react'
import SignUpForm from "@/components/signUp-form";
import {MessageSquareMore } from "lucide-react";
import LoginImage from "../assets/login_Image.png";


function SignUpPage() {

  return (
     <div className=" root1 grid min-h-svh lg:grid-cols-2 bg-background relative z-100">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start text-lg">
          <a href="#" className=" flex items-center gap-2 font-medium">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <MessageSquareMore className="size-6" />
            </div>
            <span className='text-primary'>Vartalab</span> 
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignUpForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src={LoginImage}
          alt="Image"
          className="bg-accent-foreground absolute inset-0 h-full w-full object-cover dark:brightness-[0.7] dark:grayscale"
        />
      </div>
    </div>
  )
}

export default SignUpPage;
