import { CaretRight, DiscordLogo, FileArrowDown, Lightning, PictureInPicture } from "phosphor-react";

export function Video() {
  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video"></div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Aula 01 - Abertura</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis earum aliquid, possimus sequi et nam vero quod eum aperiam non hic doloribus cum velit necessitatibus dolores? Nobis incidunt ullam nulla!</p>

            <div className="flex items-center gap-4 mt-6">
              <img 
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src="https://github.com/Wallysson.png"
              />

              <div className="leading-relaxed">
                <strong className="font-bold text-1xl block">Wallysson Lima</strong>
                <span className="text-gray-200 text-sm block">CTO at CEL Consultoria</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a href="#" className="bg-green-500 p-4 text-[0.875rem] flex items-center rounded uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
              <DiscordLogo size={24}/>
              Comunidade do Discord
            </a>

            <a href="#" className="border border-blue-500 p-4 text-[0.875rem] text-blue-500 flex items-center rounded uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
              <Lightning size={24}/>
              Acesse o desafio
            </a>
          </div>
        </div>

        <div className="gap-8 mt-8 grid grid-cols-2">
          <a href="" className="bg-gray-700 rounded overflow-hidden flex items-strech gap-6 hover:bg-gray-600 transition-colors">
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40}/>
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-1xl">Material complementar</strong>
              <p className="text-sm text-gray-200 mt-2">Acesse o material complementar para acelerar seu desenvolvimento</p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24}/>
            </div>
          </a>

          <a href="" className="bg-gray-700 rounded overflow-hidden flex items-strech gap-6 hover:bg-gray-600 transition-colors">
            <div className="bg-green-700 h-full p-6 flex items-center">
              <PictureInPicture size={40}/>
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-1xl">Wallpapers exclusivos</strong>
              <p className="text-sm text-gray-200 mt-2">Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina</p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24}/>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}