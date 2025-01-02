"use client"

import { useForm, SubmitHandler } from "react-hook-form"
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import { IoIosSend } from "react-icons/io";
import { postForm} from "@/lib/actions";
import {iFormData} from "@/lib/types";


export default function ContactForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<iFormData>();

    const onSubmit: SubmitHandler<iFormData> = (data) => postForm({ formData: data })

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-3">
            <Input {...register("name", { required: true })} placeholder="Name" className={`${errors.name && "outline-2 outline outline-red-500/40 outline-offset-2"}`} />

            <Input {...register("email", { required: true })} placeholder="Email" className={`${errors.email && "outline-2 outline outline-red-500/40 outline-offset-2"}`} />
            </div>
            <Textarea className={`${errors.message && "outline-2 outline outline-red-500/40 outline-offset-2"} mt-3`} {...register("message", { required: true })} placeholder="Message" />

            <Button className="mt-4" size="lg" type="submit"><div className="flex items-center gap-2"><p>Send</p><IoIosSend /></div></Button>
        </form>
    )
}