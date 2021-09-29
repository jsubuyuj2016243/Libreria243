export class User{
    constructor(
    public _id: string,    
    public carnet: Number,
    public nombre: String,
    public apellido: String,
    public usuario: String,
    public correo: String,
    public password: String,
    public tipo: String,
    public Libros: [],
    public Historial: []
    ){}
}