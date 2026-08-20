import interclasse from "../../assets/trajectory/interclasse.png";
import simposioTi from "../../assets/trajectory/simposio-ti.png";
import feiraDeLinguas from "../../assets/trajectory/feira-de-linguas.png";
import flf from "../../assets/trajectory/flf.png";
import desfileEcológico from "../../assets/trajectory/desfile-ecologico.png";
import uninta from "../../assets/trajectory/uninta.png";
import ufc from "../../assets/trajectory/ufc.png";
import startups from "../../assets/trajectory/startups.png";

import TrajectoryItem from "../ui/TrajectoryItem";
import { motion } from "framer-motion";

export default function Trajectory() {
    return (
        <section
            id="trajetoria"
            className="flex flex-col items-center gap-16 px-32 font-bricolage text-center text-white"
        >
            {/* Bloco do Cabeçalho */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="flex flex-col items-center"
            >
                <h2 className="text-5xl font-extrabold [font-optical-size:6rem]">
                    Conheça Como Foi <span className="text-purple-600">Nossa Trajetória</span>
                </h2>

                <p className="text-2xl font-light text-white/60">
                    Acompanhe como foi nossa trajetória ao decorrer do curso,
                    <br />
                    mesclando entre a área técnica e a área da base comum
                </p>
            </motion.section>

            {/* Grid da Linha do Tempo */}
            <div className="grid grid-cols-[1fr_5px_1fr] grid-rows-8 gap-16">
                {/* Linha Central Vertical */}
                <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    whileInView={{ opacity: 1, scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative col-start-2 row-span-full mt-32 rounded-full bg-white origin-top"
                >
                    <div className="absolute -top-2 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-white" />
                    <div className="absolute -bottom-2 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-white" />
                </motion.div>

                {/* Item 1 - Direita */}
                <div />
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <TrajectoryItem>
                        <div className="flex flex-col">
                            <h1 className="text-4xl font-extrabold [font-optical-size:6rem]">Interclasse</h1>

                            <p className="text-2xl text-white/60">
                                No Interclasse, nossa torcida mostrou que energia, união e paixão fazem a diferença, e
                                conquistamos o título de Melhor Torcida!
                            </p>
                        </div>

                        <img className="h-fit w-full" src={interclasse} alt="Foto do Interclasse" />
                    </TrajectoryItem>
                </motion.div>

                {/* Item 2 - Esquerda */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <TrajectoryItem>
                        <div className="flex flex-col">
                            <h1 className="text-4xl font-extrabold [font-optical-size:6rem]">Simpósio de TI</h1>

                            <p className="text-2xl text-white/60">
                                Evento exclusivo a área de TI, um dia de aprendizado e gincanas
                            </p>
                        </div>

                        <img className="h-fit w-full" src={simposioTi} alt="Foto do Simpósio de TI" />
                    </TrajectoryItem>
                </motion.div>
                <div />

                {/* Item 3 - Direita */}
                <div />
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <TrajectoryItem>
                        <div className="flex flex-col">
                            <h1 className="text-4xl font-extrabold [font-optical-size:6rem]">Feira de Línguas</h1>

                            <p className="text-2xl text-white/60">
                                Na Feira de Línguas, vivenciamos novas culturas, idiomas e experiências, ampliando nossos
                                conhecimentos de forma criativa e divertida
                            </p>
                        </div>

                        <img className="h-fit w-full" src={feiraDeLinguas} alt="Foto da Feira de Línguas" />
                    </TrajectoryItem>
                </motion.div>

                {/* Item 4 - Esquerda */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <TrajectoryItem>
                        <div className="flex flex-col">
                            <h1 className="text-4xl font-extrabold [font-optical-size:6rem]">Visita Técnica à FLF</h1>

                            <p className="text-2xl text-white/60">
                                Conhecendo os campus da faculdade <b>LUCIANO FEIJÃO</b>, para melhor experiencia
                            </p>
                        </div>

                        <img className="h-fit w-full" src={flf} alt="Imagem da FLF" />
                    </TrajectoryItem>
                </motion.div>
                <div />

                {/* Item 5 - Direita */}
                <div />
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <TrajectoryItem>
                        <div className="flex flex-col">
                            <h1 className="text-4xl font-extrabold [font-optical-size:6rem]">Desfile Ecológico</h1>

                            <p className="text-2xl text-white/60">
                                Organizado pela a base comum , em especial biologia, um momento de comunhão e cultural
                            </p>
                        </div>

                        <img className="h-fit w-full" src={desfileEcológico} alt="Foto do Desfile Ecológico" />
                    </TrajectoryItem>
                </motion.div>

                {/* Item 6 - Esquerda */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <TrajectoryItem>
                        <div className="flex flex-col">
                            <h1 className="text-4xl font-extrabold [font-optical-size:6rem]">Visita Técnica à UNINTA</h1>

                            <p className="text-2xl text-white/60">
                                Conhecendo os campus da faculdade <b>UNINTA</b>, para melhor experiencia
                            </p>
                        </div>

                        <img className="h-fit w-full" src={uninta} alt="Foto do UNINTA" />
                    </TrajectoryItem>
                </motion.div>
                <div />

                {/* Item 7 - Direita */}
                <div />
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <TrajectoryItem>
                        <div className="flex flex-col">
                            <h1 className="text-4xl font-extrabold [font-optical-size:6rem]">Vista Técnica à UFC</h1>

                            <p className="text-2xl text-white/60">
                                Conhecendo os campus da faculdade <b>UFC</b>, para melhor experiencia
                            </p>
                        </div>

                        <img className="h-fit w-full" src={ufc} alt="Foto da UFC" />
                    </TrajectoryItem>
                </motion.div>

                {/* Item 8 - Esquerda */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <TrajectoryItem>
                        <div className="flex flex-col">
                            <h1 className="text-4xl font-extrabold [font-optical-size:6rem]">Gestão de Startups</h1>

                            <p className="text-2xl text-white/60">
                                Um dos eventos mais aguardados, onde trabalhamos desde o segundo ano no desenvolvimento do
                                trabalho
                            </p>
                        </div>

                        <img className="h-fit w-full" src={startups} alt="Foto de Gestão de Startups" />
                    </TrajectoryItem>
                </motion.div>
                <div />
            </div>
        </section>
    );
}
