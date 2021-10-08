export function RepositoryItem({ repository }) {
  return (
    <li>
      <h2>{repository.title}</h2>
      <p>{repository.description}</p>

      <a href={repository.linkProject} target='_blank'>
        Acessar repositório
      </a>
    </li>
  );
};