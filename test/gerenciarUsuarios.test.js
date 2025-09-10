const { retornarUsuarios, adicionarNovoUsuario } = require('../src/gerenciarUsuarios');
const { expect } = require('chai');

describe('Testar as funções de Gestão de Usuários', function () {
    it('Validar que posso adicionar um novo nome de usuário na lista', function () {
        //1. Adicionar um novo nome na lista de usuários
                adicionarNovoUsuario({
                    nome: 'Maria',
                    email: 'maria@gmail.com'
                });

        //2. Retornar  a lista de usuários na caixa lista de usuários 
        const listaDeUsuarios = retornarUsuarios();

        //3. Comparar se o novo nome está no fim da lista de usuários
        //expect(listaDeUsuarios.at(-1).nome).to.equal('Maria');
        //expect(listaDeUsuarios.at(-1).email).to.equal('maria@gmail.com');
        expect(listaDeUsuarios.at(-1)).to.deep.equal({ 
            //to.deep.equal ou to.eql devem ser usados quando eu comparo o objeto por inteiro
            nome: 'Maria',
            email: 'maria@gmail.com'
        })


    });



});