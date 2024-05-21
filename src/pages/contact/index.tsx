import Head from 'next/head';
import Navbar from '../../components/ui/Navbar';
import styles from '../../../styles/home.module.scss';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui eu poderia adicionar a logica para enviar os dados do formulario
    console.log("Dados do formulário:", formData);
    // E com isso adicionar a conexao com um backend entrando nas rotas e enviando a mensagem por algum meio de comunicacao
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  // A funcao e chamada e retorna o conteudo abaixo
  return (
    <div className={styles.contactContainer}>
      <Head>
        <title>Entre em Contato</title>
      </Head>
      <main className={styles.contactMain}>
        <div className={styles.contactPage}>
          <h1>Entre em Contato</h1>
          <div className={styles.contactInfo}>
            <p>Para entrar em contato conosco, preencha o formulário abaixo:</p>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Nome:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Mensagem:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                />
              </div>
              <button type="submit">Enviar Mensagem</button> 
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
