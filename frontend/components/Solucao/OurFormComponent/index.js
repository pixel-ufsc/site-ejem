import React, { useState } from "react";
import validator from "validator";
import styles from "./ourform.module.css";

export default function OurFormComponent() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [telefone, setTelefone] = useState('');
    const [demanda, setDemanda] = useState('');
    const [comentario, setComentario] = useState('');
    const [checkboxes, setCheckboxes] = useState([]);

    const handleBoxChange = ({ target }) => {
        if (target.checked) {
          setCheckboxes([...checkboxes,target.value])
        }else{
          const filtered_checkboxes = checkboxes.filter((item)=>!(target.value===item))
          setCheckboxes(filtered_checkboxes)
        }
      }
    
      const handleTelefoneChange = ({target}) => { //função para formatar o numero de telefone no padrao brasileiro
        let  value  = target.value;
      value = value.replace(/\D/g, '');
      let formattedValue = '';
      if (value.length <= 2) {
        formattedValue = value;
      } else if (value.length <= 6) {
        formattedValue = `(${value.substring(0, 2)}) ${value.substring(2)}`;
      } else if (value.length <= 10) {
        formattedValue = `(${value.substring(0, 2)}) ${value.substring(2, 6)}-${value.substring(6)}`;
      } else {
        formattedValue = `(${value.substring(0, 2)}) ${value.substring(2, 7)}-${value.substring(7, 11)}`;
      }
      setTelefone(formattedValue)
      }

      const validate_inputs = () =>{
        let validador = true
        let a = document.getElementById('error')
        a.innerHTML = ''
        if (!validator.isAlpha(nome.replace(' ','')) || nome.length<=2){
          a.innerHTML += 'Insira um nome válido!<br>'
          validador = false
        }
        if (!validator.isEmail(email)) {
          a.innerHTML += 'Insira um email válido!<br>'
          validador = false
        }
        if (empresa.length<=2) {
          a.innerHTML += 'Insira um nome de empresa/segmento válido!<br>'
          validador = false
        }
        if (telefone.length !== 15) {
          a.innerHTML += 'Insira um telefone no formato (99) 99999-9999<br>'
          validador = false
        }
        if (checkboxes.filter((item)=>!(item.slice(0,8) === 'Contato:')).length === 0) {
          a.innerHTML += 'Marque pelo menos uma demanda<br>'
          validador = false
        }
        if (demanda.length === 0) {
          a.innerHTML += 'Descreva sua demanda!<br>'
          validador = false
        }
        if (checkboxes.filter((item)=>(item.slice(0,8) === 'Contato:')).length === 0) {
          a.innerHTML += 'Escolha pelo menos um meio a ser contatado!<br>'
          validador = false
        }
        return validador
      }
    
    
    
      const handleSubmit = () => {
        if (validate_inputs()){
          const formObjectt = {'nome':nome,'email':email,'empresa':empresa,'telefone':telefone,'demanda':demanda,'comentario':comentario,'checkboxes':checkboxes.filter((item)=>!(item.slice(0,8) === 'Contato:')),'contato':checkboxes.filter((item)=>(item.slice(0,8) === 'Contato:'))}
          //Agora só enviar o form com o objeto acima, acredito que fiz toda validação necessaria de inputs, agora só enviar
        }else{
          console.log('Algum erro')
        }
      };

      return (
        <section className={styles.sectionForm}>
            <div className={styles.container}>
            <form className={styles.formContainer}>
                <h1 className={styles.title} >E aí, vamos fazer um <span className={styles.spanOrcamento}>orçamento gratuito?</span></h1>
        
                <div className={styles.group}>
                <label className={styles.label}>
                    Nome:
                </label>
                <input
                    className={styles.input}
                    required
                    type="text"
                    value={nome}
                    onChange={(({ target }) => setNome(target.value))}
                />
                </div>
        
                <div className={styles.group}>
                <label className={styles.label}>
                    E-mail:
                </label>
                <input
                    className={styles.input}
                    type="email"
                    value={email}
                    onChange={(({ target }) => setEmail(target.value))}
                />
                </div>
        
                <div className={styles.group}>
                <label className={styles.label}>
                    Nome e segmento da empresa:
                </label>
                <input
                    className={styles.input}
                    type="text"
                    value={empresa}
                    onChange={(({ target }) => setEmpresa(target.value))}
                />
                </div>
        
                <div className={styles.group}>
                <label className={styles.label}>
                    Telefone:
                </label>
                <input
                    className={styles.input}
                    required
                    maxLength={15}
                    type="text"
                    value={telefone}
                    onChange={handleTelefoneChange}
                />
                </div>
        
                <div className={styles.group}>
                <label className={styles.label}>Quais soluções atendem sua demanda?</label>
                <div className={styles.formCheckContainer}>
                    <input
                    type="checkbox"
                    className={styles.checkbox}
                    value='Caracterização de materias metálicos'
                    onChange={handleBoxChange}
                    />
                    <label className={styles.checkbox_label}>Caracterização de materias metálicos</label>
                </div>
        
                <div className={styles.formCheckContainer}>
                    <input
                    type="checkbox"
                    className={styles.checkbox}
                    value='Caracterização de materias poliméricos'
                    onChange={handleBoxChange}
                    />
                    <label className={styles.checkbox_label}>Caracterização de materias poliméricos</label>
                </div>
        
                <div className={styles.formCheckContainer}>
                    <input
                    type="checkbox"
                    className={styles.checkbox}
                    value='Caracterização de materiais cerâmicos ou compósitos'
                    onChange={handleBoxChange}
                    />
                    <label className={styles.checkbox_label}>Caracterização de materiais cerâmicos ou compósitos</label>
                </div>
        
                <div className={styles.formCheckContainer}>
                    <input
                    type="checkbox"
                    className={styles.checkbox}
                    value='Engenharia reversa'
                    onChange={handleBoxChange}
                    />
                    <label className={styles.checkbox_label}>Engenharia reversa</label>
                </div>
        
                <div className={styles.formCheckContainer}>
                    <input
                    type="checkbox"
                    className={styles.checkbox}
                    value='Ensaios mecânicos'
                    onChange={handleBoxChange}
                    />
                    <label className={styles.checkbox_label}>Ensaios mecânicos</label>
                </div>
        
                <div className={styles.formCheckContainer}>
                    <input
                    type="checkbox"
                    className={styles.checkbox}
                    value='Seleção de materiais'
                    onChange={handleBoxChange}
                    />
                    <label className={styles.checkbox_label}>Seleção de materiais</label>
                </div>
        
                <div className={styles.formCheckContainer}>
                    <input
                    type="checkbox"
                    className={styles.checkbox}
                    value='Outros'
                    onChange={handleBoxChange}
                    />
                    <label className={styles.checkbox_label}>Outros</label>
                </div>
        
                </div>
        
                <div className={styles.group}>
                <label className={styles.label}>
                    Descreva sua demanda:
                </label>
                <textarea
                    className={styles.input}
                    value={demanda}
                    onChange={({ target }) => setDemanda(target.value)}
                />
                </div>
        
                <div className={styles.group}>
                <label className={styles.label}>
                    Comentários adicionais:
                </label>
                <textarea
                    className={styles.input}
                    value={comentario}
                    onChange={({ target }) => setComentario(target.value)}
                />
                </div>
        
                <div className={styles.groupContato}>
                <label className={styles.label}>Como prefere ser contatado?</label>
        
                <div className={styles.formCheckContainer}>
                    <input
                    className={styles.checkbox}
                    type="checkbox"
                    value={'Contato:Telefone'}
                    onChange={handleBoxChange}
                    />
                    <label className={styles.checkbox_label}>Telefone</label>
                </div>
        
                <div className={styles.formCheckContainer}>
                    <input
                    className={styles.checkbox}
                    type="checkbox"
                    value={'Contato:E-mail'}
                    onChange={handleBoxChange}
                    />
                    <label className={styles.checkbox_label}>E-mail</label>
                </div>
        
        
                </div>
                <p id='error' className={styles.error}></p>
                <div className={styles.buttonContainer}>
                <button
                type='button'
                    className={styles.button}
                    onClick={handleSubmit}
                >
                    <span className={styles.button_txt}>
                    ENVIAR
                    </span>
        
                </button>
                </div>
            </form>
            </div>
        </section>
      );
    }
    
    
