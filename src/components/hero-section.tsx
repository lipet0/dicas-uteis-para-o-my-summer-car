const basePath = "/dicas-uteis-para-o-my-summer-car";
const imageMap = {

  banner: `${basePath}/lovable-uploads/f421b7bc-ca17-412f-8bbc-e214dbf207f2.png`,
};

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden scroll-mt-20">
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] bg-hero-gradient">
        <img
          src={imageMap.banner}
          alt="My Summer Car - Paisagem finlandesa com carros clássicos"
          className="w-full h-full object-contain mix-blend-overlay opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4 px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
              My Summer Car
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium drop-shadow-md max-w-2xl">
              Guia Completo para Iniciantes
            </p>
            <p className="text-lg text-white/80 drop-shadow-sm max-w-3xl mx-auto">
              Domine o simulador finlandês mais desafiador e divertido do mundo
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}