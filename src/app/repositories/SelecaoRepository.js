import { consulta } from '../database/conexao.js'

class SelecaoRepository {
    // CRUD
    create(selecao) {
        const sql = "INSERT INTO selecoes SET ?"
        return consulta(sql, selecao, 'Não foi possível cadastrar!')
    }

    findAll() {
        const sql = "SELECT * FROM selecoes;"
        return consulta(sql, 'Não foi possível localizar!')
    }

    findById(id) {
        const sql = "SELECT * FROM selecoes WHERE id=?;"
        return consulta(sql, id, 'Não foi possível localizar!')
    }

    update(selecao, id) {
        const sql = "UPDATE selecoes SET ? WHERE id=?;"
        return consulta(sql, [selecao, id], 'Não foi possível atualizar!')
    }

    delete(id) {
        const sql = "DELETE FROM selecoes WHERE id=?;"
        return consulta(sql, id, 'Não foi possível apagar!')
    }
}

export default new SelecaoRepository()
