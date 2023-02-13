console.log('ARRAY INCLUDES');

const nomeCompleto = ['adriano', 'flach', 'araujo'];

console.log(nomeCompleto.length);
console.log(nomeCompleto[0]);
console.log(nomeCompleto.indexOf('adrianos'));

console.log('FIND');

const resultado = nomeCompleto.find(n => n == 'adriano');
console.log(resultado);

const obj = [
  { chave: 1, valor: 'Opção 1'},
  { chave: 2, valor: 'Opção 2'},
  { chave: 3, valor: 'Opção 3'},
  { chave: 4, valor: 'Opção 4'}];

const opcaoSelecionada = obj.find(opcao => opcao.chave == 1);
console.log(opcaoSelecionada);

console.log('MAP ENTRIES/KEYS/VALUES');

const usuario = {
  nome: 'Adriano',
  sobrenome: 'Flach',
  idade: 33,
  sexo: 'Masculino'
}

console.log(Object.entries(usuario));
Object.entries(usuario).forEach(dados => console.log(dados));

const imprimir = (...chaves) => {
  // chaves == [ 'nome', 'sobrenome' ];
  // 'nome' = usuario['nome']
  // 'sobrenome' = usuario['sobrenome']
  // valores = [ 'Adriano', 'Flach' ]
  // [ [ 'nome', 'sobrenome', 'idade', 'sexo' ] ]
  const valores = chaves.map(chave => usuario[chave]);
  console.log(valores);
}

console.log('Imprimir nome e sobrenome');
imprimir('nome', 'sobrenome');

const nomeInfo = [ 'sobrenome' ];
imprimir(nomeInfo);

const nomes = 'Todas';
console.log(Object.keys(usuario));
imprimir(...Object.keys(usuario));
imprimir('nome', 'sobrenome', 'idade', 'sexo')

console.log(Object.values(usuario));