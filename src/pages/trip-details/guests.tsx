import { CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";

export function Guests() {
    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Convidados</h2>

            <div className="space-y-5">
                <div className="flex items-center justify-between gap-4 ">
                    <div className="space-y-1.5">
                        <span className="block fonte-medium">Letícia</span>
                        <span className="block text-sm text-zinc-400 truncate">
                            leticia@gmail.com
                        </span>
                    </div>
                    <CircleDashed className="text-zinc-400 size-5 shrink-0" />
                </div>
                <div className="flex items-center justify-between gap-4 ">
                    <div className="space-y-1.5">
                        <span className="block fonte-medium">Matheus</span>
                        <span className="block text-sm text-zinc-400 truncate">
                            matheus@gmail.com
                        </span>
                    </div>
                    <CircleDashed className="text-zinc-400 size-5 shrink-0" />
                </div>
            </div>

            <Button variant="secondary">
                <UserCog className='size-5' />
                Gerenciar convidados
            </Button>
        </div>
    )
}