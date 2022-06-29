import { DefaultUi, Player, Youtube } from "@vime/react";
import { gql, useQuery } from "@apollo/client";
import { CaretRight, DiscordLogo, FileArrowDown, Lightning, PictureInPicture } from "phosphor-react";

import '@vime/core/themes/default.css'
import { Footer } from "./Footer";


const GET_LESSON_BY_SLUG_QUERY = gql`
  query GetLessonBySlug($slug: String) {
    lesson(where: {slug: $slug}) {
      title
      videoId
      description
      teacher {
        bio
        avatarURL
        name
      }
    }
  }
`

interface GetLessonBySlugResponse {
  lesson: {
    title: string;
    videoId: string;
    description: string;
    teacher: {
      bio: string;
      avatarURL: string;
      name: string;
    }
  }
}

interface VideoProps {
  lessonSlug: string
}

export function Video(props: VideoProps) {
  const { data } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG_QUERY, {
    variables: {
      slug: props.lessonSlug
    }
  })

  if(!data) {
    return (
      <div className="flex-1">
        <p>Carregando...</p>
      </div>
    )
  }

  return (
      <div className="flex-1">
        <div className="bg-black flex justify-center">
          <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
            <Player>
              <Youtube videoId={data.lesson.videoId}/>
              <DefaultUi />
            </Player>
          </div>
        </div>

        <div className="p-8 max-w-[1100px] mx-auto ">
          <div className="flex flex-col md:flex-row items-start gap-16 ">
            <div className="flex-1">
              <h1 className="text-lg md:text-2xl font-bold">{data.lesson.title}</h1>
              <p className="text-sm md:text-base mt-4 text-gray-200 leading-relaxed">{data.lesson.description}</p>

              <div className="flex items-center gap-4 mt-6 ">
                <img 
                  className="h-16 w-16 rounded-full border-2 border-blue-500"
                  src={data.lesson.teacher.avatarURL}
                />

                <div className="leading-relaxed ">
                  <strong className="font-bold text-lg md:text-2xl block">{data.lesson.teacher.name}</strong>
                  <span className="text-gray-200 text-sm block">{data.lesson.teacher.bio}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 w-full md:w-fit ">
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

          <div className="gap-8 mt-8 grid md:grid-cols-2">
            <a href="" className="bg-gray-700 rounded overflow-hidden flex items-strech gap-2 md:gap-6 hover:bg-gray-600 transition-colors">
              <div className="bg-green-700 h-full p-6 flex items-center">
                <FileArrowDown size={40}/>
              </div>
              <div className="py-6 leading-relaxed">
                <strong className="text-lg md:text-1xl">Material complementar</strong>
                <p className="text-xs lg:text-sm text-gray-200 mt-2">Acesse o material complementar para acelerar seu desenvolvimento</p>
              </div>
              <div className="h-full p-6 flex items-center">
                <CaretRight size={24}/>
              </div>
            </a>

            <a href="" className="bg-gray-700 rounded overflow-hidden flex items-strech gap-2 md:gap-6 hover:bg-gray-600 transition-colors">
              <div className="bg-green-700 h-full p-6 flex items-center">
                <PictureInPicture size={40}/>
              </div>
              <div className="py-6 leading-relaxed">
                <strong className="text-lg md:text-1xl">Wallpapers exclusivos</strong>
                <p className="text-xs lg:text-sm text-gray-200 mt-2">Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina</p>
              </div>
              <div className="h-full p-6 flex items-center">
                <CaretRight size={24}/>
              </div>
            </a>
          </div>
        </div>
        <Footer/>
      </div>
  

  )
}