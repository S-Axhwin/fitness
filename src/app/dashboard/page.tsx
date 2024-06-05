"use client"
import { Button } from "@/components/ui/button";
import { UserAuth } from "../context/UserAuth"
import action from "./action";
import Image from "next/image";

const page = () => {
  const { logOut, user } = UserAuth();
  console.log(user);
  if(!user) action()
  return (
    <div className="grid place-items-center w-full h-screen">
        <div className="flex-col justify-center">
            <img src={user.photoURL} alt="" className="rounded-full h-10 w-10"/>
            <div>{user.displayName}</div>
            <Button
              variant={"destructive"}
              onClick={() => logOut()}
              >
                logout
            </Button>
        </div>
    </div>
  )
}

export default page