import interclasse from "../../assets/trajectory/interclasse.png";
import simposioTi from "../../assets/trajectory/simposio-ti.png";
import feiraDeLinguas from "../../assets/trajectory/feira-de-linguas.png";
import flf from "../../assets/trajectory/flf.png";
import desfileEcológico from "../../assets/trajectory/desfile-ecologico.png";
import uninta from "../../assets/trajectory/uninta.png";
import ufc from "../../assets/trajectory/ufc.png";
import startups from "../../assets/trajectory/startups.png";

import TrajectoryItem from "../ui/TrajectoryItem";

export default function Trajectory() {
    return (
        <section className="px-32 flex flex-col gap-10 items-center font-bricolage text-white w-max">
            <section className="flex flex-col items-center">
                <h2 className="text-7xl font-extrabold [font-optical-size:6rem]">
                    Conheça como <span className="text-purple-600">foi nossa</span> trajetória
                </h2>

                <p className="text-4xl text-white/60 font-light">
                    Acompanhe como foi nossa trajetória ao decorrer do curso,
                    <br />
                    mesclando entre a área técnica e a área da base comum
                </p>
            </section>

            <div className="grid grid-rows-8 grid-cols-[1fr_10px_1fr] gap-32">
                <div className="bg-white/60 rounded-full col-start-2 row-span-full"></div>

                <div></div>
                <TrajectoryItem>
                    <div className="flex flex-col">
                        <h1 className="text-6xl font-extrabold [font-optical-size:6rem]">Interclasse</h1>

                        <p className="text-white/60 text-4xl">
                            No Interclasse, nossa torcida mostrou que energia, união e paixão fazem a diferença, e
                            conquistamos o título de Melhor Torcida!
                        </p>
                    </div>

                    <img className="w-full h-fit" src={interclasse} alt="Foto do Interclasse" />
                </TrajectoryItem>

                <TrajectoryItem>
                    <div className="flex flex-col">
                        <h1 className="text-6xl font-extrabold [font-optical-size:6rem]">Simpósio de TI</h1>

                        <p className="text-white/60 text-4xl">
                            Evento exclusivo a área de TI, um dia de aprendizado e gincanas
                        </p>
                    </div>

                    <img className="w-full h-fit" src={simposioTi} alt="Foto do Simpósio de TI" />
                </TrajectoryItem>
                <div></div>

                <div></div>
                <TrajectoryItem>
                    <div className="flex flex-col">
                        <h1 className="text-6xl font-extrabold [font-optical-size:6rem]">Feira de Línguas</h1>

                        <p className="text-white/60 text-4xl">
                            Na Feira de Línguas, vivenciamos novas culturas, idiomas e experiências, ampliando nossos
                            conhecimentos de forma criativa e divertida
                        </p>
                    </div>

                    <img className="w-full h-fit" src={feiraDeLinguas} alt="Foto da Feira de Línguas" />
                </TrajectoryItem>

                <TrajectoryItem>
                    <div className="flex flex-col">
                        <h1 className="text-6xl font-extrabold [font-optical-size:6rem]">Visita Técnica à FLF</h1>

                        <p className="text-white/60 text-4xl">
                            Conhecendo os campus da faculdade LUCIANO FEIJÃO, para melhor experiencia
                        </p>
                    </div>

                    <img className="w-full h-fit" src={flf} alt="Imagem da FLF" />
                </TrajectoryItem>
                <div></div>

                <div></div>
                <TrajectoryItem>
                    <div className="flex flex-col">
                        <h1 className="text-6xl font-extrabold [font-optical-size:6rem]">Desfile Ecológico</h1>

                        <p className="text-white/60 text-4xl">
                            Organizado pela a base comum , em especial biologia, um momento de comunhão e cultural
                        </p>
                    </div>

                    <img className="w-full h-fit" src={desfileEcológico} alt="Foto do Desfile Ecológico" />
                </TrajectoryItem>

                <TrajectoryItem>
                    <div className="flex flex-col">
                        <h1 className="text-6xl font-extrabold [font-optical-size:6rem]">Visita Técnica à UNINTA</h1>

                        <p className="text-white/60 text-4xl">
                            Conhecendo os campus da faculdade UNINTA, para melhor experiencia
                        </p>
                    </div>

                    <img className="w-full h-fit" src={uninta} alt="Foto do UNINTA" />
                </TrajectoryItem>
                <div></div>

                <div></div>
                <TrajectoryItem>
                    <div className="flex flex-col">
                        <h1 className="text-6xl font-extrabold [font-optical-size:6rem]">Vista Técnica à UFC</h1>

                        <p className="text-white/60 text-4xl">
                            Conhecendo os campus da faculdade UFC, para melhor experiencia
                        </p>
                    </div>

                    <img className="w-full h-fit" src={ufc} alt="Foto da UFC" />
                </TrajectoryItem>

                <TrajectoryItem>
                    <div className="flex flex-col">
                        <h1 className="text-6xl font-extrabold [font-optical-size:6rem]">Gestão de Startups</h1>

                        <p className="text-white/60 text-4xl">
                            Um dos eventos mais aguardados, onde trabalhamos desde o segundo ano no desenvolvimento do
                            trabalho
                        </p>
                    </div>

                    <img className="w-full h-fit" src={startups} alt="Foto de Gestão de Startups" />
                </TrajectoryItem>
                <div></div>
            </div>
        </section>
    );
}
