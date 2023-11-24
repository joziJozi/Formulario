import * as Yup from 'yup';

const turismoValidator = Yup.object().shape({
    nome: Yup.string().min(2, 'Minimo 2 caracteres').max(50, 'Maximo 50 caracteres').required('Campo obrigátorio'),
    tipo: Yup.string().min(2, 'Minimo 10 caracteres').max(50, 'Maximo 15 caracteres').required('Campo obrigátorio'),
    dificuldade: Yup.string().min(2, 'Minimo 10 caracteres').max(50, 'Maximo 15 caracteres').required('Campo obrigátorio'),
    data: Yup.string().min(2, 'Minimo 10 caracteres').max(50, 'Maximo 15 caracteres').required('Campo obrigátorio'),
    horario: Yup.string().min(2, 'Minimo 10 caracteres').max(50, 'Maximo 15 caracteres').required('Campo obrigátorio'),
  })

  export default turismoValidator