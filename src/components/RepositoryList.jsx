import { RepositoryItem } from "./RepositoryItem";

const repository = {
  title: 'github_explorer',
  description: 'Project developed for ignite bootcamp Rocketseat',
  linkProject: 'https://github.com/Fhare/github_explorer'
};

export function RepositoryList() {
  return (
    <section>
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
};