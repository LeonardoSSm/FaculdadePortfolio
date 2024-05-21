import Head from 'next/head';
import Navbar from '../../components/ui/Navbar';
import styles from '../../../styles/home.module.scss'

export default function About() {
  return (
    <div className={styles.containerAbout}>
      <Head>
        <title>Leonardo Sousa</title>
      </Head>

{/* Bem aqui nao tem muito oque explicar, tem os botoes e eles levam para o link e o texto ali e um pouco sobre mim */}
      <main className={styles.mainAbout}>
      <div className={styles.aboutLeftSide}>
        <h1>
          <a href="https://www.linkedin.com/in/leonardoss2/" target="_blank" rel="noreferrer">Linkedin</a><br />
          <a href="https://www.instagram.com/leonardo_2s/" target="_blank" rel="noreferrer">Instagram</a><br />
          <a href="https://github.com/LeonardoSSm" target="_blank" rel="noreferrer">Github</a>
        </h1>
      </div>
      <div className={styles.aboutRightSide}>
        <h1>Ceará, Brasil</h1><br />
        <p>Estou me formando em Análise e Desenvolvimento de Sistemas, pois desde a minha adolescência tenho
           uma grande aptidão para tecnologia. Hoje, aos 21 anos e com 3 anos de experiência na área de 
           Tecnologia da Informação, venho constantemente aprimorando minhas habilidades técnicas no mundo
            da programação. De forma autodidata, criei uma base sólida das minhas habilidades técnicas, 
            sempre buscando soluções para problemas tanto no meu âmbito profissional quanto pessoal, 
            especialmente no que envolve tecnologia. Sempre fui bastante curioso e com uma mentalidade 
            técnica pude me ver facilmente encontrando meu lugar em meio aos códigos e nas lógicas de 
            programação. 
            </p><br /><div className={styles.separatorSkills}/>
            <p>Ensino medio completo, cursando ADS na Uninter e atualmente trabalhando como desenvolvedor
              especializando em backend mas atuando como fullstack.</p>
      </div>
      </main>
    </div>
  );
}
