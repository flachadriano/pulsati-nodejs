console.log('VALOR PADRÃO PARA PARAMETROS');

function nomeUsuario(nome, sobrenome = 'Não Informado') {
  console.log(nome, sobrenome);
}

nomeUsuario('adriano', 'flach');
nomeUsuario('adriano');

console.log('REST PARAMETERS');

function nomeUsuario(...nomes) {
  console.log(nomes);
}

function soma(numero0, numero1, ...numeros) {
  console.log(numero0 + numero1 + numeros[0] + numeros[1])
}

nomeUsuario('adriano', 'flach', 'de', 'araujo');
nomeUsuario('adriano');
soma(1, 1, 1, 2);

console.log('ARROW FUNCTIONS');

nomeUsuario2 = (...nomes) => {
  console.log(nomes);
}
nomeUsuario2('adriano', 'flach');

console.log('DESTRUCTING PARAMETERS');

const imprimirNome = ({ nome, sobrenome = 'Não informado' }) => {
  //const nome = objeto.nome;
  //const sobrenome = objeto.sobrenome;
  //if (!sobrenome) {
  //  sobrenome = 'Não informado';
  //}
  console.log(nome, sobrenome);
}

imprimirNome({nome: 'adriano', sobrenome: 'flach'});

console.log('STRING TEMPLATE');

const imprimirNome2 = ({
  nome, 
  sobrenome = 'Não informado', 
  ultimoNome = 'Não informado' }) => {
  console.log(`${nome} de ${sobrenome} de ${ultimoNome}`);
}

imprimirNome2({nome: 'adriano', sobrenome: 'flach', ultimoNome: 'araujo'});
