import { CircleUserRound } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import img1 from "../assets/foto-1.jpg";
import img2 from "../assets/foto-2.jpg";
import img3 from "../assets/foto-3.jpg";
import { useState } from "react";

const images = [img2, img1, img3];

function Article() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="prose prose-p:text-justify dark:text-zinc-100 dark:prose-headings:text-zinc-100 dark:prose-blockquote:text-zinc-100 mt-16 md:max-w-[70%] w-full mx-auto">
      <h1>Conhecendo as Regiões do Mundo: Uma Jornada de Descoberta</h1>

      <div className="flex items-center gap-4 mb-4">
        <CircleUserRound size={40} className="mt-[-4px]" />
        <div className="flex flex-col">
          <h4 className="m-0 font-bold">Vinícius Assunção</h4>
          <div className="flex gap-3">
            <span>5 min de leitura </span>°<span>Abr 5, 2024</span>
          </div>
        </div>
      </div>

      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image) => {
            return <img src={image} key={image} />;
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <p>
        Bem-vindos, exploradores! Hoje vamos embarcar em uma jornada emocionante
        através das regiões mais fascinantes do mundo, onde a aventura e a
        descoberta nos aguardam a cada esquina. Prepare-se para desvendar os
        segredos das terras distantes e mergulhar em culturas exóticas enquanto
        exploramos a diversidade de nosso planeta!
      </p>

      <blockquote>
        <p>"A vida é uma aventura ousada ou nada."</p>
        <footer>- Helen Keller</footer>
      </blockquote>

      <h2>América do Sul: O Ritmo Latino e a Natureza Exuberante</h2>

      <p>
        Na América do Sul, a paixão e a vida estão entrelaçadas em uma dança
        vibrante de cores e sons. Do Brasil, lar do carnaval e das florestas
        tropicais da Amazônia, ao Chile, com seus vinhedos exuberantes e deserto
        do Atacama, cada país tem sua própria história para contar. Deixe-se
        levar pelo ritmo latino e pela exuberância da natureza enquanto
        exploramos essa terra de contrastes!
      </p>

      <blockquote>
        <p>"O verdadeiro viajante é aquele que sabe ir embora."</p>
        <footer>- Lin Yutang</footer>
      </blockquote>

      <h2>América do Norte: Dos Arranha-Céus às Montanhas Nevadas</h2>

      <p>
        Bem-vindo à terra da liberdade e das grandes oportunidades! Na América
        do Norte, as metrópoles modernas se encontram com as vastas planícies e
        as montanhas majestosas. Dos arranha-céus de Nova York às pradarias
        ondulantes do Canadá, e das praias ensolaradas da Califórnia às geleiras
        do Alasca, cada canto deste continente tem algo único a oferecer.
        Prepare-se para se surpreender a cada passo!
      </p>

      <h2>América Central: Entre o Caribe e o Pacífico</h2>

      <p>
        Na América Central, o Caribe encontra o Pacífico em uma fusão de cores e
        sabores. Da selva exuberante da Costa Rica às ruínas antigas de Tikal, e
        das praias de areia branca de Belize às montanhas vulcânicas da
        Nicarágua, esta região é um verdadeiro paraíso para os amantes da
        natureza e da aventura. Deixe-se seduzir pela magia deste lugar único no
        mundo!
      </p>

      <h2>Ásia: O Berço da Civilização e da Espiritualidade</h2>

      <p>
        Bem-vindo ao maior e mais diversificado continente do mundo! Na Ásia, as
        antigas tradições se misturam com a modernidade em uma dança fascinante
        de contrastes. Da Grande Muralha da China à espiritualidade serena do
        Taj Mahal, e das metrópoles futuristas de Tóquio e Seul às praias
        paradisíacas da Tailândia, cada destino é uma jornada única e
        inesquecível. Prepare-se para uma aventura épica!
      </p>

      <h2>África: O Berço da Humanidade e a Terra dos Safáris</h2>

      <p>
        Na África, a vida selvagem corre livre e os horizontes se estendem até
        onde os olhos podem ver. Das planícies intermináveis do Serengeti às
        dunas douradas do deserto do Saara, e das cidades vibrantes da África do
        Sul às antigas pirâmides do Egito, este continente é um verdadeiro
        tesouro de maravilhas naturais e culturais. Prepare-se para uma viagem
        que mudará sua vida para sempre!
      </p>

      <h2>Europa: O Lar da História e da Beleza</h2>

      <p>
        Bem-vindo ao continente onde o passado e o presente se encontram em uma
        dança eterna de beleza e grandiosidade. Na Europa, cada cidade é um
        museu a céu aberto, e cada rua respira história e cultura. De Paris, a
        cidade do amor e da luz, a Roma, a eterna cidade eterna, e de Londres, a
        cidade cosmopolita, às aldeias pitorescas da Toscana, cada destino é uma
        obra-prima em si. Prepare-se para se encantar a cada esquina!
      </p>

      <blockquote>
        <p>"Uma viagem é melhor medida em amigos do que em milhas."</p>
        <footer>- Tim Cahill</footer>
      </blockquote>

      <p>
        Cada região do mundo tem sua própria história para contar e suas
        próprias maravilhas para descobrir. Então, o que você está esperando?
        Pegue sua mochila, abra seu coração para o desconhecido e embarque em
        uma aventura que mudará sua vida para sempre! O mundo está esperando por
        você!
      </p>
    </div>
  );
}

export default Article;
