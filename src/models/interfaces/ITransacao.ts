export interface ITransacao {
    nome: string,
    descricao?: string,
    categoriaId: string,
    data: string,
    tipo: string,
    usuarioId: string,
  }