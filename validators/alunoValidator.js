import * as Yup from 'yup';

const alunoValidator = Yup.object().shape({
    nome: Yup.string().min(2, 'Minimo 2 caracteres').max(50, 'Maximo 50 caracteres').required('Campo obrigátorio'),
    cpf: Yup.number().min(2, 'Minimo 2 caracteres').max(50, 'Maximo 50 caracteres').required('Campo obrigátorio'),
    matricula: Yup.number().min(2, 'Minimo 2 caracteres').max(50, 'Maximo 50 caracteres').required('Campo obrigátorio'),
    email: Yup.string().min(2, 'Minimo 2 caracteres').max(50, 'Maximo 50 caracteres').required('Campo obrigátorio'),
    telefone: Yup.number().min(2, 'Minimo 2 caracteres').max(50, 'Maximo 50 caracteres').required('Campo obrigátorio'),
    cep: Yup.number().min(2, 'Minimo 2 caracteres').max(8, 'Maximo 8 caracteres').required('Campo obrigátorio'),
    logradouro: Yup.string().min(2, 'Minimo 2 caracteres').max(50, 'Maximo 50 caracteres').required('Campo obrigátorio'),
    complemento: Yup.string().min(2, 'Minimo 2 caracteres').max(50, 'Maximo 50 caracteres').required('Campo obrigátorio'),
    numero: Yup.number().min(2, 'Minimo 2 caracteres').max(50, 'Maximo 50 caracteres').required('Campo obrigátorio'),
    bairro: Yup.string().min(2, 'Minimo 2 caracteres').max(50, 'Maximo 50 caracteres').required('Campo obrigátorio'),
  })

  export default alunoValidator