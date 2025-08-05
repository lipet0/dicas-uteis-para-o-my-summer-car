import { GuideLayout } from "@/components/guide-layout"
import { HeroSection } from "@/components/hero-section"
import { GuideSection } from "@/components/guide-section"
import { TipList } from "@/components/tip-list"
import { DiscordButton } from "@/components/discord-button"
import { Card, CardContent } from "@/components/ui/card"

// Usando as imagens já existentes no projeto
const basePath = "/dicas-uteis-para-o-my-summer-car";
const imageMap = {

  primeiroPassos: `${basePath}/lovable-uploads/c77029b6-cdd7-4c43-9545-65bc7e51656a.png`,
  montagemCarro: `${basePath}/lovable-uploads/cfa1c3c4-2bcc-4af9-bd5a-dac0dc6fa827.png`,
  manutencao: `${basePath}/lovable-uploads/4868b4a8-95f8-43d7-8536-9349518c4b85.png`,
  trabalhos: `${basePath}/lovable-uploads/ccea9def-53c7-4dd0-9edd-81433ca572b9.png`,
  dicas: `${basePath}/lovable-uploads/9ce638cc-1640-48aa-9acd-9f1781c15583.png`,
  dirigindo: `${basePath}/lovable-uploads/205107b4-fbda-4f8a-8e4f-b41ef97d6f62.png`,
  personalizacao: `${basePath}/lovable-uploads/4cc1fa97-46e6-4402-a4fd-a95995d4e710.png`,
  habilidades: `${basePath}/lovable-uploads/b1c1bd4e-96fb-4054-9fb1-4621b4432b15.png`,
  sobrevivencia: `${basePath}/lovable-uploads/f421b7bc-ca17-412f-8bbc-e214dbf207f2.png`,
};


const dicas = [
  {
    title: "Salve o jogo",
    description: "Use o banheiro para salvar. Salvar após conquistas importantes evita frustrações."
  },
  {
    title: "Evite morrer",
    description: "Não coma comidas estragadas, não durma no meio da estrada, e não dirija bêbado."
  },
  {
    title: "Fique atento ao inventário",
    description: "Carregue chaves de boca, óleo, gasolina e peças de reposição quando for longe."
  },
  {
    title: "Estude a mecânica",
    description: "Saber como funciona um motor é quase obrigatório para jogar bem. Pesquise fora do jogo se necessário."
  }
]

const Index = () => {
  return (
    <GuideLayout>
      <div className="max-w-4xl mx-auto px-6 py-8 space-y-8">
        <HeroSection />
        
        {/* Introdução */}
        <Card className="shadow-card border-border">
          <CardContent className="p-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Se você está começando em <strong className="text-foreground">My Summer Car</strong>, este é o guia ideal para te ajudar a entender cada detalhe importante deste simulador finlandês de sobrevivência, mecânica e caos automotivo. Com uma curva de aprendizado íngreme e muitos elementos interligados, este jogo testa sua paciência, dedicação e habilidades de observação. Desde o momento em que você acorda na casa de seus pais até completar a montagem do famoso Satsuma, cada passo exige atenção. Este guia foi feito pensando em você que quer aproveitar ao máximo a experiência.
            </p>
          </CardContent>
        </Card>

        <GuideSection
          id="primeiros-passos"
          title="1. Primeiros Passos"
          imageSrc={imageMap.primeiroPassos}
          imageAlt="Primeiros Passos"
        >
          <p>
            Ao iniciar o jogo, você acorda em uma casa simples, no meio da zona rural da Finlândia. O silêncio ao redor, o rádio finlandês tocando músicas aleatórias e a bagunça da sua garagem logo mostram que o jogo será tão cômico quanto desafiador. A primeira coisa a se fazer é explorar a casa e entender o funcionamento do HUD, que mostra indicadores como sede, fome, urina, stress, sujidade, fadiga e saúde.
          </p>
          <p>
            Esses elementos são fundamentais para sua sobrevivência. Lembre-se: morrer significa perder todo o progresso caso você não tenha salvo. Então, familiarize-se com o ambiente e aprenda a cuidar de você mesmo antes de sair para aventuras maiores.
          </p>
        </GuideSection>

        <GuideSection
          id="montagem-carro"
          title="2. Montagem do Carro"
          imageSrc={imageMap.montagemCarro}
          imageAlt="Montagem do Carro"
        >
          <p>
            A montagem do Satsuma é o coração do jogo. Todas as peças estão disponíveis na garagem, mas não há instruções no jogo, você precisa saber o que fazer, na ordem certa. São dezenas de parafusos, peças, ajustes e testes. Montar o carro não é apenas colocar as peças, é entender como um motor de combustão funciona.
          </p>
          <p>
            Você vai precisar instalar o bloco do motor, o virabrequim, pistões, cabeçote, carburador, sistema de escape, suspensão, direção, e por aí vai. Prepare-se para errar, desmontar e tentar de novo. Ter um guia de montagem ou vídeos abertos pode ser um grande auxílio. E lembre-se: torque errado, peças mal colocadas ou esquecidas resultarão em problemas sérios na hora de dar a partida no carro.
          </p>
        </GuideSection>

        <GuideSection
          id="manutencao"
          title="3. Manutenção e Sobrevivência"
          imageSrc={imageMap.manutencao}
          imageAlt="Manutenção e Sobrevivência"
        >
          <p>
            O personagem precisa comer, dormir, urinar, tomar banho e relaxar. Alimentos estão na geladeira, mas tudo acaba, é preciso ir até a cidade para reabastecer. Para tomar banho, entre no chuveiro. Para reduzir o stress, você pode beber, fumar, tomar café ou usar a sauna.
          </p>
          <p>
            Se negligenciar qualquer uma dessas necessidades, a consequência pode ser a morte. Por isso, mantenha uma rotina equilibrada, e sempre pense duas vezes antes de dirigir com sono ou embriagado. O jogo não perdoa erros, e um pequeno descuido pode acabar em acidente fatal, literalmente.
          </p>
        </GuideSection>

        <GuideSection
          id="trabalhos"
          title="4. Trabalhos e Grana"
          imageSrc={imageMap.trabalhos}
          imageAlt="Trabalhos e Grana"
        >
          <p>
            Dinheiro é essencial no jogo, principalmente para comprar peças de carro, mantimentos e gasolina. Há diversas formas de ganhar dinheiro honestamente: entregas de lenha, limpar fossas sépticas com o caminhão-tanque, entre outros. Cada trabalho tem sua dificuldade e risco, mas também recompensa bem.
          </p>
          <p>
            Trabalhar é uma maneira de explorar mais do mapa, conhecer NPCs e, claro, juntar grana para turbinar seu Satsuma com upgrades como carburador de corrida, radiador novo, suspensão esportiva, etc. E atenção: bater o carro pode gerar custos altos de reparo.
          </p>
        </GuideSection>

        <GuideSection
          id="dicas"
          title="5. Dicas Rápidas"
          imageSrc={imageMap.dicas}
          imageAlt="Dicas Rápidas"
        >
          <TipList tips={dicas} />
        </GuideSection>

        <GuideSection
          id="dirigindo"
          title="6. Dirigindo por Aí"
          imageSrc={imageMap.dirigindo}
          imageAlt="Dirigindo por Aí"
        >
          <p>
            Dirigir é uma parte fundamental da experiência. A direção é realista, sem assistência de volante ou GPS. Para os iniciantes, pode ser difícil manter o controle, mas com prática, você vai se acostumar. O carro tem uma velocidade razoável, mas é importante sempre checar o nível de combustível.
          </p>
          <p>
            Também é essencial saber quando parar para descansar e não exagerar nas longas viagens sem abastecer.
          </p>
        </GuideSection>

        <GuideSection
          id="personalizacao"
          title="7. Personalizando o Satsuma"
          imageSrc={imageMap.personalizacao}
          imageAlt="Personalizando o Satsuma"
        >
          <p>
            O Satsuma pode ser customizado de diversas maneiras, como aparência externa, suspensão, motor e mais. A personalização vai desde a troca de peças para melhorar o desempenho, até a pintura do carro. A estética é importante não só para seu gosto pessoal, mas também para o jogo em si, muitas vezes é necessário andar com o carro bem ajustado para concluir missões com sucesso.
          </p>
        </GuideSection>

        <GuideSection
          id="habilidades"
          title="8. Aumentando sua Habilidade de Mecânica"
          imageSrc={imageMap.habilidades}
          imageAlt="Aumentando sua Habilidade de Mecânica"
        >
          <p>
            Para realizar uma boa montagem do carro, você precisa aumentar sua habilidade mecânica. Pratique mais, aprenda com os erros e acertos, e busque eficiência no trabalho. Quanto mais você aprende, mais peças pode substituir e mais facilmente consegue reparar o carro sem causar danos.
          </p>
        </GuideSection>

        <GuideSection
          id="sobrevivencia"
          title="9. Sobrevivendo ao Caos"
          imageSrc={imageMap.sobrevivencia}
          imageAlt="Sobrevivendo ao Caos"
        >
          <p>
            My Summer Car não é para qualquer um. É um jogo de paciência, aprendizado e adaptação. Pode ser frustrante, mas as recompensas de ver seu Satsuma rodando perfeitamente ou concluir um trabalho com sucesso fazem tudo valer a pena. Aproveite a jornada, e sempre tenha em mente que, no final, o caos é parte da diversão.
          </p>
        </GuideSection>


            <p className="text-lg leading-relaxed text-muted-foreground text-left">
              <strong className="text-foreground">My Summer Car</strong> é mais que um simulador de carro — é um retrato da vida real, com todas as suas frustrações, conquistas e absurdos. Para quem gosta de jogos desafiadores, cheios de possibilidades e com liberdade total, este título é uma verdadeira joia. Dominar o jogo exige tempo e persistência, mas a recompensa é imensa. Quando ouvir o motor do Satsuma funcionando pela primeira vez após semanas de tentativa, entenderá o valor de cada esforço. Boa sorte e que a força do motor esteja com você!
            </p>
            
            <div className="pt-6">
              <DiscordButton />
            </div>
            
            <p className="text-sm text-muted-foreground pt-4">
              &copy; 2025 - Todos os direitos reservados.
            </p>
          </CardContent>
        </Card>
      </div>
    </GuideLayout>
  );
};

export default Index;
