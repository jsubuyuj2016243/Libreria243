export class Book{
    constructor(
        public tipo: String,
        public autor: String,
        public titulo: String,
        public edicion: String,
        public claves: String,
        public descripcion: String,
        public temas: String,
        public copias: Number,
        public disponibles: Number,
    
        public frecuencia: String,
        public ejemplares: String
    ){}
}