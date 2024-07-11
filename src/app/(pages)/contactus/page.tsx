import { At, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { Title } from "@/components/Title/Title";
import { Button } from "@/components/Button/Button";
import { ContactForm } from "./ContactForm";
import { ReactNode } from "react";
import { getData } from "@/utils/datoCMS";

interface IStaticData {
    phone: string;
    email: string;
}

function formatPhoneNumber(phoneNumber: string): string {
    // Remove qualquer caractere que não seja número
    const cleaned = phoneNumber.replace(/\D/g, '');
  
    // Verifica se o número tem 10 ou 11 dígitos
    if (cleaned.length === 10) {
      // Formato para números com 10 dígitos (ex: (12) 3456-7890)
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 6)}-${cleaned.slice(6, 10)}`;
    } else if (cleaned.length === 11) {
      // Formato para números com 11 dígitos (ex: (12) 34567-8901)
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7, 11)}`;
    } else {
      throw new Error('Número de telefone inválido. Deve conter 10 ou 11 dígitos.');
    }
  }

const ContactCard = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex flex-wrap items-center justify-center space-x-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md w-[49%] min-w-72 sm:min-w-40">
            {children}
        </div>
    )
}
const ContactUs = async () => {
    const { static: data } = await getData<{ static: IStaticData }>(`
        query MyQuery {
            static {
                phone
                email
            }
        }
    `)
    return (
        <div className="p-8">
            <Title as="h1">Contato</Title>

            <Title as="h2" className="mb-8">Sinta-se à vontade para falar comigo</Title>

            <div className="space-y-8">

                <div className="flex flex-wrap gap-[2%] gap-y-2">
                    {/* Email */}
                    <ContactCard>
                        <At size={64} className="text-yellow-500  min-h-8 min-w-8 sm:min-h-16 sm:min-w-16" />
                        <div>
                            <p className="text-xl sm:text-2xl font-bold mb-2">E-mail</p>
                            <a href={`mailto:${data.email}`} target="_blank" className="text-gray-800 dark:text-white hover:text-yellow-500">{data.email}</a>
                        </div>
                    </ContactCard>


                    {/* WhatsApp */}
                    <ContactCard>
                        <WhatsappLogo size={64} className="text-yellow-500 min-h-8 min-w-8 sm:min-h-16 sm:min-w-16" />
                        <div>
                            <p className="text-xl sm:text-2xl font-bold mb-2">WhatsApp</p>
                            <a href={`https://wa.me/+55${data.phone}`} target="_blank" className="text-gray-800 dark:text-white hover:text-yellow-500 text-nowrap">{formatPhoneNumber(data.phone)}</a>
                        </div>
                    </ContactCard>
                </div>

                {/* Formulário */}
                <ContactForm />

                <Title as="h3">Obrigado pela paciência</Title>
            </div>
        </div>
    );
}

export default ContactUs;
