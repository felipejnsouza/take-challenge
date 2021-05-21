const {deepStrictEqual} = require("assert");
const getGitRepositories = require('../src/services/getGitRepositories');

const DEFAULT_RESPONSE = [
    {
        "full_name": "takenet/library.data",
        "owner": {
          "avatar_url": "https://avatars.githubusercontent.com/u/4369522?v=4"
        },
        "description": "Provides a simple abstraction for implementing the repository and unit of work patterns for data-enabled applications",
        "language": "C#",
        "created_at": "2013-10-25T13:04:51Z"
      }
  ];

const DEFAULT_PARAMS = {
    repository: 'takenet',
    count: 1
}

describe('URL request from Blip', () => {
    it('It should return the repositories formated like DEFAULT_RESPONSE', async () => {
        const expected = DEFAULT_RESPONSE;
        const result = await getGitRepositories(DEFAULT_PARAMS);

        deepStrictEqual(result, expected);
    });

    it('it should return the correct number of objects', async () => {
        const ALTERED_PARAMS = {
            ...DEFAULT_PARAMS,
            count: 5
        };
        const expected = 5;
        const result = await getGitRepositories(ALTERED_PARAMS);

        deepStrictEqual(result.length,expected);
    });
})