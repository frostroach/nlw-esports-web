import React from "react";
import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

type NotFoundDuoProps = {};

const NotFoundDuo: React.FC<NotFoundDuoProps> = () => {
  return (
    <div className="pt-1 bg-nlw-duo-gradient self-stretch rounded-lg mt-8">
      <div className="bg-[#2a2634] px-8 py-6 self-stretch  rounded-b-lg justify-between flex items-center">
        <div>
          <strong className="text-white font-black block text-2xl">
            Não encontrou seu duo?
          </strong>
          <span className="text-zinc-400 block">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>

        <Dialog.Trigger
          className="bg-violet-500 rounded-lg text-white px-4 py-4 hover:bg-violet-700 
          transition-all flex items-center gap-3"
        >
          <MagnifyingGlassPlus size={18} />
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  );
};

export default NotFoundDuo;
