export interface IUsuarioUpdate{
    id?: string
    email?: string
    nome?: string
    senha?: string
}

export interface ILogin extends IUsuarioUpdate{
    email: string
    senha: string
}

export interface IUsuario extends ILogin{
    id?: string
    nome: string
}