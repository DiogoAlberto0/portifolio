'use client'

import { useFormState } from "react-dom"
import { handleSubmitMessage, IFormState } from "./action"

import { Button } from "@/components/Button/Button"
import { Flag } from "@/components/Flag/Flag"


const inicialState: IFormState = {
    status: undefined,
    message: undefined
}
export const ContactForm = () => {

    const [state, action] = useFormState(handleSubmitMessage, inicialState)

    const inputStyle = 'w-full px-4 py-2 rounded-lg bg-gray-400 placeholder:text-black text-black border-gray-300 focus:border-yellow-500 focus:ring focus:ring-yellow-500 focus:ring-opacity-50'
    const labelStyle = 'block text-xl font-semibold mb-2'

    return (
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Envie uma mensagem</h3>
            <form action={action}>
                <div className="mb-4">
                    <label htmlFor="phone" className={labelStyle}>Seu telefone:</label>
                    <input
                        type="phone"
                        id="phone"
                        name="phone"
                        className={inputStyle}
                        placeholder="Digite seu telefone"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className={labelStyle}>Seu E-mail:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className={inputStyle}
                        placeholder="Digite seu e-mail"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className={labelStyle}>Mensagem:</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className={inputStyle}
                        placeholder="Digite sua mensagem"
                        required
                    />
                </div>
                <div className="flex flex-col gap-2">
                    {state.message && <Flag className={`w-full ${state.status == 200 ? 'bg-green-500' : 'bg-red-500'}`}>{state.message}</Flag>}
                    <Button>Enviar Mensagem</Button>
                </div>
            </form>
        </div>
    )
}