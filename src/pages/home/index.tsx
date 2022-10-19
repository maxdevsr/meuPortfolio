// Styles
import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

// Page Style
import { GrView } from "react-icons/gr";

import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  StackSection,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectsAreaContent,
  ProjectAreaWrapperColumns,
} from "./style";
import { ProjectLink } from "@/components/Project/style";
import doYouKnow from "../../imgProject/doYouKnow.png";
import nuKenzie from "../../imgProject/nuKenzie.png";
import eccomerceRedux from "../../imgProject/eccomerceRedux.png";
import formulario from "../../imgProject/formulario.png";
import hamburgueria from "../../imgProject/hamburgueria.png";
import kenzieHub from "../../imgProject/kenzieHub.png";
import rickAndMorty from "../../imgProject/rickAndMorty.png";
import vueHub from "../../imgProject/vuehub.png"

export const Home = (): JSX.Element => {
  return (
    <main>
      <Header>
        <Container>
          <HeaderContent>
            <Text as="h1" type="heading1" color="grey5">
              Criando experiências por meio da tecnologia{" "}
            </Text>
            <Text type="body1" color="grey6">
              Olá! Seja bem vindo! Atualmente estou no cargo de Programador de Software 
              na empresa &nbsp;<a href="https://atrialub.com.br/" target="_blank" >
                Atria Lub</a>,&nbsp;multinacional do setor automotivo.
              Sou estudante de programação FullStack na Kenzie Academy Brasil,
              participei de diversos projetos resolvendo problemas de alto nível
              e desenvolvendo habilidades em busca da minha qualificação
              profissional. Também estudo Analise e Desenvolvimento de Sistemas
              na Faculdade Pitágoras, aonde eu busco também um conhecimento em
              tópicos que abrangem toda a computação, para assim me tornar um
              profissional mais completo.
            </Text>
            <HeaderButtonsArea>
              <Button as="a" href="#projetos">
                Projetos
              </Button>
              <Button as="a" href="#tecnologias" type="btLink" color="grey5">
                Tecnologias
              </Button>
            </HeaderButtonsArea>
          </HeaderContent>
        </Container>
      </Header>
      <StackSection id="tecnologias">
        <Container>
          <Text as="h4" type="heading3" color="grey1">
            Ferramentas que domino/tenho conhecimento
          </Text>
          <StackCards>
            {stackData.map((stack, index) => (
              <Stack key={index} title={stack.title} icon={stack.img} />
            ))}
          </StackCards>
        </Container>
      </StackSection>
      <ProjectsArea id="projetos">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey1">
                Vamos trocar uma ideia?
              </Text>
              <Text as="p" type="body1" color="grey2">
                No linkedIn eu venho postando meu aprendizado, compartilhando o
                conhecimento que venho adquirindo, passo a passo, como uma forma
                de mostrar meu empenho e meus resultados para voces.
                <p>Conheça meu perfil profissional !</p>
              </Text>
              <Button
                type="primary"
                target="_blank"
                as="a"
                href={`https://www.linkedin.com/in/${userData.linkedinUser}`}
              >
                Acessar perfil no LinkedIn
              </Button>
              <p></p>
              <Text as="h2" type="heading4" color="grey1">
                Links (deploy) de projetos feitos por mim
              </Text>
              <div className="testandoCarrosel">
                <Text as="p" type="body1" color="grey2">
                  <div>
                    <a
                      target="_blank"
                      href="https://vue-hub-five.vercel.app/"
                    >
                      <GrView /> VueJs HUB
                      <img src={vueHub} />
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://do-you-know-react-app-five.vercel.app/"
                    >
                      <GrView /> DoYouKnow
                      <img src={doYouKnow} />
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://react-entrega-s1-nu-kenzie-maxdevsr.vercel.app/"
                    >
                      <GrView /> NuKenzie
                      <img src={nuKenzie} />
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://react-atividade-s1-buscando-mais-personagens-maxdevsr.vercel.app/"
                    >
                      <GrView /> Render API Rick and Morty
                      <img src={rickAndMorty} />
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://react-entrega-s1-hamburgueria-da-kenzie-maxdevsr.vercel.app/"
                    >
                      <GrView /> Ecommerce Hamburgueria
                      <img src={hamburgueria} />
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://react-atividade-s2-formulario-de-cadastro-maxdevsr-maxdevsr.vercel.app/"
                    >
                      <GrView /> Formulario de cadastro de usuarios
                      <img src={formulario} />
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://react-entrega-s3-kenzieshop-maxdevsr.vercel.app/"
                    >
                      <GrView /> EcommerceKenzie SHOP com REDUX
                      <img src={eccomerceRedux} />
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://react-entrega-s2-kenzie-hub-maxdevsr.vercel.app/"
                    >
                      <GrView /> Kenzie HUB
                      <img src={kenzieHub} />
                    </a>
                  </div>
                </Text>
              </div>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Text type="body1" color="grey2" css={{ marginBottom: "$2" }}>
                Projetos
              </Text>
              <Text as="h3" type="heading2" color="grey1">
                Originalidade e{" "}
                <Text as="span" color="brand1" type="heading2">
                  dedicação
                </Text>{" "}
                em cada detalhe
              </Text>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
    </main>
  );
};
