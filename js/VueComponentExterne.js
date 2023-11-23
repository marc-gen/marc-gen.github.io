Vue.componentExterne = function (id, definition) {
    return Vue.component(id, function (resolve, reject) {
        fetch(definition.template).then(resp => {
            resp.text().then(html => {
                definition.template = html
                resolve(definition)
            })
        }, error => {
            console.error("Erreur de chargement du template: ", error)
            reject(error)
        })
    })
}