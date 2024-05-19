import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';
const GITHUB_REPO_OWNER = 'marvelcn015';
const GITHUB_REPO_NAME = 'my-blog';
const GITHUB_PERSONAL_ACCESS_TOKEN = process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN;

export const getIssues = async () => {
    try {
        const response = await axios.get(`${GITHUB_API_URL}/repos/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}/issues`, {
            headers: {
                Authorization: GITHUB_PERSONAL_ACCESS_TOKEN
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching GitHub issues:', error);
        throw error;
    }
};

