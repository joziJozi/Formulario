import * as Yup from 'yup';

const edusescValidator = Yup.object().shape({
    unidade: Yup.string().min(2, 'Minimo 2 caracteres').max(50, 'Maximo 50 caracteres').required('Campo obrigátorio'),
    aluno: Yup.string().min(2, 'Minimo 10 caracteres').max(50, 'Maximo 15 caracteres').required('Campo obrigátorio'),
    cpf: Yup.string().min(2, 'Minimo 10 caracteres').max(50, 'Maximo 15 caracteres').required('Campo obrigátorio'),
    matricula: Yup.string().min(2, 'Minimo 10 caracteres').max(50, 'Maximo 15 caracteres').required('Campo obrigátorio'),
    telefone: Yup.string().min(2, 'Minimo 10 caracteres').max(50, 'Maximo 15 caracteres').required('Campo obrigátorio'),
  })

  export default edusescValidator