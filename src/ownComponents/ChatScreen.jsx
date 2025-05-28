import React from 'react'
import BackgroundImage from '../assets/background1@2x.png';
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Video, Phone, MessageSquareMore, House, Heart , Settings, LogOut } from 'lucide-react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Link } from 'react-router';




const ChatScreen = ({ checked, onChange }) => {



    




    return (
        <div className='flex items-center justify-center h-screen w-full relative z-10'>
            <div className='bg-muted-foreground h-screen w-[1440px] flex flex-row gap-1'>
                <div className='bg-background w-[4%] h-full flex flex-col items-center justify-between py-8'>
                    <MessageSquareMore className="size-6 justify-items-end-safe" color={checked ? "white" : "black"} />

                    <div className='flex flex-col gap-9 items-center justify-center'>
                        <Link to='/'>
                            <House color={checked ? "white" : "black"} className='hover:shadow-md hover:-translate-y-[2px] transition-transform duration-300 ease-in-out transform rounded-sm'  />
                        </Link>

                        <Heart  color={checked ? "#c90d0d" : "black"} className='hover:shadow-md hover:-translate-y-[2px] transition-transform duration-300 ease-in-out transform rounded-sm' />

                        <Dialog>
                            <DialogTrigger>
                                <Settings color={checked ? "white" : "black"} className=' hover:shadow-md hover:-translate-y-[2px] transition-transform duration-300 ease-in-out transform rounded-sm' />
                            </DialogTrigger>
                            <DialogContent className={`${checked ? "bg-primary text-secondary" : "sm:max-w-[425px]"}`}>
                                <DialogHeader className={`${checked ? "bg-primary text-secondary" : ""} grid gap-4 py-4  `}>
                                    <DialogTitle>Edit profile</DialogTitle>
                                    <DialogDescription>
                                        Make changes to your profile here. Click save when you're done.
                                    </DialogDescription>
                                </DialogHeader>
                                <div className={`${checked ? "bg-primary text-secondary" : ""} grid gap-4 py-4 sm:max-w-[425px] `}>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="name" className="text-right">
                                            Name
                                        </Label>
                                        <Input id="name" placeholder="Pedro Duarte" className="col-span-3" />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="email" className="text-right">
                                            Email
                                        </Label>
                                        <Input id="email" placeholder="@peduarte" className="col-span-3" />
                                    </div>
                                </div>
                                <DialogFooter>
                                    <Button
                                        type="submit"
                                        className={`${checked ? "bg-background text-primary " : ""} hover:bg-destructive`}
                                    >
                                        Save changes
                                    </Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>


                        <LogOut color={checked ? "#c90d0d" : "black"} className='rounded-sm hover:shadow-md hover:-translate-y-[2px] transition-transform duration-300 ease-in-out transform' />


                    </div>

                    <div className='flex flex-col justify-items-end items-center gap-8 mt-4 prevent-select'>
                        <DarkModeSwitch
                            size={25}
                            checked={checked}
                            onChange={onChange}
                            className='hover:shadow-md hover:-translate-y-[2px] transition-transform duration-300 ease-in-out transform rounded-sm'
                        />

                        <Avatar className='hover:shadow-md hover:-translate-y-[2px] transition-transform duration-300 ease-in-out transform rounded-xl'>
                            <AvatarImage src="https://github.com/shadcn.png"  />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                </div>

                <div
                    className='w-[60%] flex-[60%] h-full bg-contain flex flex-row dark:brightness-[0.7] dark:grayscale'
                    style={{ backgroundImage: `url(${BackgroundImage})` }}
                >
                    <div className='relative h-full w-[25%] flex flex-col'>
                        <div className='bg-background h-[92px] w-full flex items-center justify-center'>
                            <Input placeholder='Search . . . .' className='prevent-select w-[93%] h-[53%] bg-[#38292A] rounded-2xl text-white' />
                        </div>

                        <div className='bg-background h-full w-full flex flex-col justify-center items-center gap-2 font-bold p-2'>
                            <h3 className='text-primary text-center text-xl prevent-select'>Message</h3>

                            <div className='mt-4 max-h-[80vh] w-full flex flex-col gap-6 overflow-x-auto scrollRemover'>
                                {[...Array(9)].map((_, i) => (
                                    <div className="flex items-center space-x-4" key={i}>
                                        <Skeleton className="h-12 w-12 rounded-full" />
                                        <div className="space-y-2">
                                            <Skeleton className="h-4 w-[250px]" />
                                            <Skeleton className="h-4 w-[200px]" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className='w-[75%] h-full flex flex-col'>
                        <div className='w-full bg-background h-[96px] flex items-center justify-between px-4'>
                            <div className='flex items-center gap-2 w-[60%] prevent-select'>
                                <Avatar className='h-16 w-16'>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <h2 className='text-primary text-[20px] font-int font-medium'>HarshVardhan pipariya</h2>
                            </div>

                            <div className='flex items-center justify-around h-[2.4rem] w-[8rem] mx-4 bg-red-800 rounded-full'>
                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <div className='flex items-center justify-center h-[2.4rem] w-[4rem] rounded-full hover:bg-black'>
                                            <Video color='white' />
                                        </div>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent className={checked ? "bg-primary text-secondary" : ""}>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Are you sure you want to video call?</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                If you press continue a request for video call to the other person..
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel className={checked ? "text-muted-foreground" : ""}>Cancel</AlertDialogCancel>
                                            <AlertDialogAction className={checked ? "bg-muted-foreground hover:bg-destructive" : ""}>Continue</AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>

                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <div className='flex items-center justify-center h-[2.4rem] w-[4rem] rounded-full hover:bg-black'>
                                            <Phone color='white' />
                                        </div>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent className={checked ? "bg-primary text-secondary" : ""}>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Are you sure you want to voice call?</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                If you press continue a request for voice call to the other person..
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel className={checked ? "text-muted-foreground" : ""}>Cancel</AlertDialogCancel>
                                            <AlertDialogAction className={checked ? "bg-muted-foreground hover:bg-destructive" : ""}>Continue</AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </div>
                        </div>

                        <div>
                            {/* Chat content goes here */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatScreen