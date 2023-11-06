import * as Yup from 'yup';

const disciplinaValidator = Yup.object().shape({
    nome: Yup.string().min(2, 'Minimo 2 caracteres').max(50, 'Maximo 50 caracteres').required('Campo obrigátorio'),
    curso: Yup.string().min(2, 'Minimo 10 caracteres').max(50, 'Maximo 50 caracteres').required('Campo obrigátorio'),
  })

  export default disciplinaValidator