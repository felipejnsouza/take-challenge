const api = require('../services/api');

module.exports = async (dataParams) => {
    let counter = dataParams.count;
    const gitData = [];

    const queryApi = `users/${dataParams.repository}/repos?sort=created&direction=asc`
    const responseData =  await api.get(queryApi);

    responseData.data.map((dataRepository) => {
        if (counter > 0 && dataRepository.language === "C#") {
            
            const {
                name,
                owner: { avatar_url },
                description,
                language,
                created_at
            } = dataRepository;

            const formatedData = {
                name,
                owner: { avatar_url },
                description,
                language,
                created_at
            }
            
            gitData.push(formatedData);

            counter--;
        };    
    });

    return gitData;
};