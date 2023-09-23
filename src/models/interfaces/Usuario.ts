export interface Login{
    email: string
    senha: string
}

export interface Usuario extends Login{
    id?: string
    nome: string
}