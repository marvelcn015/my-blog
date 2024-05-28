# my_blog 請假系統面試小作業

This project is a React application written in TypeScript, utilizing Bootstrap 5 for styling via CDN. It consists of two main pages: `AboutPage` and `Blog`. The `Blog` page integrates with the GitHub API to fetch and display a list of issues from my own repository using Axios for network requests. The application is deployed online using Vercel.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Pages](#pages)
  - [AboutPage](#aboutpage)
  - [Blog](#blog)
- [Setup and Installation](#setup-and-installation)

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Bootstrap 5**: A CSS framework for responsive and modern web design, included via CDN.
- **Axios**: A promise-based HTTP client for making network requests.
- **Vercel**: A cloud platform for static sites and Serverless Functions.

## Project Structure

```
my-blog/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── pages/
│   │   ├── AboutPage.tsx
│   │   └── Blog.tsx
│   ├── utils/
│   │   └── axios.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── package.json
├── tsconfig.json
├── README.md
└── ...
```

## Pages

### AboutPage

The `AboutPage` component provides a detailed personal resume, including work experience and skills. It is styled using Bootstrap 5 classes to ensure a responsive and visually appealing layout.

### Blog

The `Blog` component connects to the GitHub API to fetch and display a list of issues from "/marvelcn015/my_blog" repository. Axios is used to make the API requests, and the data is displayed in a nice format. This page allows users to stay updated with the latest discussions and issues from the selected repository.

#### Fetching Data from GitHub API

The `githubApi.ts` file in the `services` directory handles the API requests:

```typescript
import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/repos/{owner}/{repo}/issues';

export const fetchIssues = async () => {
  try {
    const response = await axios.get(GITHUB_API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching issues from GitHub:', error);
    throw error;
  }
};
```

## Setup and Installation

1. **Clone the repository**:

```bash
git clone https://github.com/yourusername/my-react-project.git
cd my-react-project
```

2. **Install dependencies**:

```bash
npm install
```

3. **Run the development server**:

```bash
npm start
```

This will start the development server at `http://localhost:3000`.

---

鵝鵝鵝終於做完了，腦細胞全部死光光><
