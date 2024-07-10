import { At, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { Title } from "@/components/Title/Title";
import { Button } from "@/components/Button/Button";
import { ContactForm } from "./ContactForm";

const ContactUs = async () => {
    return (
        <div className="">
            <Title>Contato</Title>

            <h2 className="text-4xl font-extrabold mb-6">Sinta-se à vontade para falar comigo</h2>

            <div className="space-y-8">

                <div className="flex flex-wrap gap-[2%] gap-y-2">
                    {/* Email */}
                    <div className="flex items-center justify-center space-x-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md w-[49%] min-w-80">
                        <At size={64} className="text-yellow-500" />
                        <div>
                            <p className="text-2xl font-bold mb-2">E-mail</p>
                            <a href="mailto:dafgo03@gmail.com" target="_blank" className="text-gray-800 dark:text-white hover:text-yellow-500">dafgo03@gmail.com</a>
                        </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex items-center justify-center space-x-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md w-[49%] min-w-80">
                        <WhatsappLogo size={64} className="text-yellow-500" />
                        <div>
                            <p className="text-2xl font-bold mb-2">WhatsApp</p>
                            <a href="https://wa.me/+5561986548270" target="_blank" className="text-gray-800 dark:text-white hover:text-yellow-500 text-nowrap">(61) 98654-8270</a>
                        </div>
                    </div>
                </div>

                {/* Formulário */}
                <ContactForm />
                <h3 className="text-3xl font-bold">Obrigado pela paciência</h3>
            </div>
        </div>
    );
}

export default ContactUs;
