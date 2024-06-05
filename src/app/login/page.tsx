"use server"
import CardWithForm from "./CardWithForm"

const page = () => {
  return (
    <div className="w-full h-screen grid place-items-center">
      <CardWithForm/>
    </div>
  )
}

export default page