import Head from 'next/head';
import Navbar from '../../components/ui/Navbar';
import styles from '../../../styles/home.module.scss'
import Image from 'next/image';
import P  from '../../../public/index'

export default function Skills() {
  return (
    <div className={styles.MasterSkills}>
      <Head>
        <title>Home Page</title>
      </Head>
{/* Aqui e onde os cards da pagina de habilidades sao fabricados, facilitei a importacao das imagens, questao de clean code usamos aqui na empresa,
podemos estar fazendo isso com components da mesma forma, pra nao ter tantas linhas de importacao da mesma pasta com conteudo diferente, assim uma importacao tras todos os conteudos */}
      <main className={styles.mainSkills}>
        <div className={styles.containerSkills}>
          <div className={styles.boxSkills}>
            <div className={styles.imageContainer}>
              <Image 
                className={styles.imageSkills}
                src={P.frontend}
                alt="Profile Picture"
                objectFit="cover"
              />
            </div>
            <h1>Front-end</h1>
            <div className={styles.separatorSkills}></div>
            <div className={styles.columnSkills}>
                <h2>Typescript</h2><br />
                <h2>NextJs</h2><br />
                <h2>ReactJs</h2><br />
                <h2>Sass</h2><br />
                <h2>Tailwind</h2>
            </div>
          </div>
          <div className={styles.boxSkills}>
            <div className={styles.imageContainer}>
              <Image 
                className={styles.imageSkills}
                src={P.backend}
                alt="Profile Picture"
                objectFit="cover"
              />
            </div>
            <h1>Back-End</h1>
            <div className={styles.separatorSkills}></div>
            <div className={styles.columnSkills}>
                <h2>Mysql</h2><br />
                <h2>Postgresql</h2><br />
                <h2>Prisma</h2><br />
                <h2>Php</h2><br />
                <h2>Express</h2>
            </div>
          </div>
          <div className={styles.boxSkills}>
            <div className={styles.imageContainer}>
              <Image 
                className={styles.imageSkills}
                src={P.softskills}
                alt="Profile Picture"
                objectFit="cover"
              />
            </div>
            <h1>Soft-Skills</h1>
            <div className={styles.separatorSkills}></div>
            <div className={styles.columnSkills}>
                <h2>Rapido aprendizado</h2><br />
                <h2>Trabalho em equipe</h2><br />
                <h2>Dedicacao</h2><br />
                <h2>Auto-ditada</h2><br />
                <h2>Determinado</h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

