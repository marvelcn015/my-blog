import { useEffect, useState } from 'react';
import { getIssues } from './utils/github';

interface Issue {
    number: number;
    title: string;
    body: string;
}

function BlogPage() {
    const [issues, setIssues] = useState<Issue[]>([]);

    useEffect(() => {
        const fetchIssues = async () => {
            try {
                const issuesData = await getIssues();
                setIssues(issuesData);
            } catch (error) {
                console.error('Error fetching issues:', error);
            }
        };

        fetchIssues();
    }, []);

    return (
        <>
            <h1>Blog</h1>
            <h3>_</h3>
            <p className = "fw-bold">The page is aimed at fetching the issue list from my repo "my_blog", using GitHub API + Axios.</p>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {issues.map((issue) => (
                    <div className="col" key={issue.number}>
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">{issue.title}</h5>
                                <p className="card-text">{issue.body}</p>
                            </div>
                        </div>
                    </div>
                ))}

            <p className='text-break'></p>
            <p className='fw-bold'>Please feel free to visit <a href="https://github.com/marvelcn015/my-blog" target="_blank">my repo</a> and leave any comments!</p>
            </div>
        </>
    );
}

export default BlogPage;