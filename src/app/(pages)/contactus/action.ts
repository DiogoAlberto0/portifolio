'use server'

import { createMessage } from "@/utils/datoCMS";

export interface IFormState {
    status: number | undefined;
    message: string | undefined;
}

function extractNumbers(phone: string): string {
    return phone.replace(/\D/g, '');
}

function isValidPhone(phone: string): boolean {
    const cleanedPhone = extractNumbers(phone);
    // Aqui, você pode ajustar a expressão regular para se adequar ao formato do telefone que deseja validar.
    const phoneRegex = /^[1-9]\d{9,14}$/; // Exemplo: número de telefone com 10 a 15 dígitos.
    return phoneRegex.test(cleanedPhone);
  }
  
export const handleSubmitMessage = async (prevState: IFormState, e: FormData): Promise<IFormState> => {

    const phone = e.get('phone')?.toString()
    const email = e.get('email')?.toString()
    const message = e.get('message')?.toString()




    if (!phone || !email || !message || !isValidPhone(phone)) return ({
        status: 400,
        message: 'Preencha todos os campos'
    })


    try {
        const response = await createMessage(email, extractNumbers(phone), message)

        if (!response.ok) {
            console.error(await response.json())
            return ({
                status: response.status,
                message: 'Falha ao enviar menssagem'
            })
        }
        return ({
            status: 200,
            message: 'Mensagem enviada com sucesso'
        })
    } catch (error: any) {
        return ({
            status: 500,
            message: error.message || 'Ocorreu um erro inesperado'
        })
    }
}