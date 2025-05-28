import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import GoogleImage from "../assets/google-icon-logo-svgrepo-com.svg";
import { Link } from "react-router"

export function LoginForm({
  className,
  ...props
}) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-primary text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email"className=' text-primary'>Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" className='border placeholder:text-primary' required />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password" className=' text-primary'>Password</Label>
            <a href="#" className="ml-auto text-sm underline-offset-4 hover:underline text-muted-foreground">
              Forgot your password?
            </a>
          </div>
          <Input id="password" type="password" placeholder="**********" required  className='border placeholder:text-primary'/>
        </div>
        <Button type="submit" className="w-full text-secondary">
          Login
        </Button>
        <div
          className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            Or continue with
          </span>
        </div>
        <Button variant="outline" className="w-full text-primary">
          <img src={GoogleImage} alt="GOogleImage" srcset="" className="h-full m-1 " />
          Login with Google
        </Button>
      </div>
      <div className="text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        < Link to="/signup" className="underline underline-offset-4 font-semibold text-primary">
          Sign up
        </Link>
      </div>
    </form>
  );
}
