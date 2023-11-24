import * as Yup from 'yup';

const parceriaValidator = Yup.object().shape({
    nome: Yup.string().min(2, 'Minimo 2 caracteres').max(50, 'Maximo 50 caracteres').required('Campo obrigátorio'),
    cnpj: Yup.string().min(2, 'Minimo 2 caracteres').max(50, 'Maximo 50 caracteres').required('Campo obrigátorio'),
    proprietario: Yup.string().min(2, 'Minimo 2 caracteres').max(50, 'Maximo 15 caracteres').required('Campo obrigátorio'),
    razaosocial: Yup.string().min(2, 'Minimo 2 caracteres').max(50, 'Maximo 15 caracteres').required('Campo obrigátorio'),
    email: Yup.string().min(2, 'Minimo 2 caracteres').max(50, 'Maximo 15 caracteres').required('Campo obrigátorio'),
  })

  export default parceriaValidator