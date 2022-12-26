/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.svg";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portfólio - Anthony Sá</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/portfolio.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Seja bem-vindo!</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://drive.google.com/file/d/1Ui2fQxsI46R3d4ljV95_fYyRPhi1Ssvh/view?usp=share_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Curriculum
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Anthony Sá
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Web Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Estudante de Engenharia da Computação e Desenvolvedor Web
              especializando-se em React, Node e ASPNET.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a
                href="https://github.com/AnthonySaReis"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/anthony-s%C3%A1-05a867183/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="mailto:anthony.sr@outlook.com"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillMail />
              </a>
              <a
                href="https://www.instagram.com/anthonysareis/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillInstagram />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-100 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">
              Minhas Habilidades:{" "}
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Desde que dei início aos meus estudos na área de programação, me
              identifiquei com o desenvolvimento web e venho buscando aprimorar
              meus conhecimentos e habilidades no desenvolvimento fullstack,
              usando o<span className="text-teal-500"> ReactJs </span>e{" "}
              <span className="text-teal-500">React Native </span> para
              desenvolvimento frontEnd, para web e mobile, respectivamente, e
              para o backEnd utilizo o{" "}
              <span className="text-teal-500">NodeJs. </span> <br></br>
              Recentemente iniciei uma graduação em Engenharia da Computação -
              estou no 3º período - afim de aprimorar minhas habilidades e
              adquirir um conhecimento sólido acerca da base da computação e seu
              ecossistema.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Trabalho bem em equipe - habilidade que aprimorei com os trabalhos
              da faculdade - busco sempre ter uma comunicação clara e objetiva
              para que possamos solucionar os problemas e encontrar soluções o
              mais rápido possível. Sou apaixonado por tecnologia e extremamente
              curioso, busco sempre formas diferentes e que possam ser mais
              práticas para melhorar o desenvolvimento. Possuo conhecimento
              intermediário em inglês, com um nível atual B2 na língua.
            </p>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portfólio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Aqui estão alguns dos meus projetos:
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 text-center">
              <h1 className="text-2xl py-1 dark:text-white ">
                Sistema Chamados:
              </h1>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 text-left">
                Sistema criado para controle de atendimentos de um escritório de
                contabilidade da minha cidade, onde todos os membros terão
                acesso a plataforma, nela podem registrar clientes e abrir novos
                atendimentos, com isso todos os colaboradores terão ciência de o
                que cada um está fazendo, o que já foi feito e o que há para ser
                feito.
              </p>

              <Image
                className="rounded-lg object-cover"
                width={"180%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
              <a
                href="https://github.com/AnthonySaReis/SistemaChamados"
                target="_blank"
                rel="noreferrer"
                className="text-teal-700 text-lg "
              >
                Visitar no Github
              </a>
            </div>
            <div className="basis-1/3 flex-1 text-center">
              <h1 className="text-2xl py-1 dark:text-white ">Pizzaria:</h1>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 text-left">
                Aplicação completa ( Web, Mobile e BackEnd ) para controle de
                pedidos de uma pizaria. A cozinha fica responsável por registrar
                produtos, categorizá-los receber pedidos abertos pelos garçons e
                finalizálos após o seu preparo, seta é a parte web, já a mobile
                - garçom - irá abrir a mesa e adicionar os produtos solicitados
                pelos clientes, logo após irá enviar o pedido para a cozinha,
                que irá prepará-lo.
              </p>
              <Image
                className="rounded-lg object-cover"
                width={"180%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
              <a
                href="https://github.com/AnthonySaReis/Pizzaria"
                target="_blank"
                rel="noreferrer"
                className="text-teal-700 text-lg "
              >
                Visitar no Github
              </a>
            </div>
            <div className="basis-1/3 flex-1 text-center">
            <h1 className="text-2xl py-1 dark:text-white ">PrimeFlix:</h1>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 text-left">
                Site criado para aprender a fazer requisições de apis públicas com o axios, usando a api do TMDB, nela irão aparecer detalhes dos filmes mais comentados e assistidos do momento e terá um link de redirecionamento para o trailer do filme em questão, você pode ainda salvar filmes na sua lista de favoritos, caso queira ver depois.
              </p>
              <Image
                className="rounded-lg object-cover"
                width={"180%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
              <a
                href="https://github.com/AnthonySaReis/Primeflix"
                target="_blank"
                rel="noreferrer"
                className="text-teal-700 text-lg "
              >
                Visitar no Github
              </a>
            </div>

            <div className="basis-1/3 flex-1 text-center">
            <h1 className="text-2xl py-1 dark:text-white ">Repos:</h1>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 text-left">
                Site criado para aprender ter acesso a repositórios e features da comunidade dev, podendo ler o que estão fazendo ou até mesmo ajudar, aprimorando cada vez mais seu conhecimento e ajudando outros desenvolvedores a criar novas funcionalidades que poderão ser usadas no futuro. O intuito também foi praticar a paginação, criação de filtros e o consumo de api por meio do axios.
              </p>
              <Image
                className="rounded-lg object-cover"
                width={"180%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
              <a
                href="https://github.com/AnthonySaReis/Repos"
                target="_blank"
                rel="noreferrer"
                className="text-teal-700 text-lg "
              >
                Visitar no Github
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
