function status (require, response) {
    response.status(200).json({ chave: "Minha primeira api"})
}

export default status