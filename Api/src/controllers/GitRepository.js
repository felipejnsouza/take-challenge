const getGitRepositories = require('../services/getGitRepositories');

module.exports = async (request, response) => {
    try {
        const { repository, count } = request.params;

        const dataParams = { repository, count: Number(count) }

        const dataResult = await getGitRepositories(dataParams)

        return response.status(200).json(dataResult)
    } catch (error) {
        console.error(error)
        return response.status(500).json({ message: "something went wrong" })
    }
}