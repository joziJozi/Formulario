import * as Yup from 'yup';

const professoresValidator = Yup.object().shape({
    nome: Yup.string().min(2, 'Minimo 2 caracteres').max(50, 'Maximo 50 caracteres').required('Campo obrigátorio'),
    cpf: Yup.number().min(2, 'Minimo 10 caracteres').max(50, 'Maximo 15 caracteres').required('Campo obrigátorio'),
    matricula: Yup.string().min(2, 'Minimo 10 caracteres').max(50, 'Maximo 15 caracteres').required('Campo obrigátorio'),
    salario: Yup.string().min(2, 'Minimo 10 caracteres').max(50, 'Maximo 15 caracteres').required('Campo obrigátorio'),
    email: Yup.string().min(2, 'Minimo 10 caracteres').max(50, 'Maximo 15 caracteres').required('Campo obrigátorio'),
    telefone: Yup.string().min(2, 'Minimo 10 caracteres').max(50, 'Maximo 15 caracteres').required('Campo obrigátorio'),
    cep: Yup.string().min(2, 'Minimo 10 caracteres').max(50, 'Maximo 15 caracteres').required('Campo obrigátorio'),
    logradouro: Yup.string().min(2, 'Minimo 10 caracteres').max(50, 'Maximo 15 caracteres').required('Campo obrigátorio'),
    complemento: Yup.string().min(2, 'Minimo 10 caracteres').max(50, 'Maximo 15 caracteres').required('Campo obrigátorio'),
    numero: Yup.string().min(2, 'Minimo 10 caracteres').max(50, 'Maximo 15 caracteres').required('Campo obrigátorio'),
    bairro: Yup.string().min(2, 'Minimo 10 caracteres').max(50, 'Maximo 15 caracteres').required('Campo obrigátorio'),
  })

  export default professoresValidator