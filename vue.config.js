module.exports = {
    pwa : {
        name : 'vuestagram',
        themeColor : '#78E150',
        msTileColor : '#000000',

        workboxOptions: {
            exclude: [/\.map$/, /manifest\.json$/, 'index.html']
        }
    }
}