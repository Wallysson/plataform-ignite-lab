import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscriber ($name: String!, $email: String!) {
    createSubscriber(data: {name: $name, email: $email}) {
      id
    }
  }
`

import codePrint from '../assets/code.png'

export function Subscribe() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [createSubscriber, { loading }] = useMutation(CREATE_SUBSCRIBER_MUTATION)

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email
      }
    })

    navigate('/event')
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center p-4 overflow-hidden">
      <div className="w-full max-w-[1100px] flex flex-col lg:flex-row items-center justify-between mt-10 lg:mt-20 mx-auto">
        <div className="max-w-[640px] flex flex-col items-center lg:block">
          <Logo />
          <h1 className="mt-8 text-3xl lg:text-[2.5rem] leading-tight text-center lg:text-start">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed text-center lg:text-start">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

        <div className="border bg-gray-700 border-gray-500 p-8 rounded mt-8 lg:mt-0 w-screen sm:w-[70%] md:w-[50%] lg:w-fit">
          <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full ">
            <input
              className="bg-gray-900 rounded px-5 h-14" 
              type="text" 
              placeholder="Seu nome completo aqui"
              onChange={event => setName(event.target.value)}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14" 
              type="email"
              placeholder="Digite seu email"
              onChange={event => setEmail(event.target.value)}
            />

            <button 
              className="mt-4 bg-green-500 uppercase py-4 font-bold rounded text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
              type="submit"
              disabled={loading}
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <img 
        className='mt-4 lg:mt-0'
        src={codePrint} alt="Imagem Código" 
      />
    </div>
  )
}