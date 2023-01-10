import React, { useState } from "react";
import validator from "validator";
import styles from "./ourform.module.css";
import { Form } from "react-bootstrap";

export default function OurFormComponent() {
  const [formState, setFormState] = useState({
    nome: { value: "", valid: "" },
    email: { value: "", valid: "" },
    empresa: { value: "", valid: "" },
    checkbox: { value: false, valid: "" },
    telefone: { value: "", valid: true },
    tipoPessoa: { value: "Pessoa Física", valid: true },
    msg: { value: "", valid: "" },
  });

  console.log(formState)

  const validate = {
    nome: (value) => validator.isAlpha(value),
    email: (value) => validator.isEmail(value),
    empresa: (value) => validator.isAlpha(value),
    telefone: () => true,
    tipoPessoa: () => true,
    msg: (value) => validator.isAlphanumeric(value),
    checkbox: (value) => value,
  };

  const handleFormChange = (key) => (event) => {
    const value = key === "checkbox" ? event.target.checked : event.target.value;

    setFormState((prev) => {
      return { ...prev, [key]: { value, valid: validate[key](value) } };
    });
  };

  const handleSubmit = () => {
    console.log("todo");
  };

  const isEnabled = () =>
    formState.nome.valid &&
    formState.email.valid &&
    formState.empresa.valid &&
    formState.telefone.valid &&
    formState.termos.valid;

  return (
    <div className={styles.container}>

      <Form className={styles.formContainer}>
        <Form.Group className={styles.group}>
          <Form.Label className={styles.label}>
            Nome:
          </Form.Label>
          <Form.Control
            className={styles.input}
            required
            type="text"
            value={formState.nome.value}
            onChange={handleFormChange("nome")}
            isValid={formState.nome.valid}
            isInvalid={formState.nome.valid === false}
          />
          {/* <Form.Control.Feedback type="invalid">
            Nome inválido!
          </Form.Control.Feedback> */}
        </Form.Group>

        <Form.Group className={styles.group}>
          <Form.Label className={styles.label}>
            E-mail:
          </Form.Label>
          <Form.Control
            className={styles.input}
            type="email"
            value={formState.email.value}
            onChange={handleFormChange("email")}
            isValid={formState.email.valid}
            isInvalid={formState.email.valid === false}
          />
          {/* <Form.Control.Feedback type="invalid">
            Email inválido!
          </Form.Control.Feedback> */}
        </Form.Group>

        <Form.Group className={styles.group}>
          <Form.Label className={styles.label}>
            Nome e segmento da empresa:
          </Form.Label>
          <Form.Control
            className={styles.input}
            type="text"
            value={formState.empresa.value}
            onChange={handleFormChange("empresa")}
            isValid={formState.empresa.valid}
            isInvalid={formState.empresa.valid === false}
          />
          {/* <Form.Control.Feedback type="invalid">
            Nome e segmento da empresa inválidos!
          </Form.Control.Feedback> */}
        </Form.Group>
        

        <Form.Group className={styles.group}>
          <Form.Label className={styles.label}>
            Telefone:
          </Form.Label>
          <Form.Control
            className={styles.input}
            required
            type="text"
            value={formState.telefone.value}
            onChange={handleFormChange("telefone")}
          />
        </Form.Group>


        <Form.Group className={styles.group}>
            <Form.Label className={styles.label}>Quais soluções atendem sua demanda?</Form.Label>
            <Form.Group className={styles.formCheckContainer}>
                <Form.Check
                    className={styles.checkbox}
                    type="checkbox"
                    onChange={handleFormChange("checkbox")}
                    isValid={formState.checkbox.valid}
                    isInvalid={formState.checkbox.valid === false}
                />
                <Form.Label className={styles.checkbox_label}>Caracterização de materias metálicos</Form.Label>
            </Form.Group>

            <Form.Group className={styles.formCheckContainer}>
                <Form.Check
                    type="checkbox"
                    onChange={handleFormChange("checkbox")}
                    isValid={formState.checkbox.valid}
                    isInvalid={formState.checkbox.valid === false}
                />
                <Form.Label className={styles.checkbox_label}>Caracterização de materias poliméricos</Form.Label>
            </Form.Group>

            <Form.Group className={styles.formCheckContainer}>
                <Form.Check
                    type="checkbox"
                    onChange={handleFormChange("checkbox")}
                    isValid={formState.checkbox.valid}
                    isInvalid={formState.checkbox.valid === false}
                />
                <Form.Label className={styles.checkbox_label}>Caracterização de materiais cerâmicos ou compósitos</Form.Label>
            </Form.Group>

            <Form.Group className={styles.formCheckContainer}>
                <Form.Check
                    type="checkbox"
                    onChange={handleFormChange("checkbox")}
                    isValid={formState.checkbox.valid}
                    isInvalid={formState.checkbox.valid === false}
                />
                <Form.Label className={styles.checkbox_label}>Engenharia reversa</Form.Label>
            </Form.Group>

            <Form.Group className={styles.formCheckContainer}>
                <Form.Check
                    type="checkbox"
                    onChange={handleFormChange("checkbox")}
                    isValid={formState.checkbox.valid}
                    isInvalid={formState.checkbox.valid === false}
                />
                <Form.Label className={styles.checkbox_label}>Ensaios mecânicos</Form.Label>
            </Form.Group>

            <Form.Group className={styles.formCheckContainer}>
                <Form.Check
                    type="checkbox"
                    onChange={handleFormChange("checkbox")}
                    isValid={formState.checkbox.valid}
                    isInvalid={formState.checkbox.valid === false}
                />
                <Form.Label className={styles.checkbox_label}>Seleção de materiais</Form.Label>
            </Form.Group>

            <Form.Group className={styles.formCheckContainer}>
                <Form.Check
                    type="checkbox"
                    onChange={handleFormChange("checkbox")}
                    isValid={formState.checkbox.valid}
                    isInvalid={formState.checkbox.valid === false}
                />
                <Form.Label className={styles.checkbox_label}>Outros</Form.Label>
            </Form.Group>

        </Form.Group>

        <Form.Group className={styles.group}>
            <Form.Label className={styles.label}>
                Descreva sua demanda:
             </Form.Label>
            <Form.Control
                className={styles.input}
                required
                as="textarea"
                value={formState.msg.value}
                onChange={handleFormChange("msg")}
                isValid={formState.msg.valid}
                isInvalid={formState.msg.valid === false}
            />
            {/* <Form.Control.Feedback type="invalid">
                Preencha a mensagem!
            </Form.Control.Feedback> */}
        </Form.Group>

        <Form.Group className={styles.group}>
            <Form.Label className={styles.label}>
                Comentários adicionais:
             </Form.Label>
            <Form.Control
                className={styles.input}
                required
                as="textarea"
                value={formState.msg.value}
                onChange={handleFormChange("msg")}
                isValid={formState.msg.valid}
                isInvalid={formState.msg.valid === false}
            />
            {/* <Form.Control.Feedback type="invalid">
                Preencha a mensagem!
            </Form.Control.Feedback> */}
        </Form.Group>

        <Form.Group className={styles.group}>
            <Form.Label className={styles.label}>Como prefere ser contatado?</Form.Label>
            
              <Form.Group className={styles.formCheckContainer}>
                  <Form.Check
                      type="checkbox"
                      onChange={handleFormChange("checkbox")}
                      isValid={formState.checkbox.valid}
                      isInvalid={formState.checkbox.valid === false}
                  />
                  <Form.Label className={styles.checkbox_label}>Telefone</Form.Label>
              </Form.Group>

              <Form.Group className={styles.formCheckContainer}>
                  <Form.Check
                      type="checkbox"
                      onChange={handleFormChange("checkbox")}
                      isValid={formState.checkbox.valid}
                      isInvalid={formState.checkbox.valid === false}
                  />
                  <Form.Label className={styles.checkbox_label}>E-mail</Form.Label>
              </Form.Group>
            

        </Form.Group>

        <div className={styles.buttonContainer}>
          <button
            className={styles.button}
            disabled={!isEnabled()}
            onClick={handleSubmit}
          >
            <span className={styles.button_txt}>
              ENVIAR
            </span>

          </button>
        </div>
      </Form>
    </div>
  );
}


