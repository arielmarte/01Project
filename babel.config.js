module.exports = {
    presets: [
        '@babel/preset-env',
        ['@babel/preset-react',{
            runtime: 'automatic' // para não ser necessário importar react em todos os documentos
        }]
    ]
}