"use server"
import { redirect } from "next/navigation"

const action = () => {
  redirect("/dashboard")
}

export default action