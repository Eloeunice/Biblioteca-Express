import mongoose from 'mongoose'

const CategoriaSchema = new mongoose.Schema({
  nome: { type: String, required: true, unique: true, trim: true },
  descricao: { type: String, trim: true },
})

// Export the model
export default mongoose.model('Categorias', CategoriaSchema)
