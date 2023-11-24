import * as Yup from 'yup';

const eventosValidator = Yup.object().shape({
    nome: Yup.string().min(2, 'Minimo 2 caracteres').max(50, 'Maximo 50 caracteres').required('Campo obrigátorio'),
    datainicio: Yup.string().min(2, 'Minimo 2 caracteres').max(50, 'Maximo 50 caracteres').required('Campo obrigátorio'),
    datafim: Yup.string().min(2, 'Minimo 2 caracteres').max(50, 'Maximo 50 caracteres').required('Campo obrigátorio'),
    descricao: Yup.string().min(2, 'Minimo 10 caracteres').max(50, 'Maximo 15 caracteres').required('Campo obrigátorio'),
    patrocinador: Yup.string().min(2, 'Minimo 10 caracteres').max(50, 'Maximo 15 caracteres').required('Campo obrigátorio'),
  })

  export default eventosValidator