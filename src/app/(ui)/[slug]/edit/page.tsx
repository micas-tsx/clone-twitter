import { Button } from "@/components/ui/button";
import { GeneralHeader } from "@/components/ui/general-header";
import { Input } from "@/components/ui/input";
import { TextArea } from "@/components/ui/textarea";
import { user } from "@/data/user";
import { faCamera, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Page() {
    return(
        <div>
            <GeneralHeader backHref="/">
                <div className="font-bold text-lg">Editar Perfil</div>
            </GeneralHeader>
            <section className="border-b-2 border-gray-900">
                <div 
                    className="flex justify-center items-center gap-4 bg-gray-500 h-28 bg-no-repeat bg-cover bg-center"
                    // biome-ignore lint/style/useTemplate: <explanation>
                    style={{ backgroundImage: 'url(' + user.cover + ')' }}
                >
                    <div className="cursor-pointer bg-black/80 flex justify-center items-center size-12 rounded-full">
                        <FontAwesomeIcon icon={faCamera} className="size-6" />
                    </div>

                    <div className="cursor-pointer bg-black/80 flex justify-center items-center size-12 rounded-full">
                        <FontAwesomeIcon icon={faXmark} className="size-6" />
                    </div>

                </div>

                <div className="-mt-12 px-6">
                    <img 
                        src={user.avatar}
                        alt={user.name}
                        className="size-24 rounded-full"
                    />
                    <div className="-mt-24 size-24 flex justify-center items-center">
                        <div className="cursor-pointer bg-black/80 flex justify-center items-center size-12 rounded-full">
                            <FontAwesomeIcon icon={faCamera} className="size-6" />
                        </div>
                    </div>
                </div>         
            </section>

            <section className="p-6 flex flex-col gap-4">
                {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
                <label>
                    <p className="text-lg text-gray-500 mb-2">Nome</p>
                    <Input 
                        placeholder="Digite seu nome"
                        value={user.name}
                    />
                </label>

                {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
                <label>
                    <p className="text-lg text-gray-500 mb-2">Bio</p>
                    <TextArea 
                        placeholder="Descreva você mesmo"
                        value={user.bio}
                        rows={4}
                    />
                </label>
                
                {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
                <label>
                    <p className="text-lg text-gray-500 mb-2">Link</p>
                    <Input 
                        placeholder="Digite seu link"
                        value={user.link}
                    />
                </label>

                <Button 
                    label="Salvar alteracões"
                    size={1}
                />
            </section>
        </div>
    )
}