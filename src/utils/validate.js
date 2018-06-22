import validate from 'validate.js';

validate.validators.presence.message = 'Este campo não pode estar em branco.';
validate.validators.email.message = 'E-mail deve possuir um formato válido.';
validate.validators.equality.message = 'As senhas devem ser iguais.';

export default validate;
