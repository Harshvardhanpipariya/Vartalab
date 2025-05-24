import React from 'react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import GoogleImage from "../assets/google-icon-logo-svgrepo-com.svg";

const SignUpForm = (className, ...props) => {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
         <div className="flex flex-col items-center gap-2 text-center">
           <h1 className="text-2xl font-bold">SignUp to your account</h1>
           <p className="text-muted-foreground text-sm text-balance">
             Enter your email below to SignUp to your account
           </p>
         </div>
         <div className="grid gap-6 texz">


           <div className="grid gap-3">
             <Label htmlFor="email">Email</Label>
             <Input id="email" type="email" placeholder="m@example.com" required  />
           </div>

            <div className="grid gap-3">
               <Label htmlFor="Name">Name</Label>
             <Input id="Name" type="text" placeholder="Name" required />
           </div>


           <div className="grid gap-3">
               <Label htmlFor="password">Password</Label>
             <Input id="password" type="password" placeholder="Password" required />
           </div>


           <Button type="submit" className="w-full">
             Sign Up
           </Button>
          
          
         </div>
         <div className="text-center text-sm">
         Have an account?{" "}
           <a href="#" className="underline underline-offset-4">
             Log in
           </a>
         </div>
       </form>
 )
}

export default SignUpForm