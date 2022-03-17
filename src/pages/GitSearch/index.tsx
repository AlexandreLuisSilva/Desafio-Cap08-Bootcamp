import './styles.css';

import ResultCard from 'components/ResultCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ResultLink from 'components/ResultLink';
import GitSearchLoader from './GitSearchLoader';

type UserData = {
  name: string;
};

type GitCard = {
  avatar_url: string;
  url: string;
  name: string;
  location: string;
  followers: string;
};

const GitSearch = () => {
  const [user, setUser] = useState<UserData>({
    name: '',
  });

  const [gitCard, setGitCard] = useState<GitCard>();

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    event.preventDefault();
    axios
      .get(`https://api.github.com/users/${user.name}`)
      .then((response) => {
        setGitCard(response.data);
      })
      .catch((error) => {
        setGitCard(undefined);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="git-search-container">
      <div className="container search-container">
        <h6>Encontre um perfil Github</h6>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="name"
              value={user.name}
              className="search-input"
              placeholder="Nome do usuário"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>
      <div className="container card-container">
        {isLoading ? (
          <GitSearchLoader />
        ) : (
          <>
            {gitCard && (
              <div className="card-base">
                <div className="img-container">
                  <img
                    className="img-avatar"
                    src={gitCard.avatar_url}
                    alt={gitCard.name}
                  />
                </div>
                <div className="info-container">
                  <h6>Informações</h6>
                  <ResultLink title="Perfil:" description={gitCard.url} />
                  <ResultCard
                    title="Seguidores:"
                    description={gitCard.followers}
                  />
                  <ResultCard
                    title="Localidade:"
                    description={gitCard.location}
                  />
                  <ResultCard title="Nome:" description={gitCard.name} />
                </div>
              </div>
            )}{' '}
          </>
        )}
      </div>
    </div>
  );
};

export default GitSearch;
