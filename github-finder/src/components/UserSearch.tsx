import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useDebounce } from 'use-debounce';
import { fetchGitHubUser, searchGitHubUsers } from '../api/github';
import type { GitHubUser } from '../types';
import UserCard from './UserCard';
import RecentSearches from './RecentSearches';

const UserSearch = () => {
  const [username, setUsername] = useState('');
  const [submittedUsername, setSubmittedUsername] = useState('');
  const [recentUsers, setRecentUsers] = useState<string[]>(() => {
    const stored = localStorage.getItem('recentUsers');
    return stored ? JSON.parse(stored) : [];
  });
  const [debouncedUsername] = useDebounce(username, 300);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Query to fetch specific user
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['users', submittedUsername],
    queryFn: () => fetchGitHubUser(submittedUsername),
    enabled: !!submittedUsername,
  });

  // Query to fetch suggestions for user search
  const { data: suggestions } = useQuery({
    queryKey: ['github-user-suggestions', debouncedUsername],
    queryFn: () => searchGitHubUsers(debouncedUsername),
    enabled: debouncedUsername.length > 1,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedUser = username.trim();
    if (!trimmedUser) return;
    setSubmittedUsername(trimmedUser);

    setUsername('');

    setRecentUsers((prev) => {
      const updatedUser = [trimmedUser, ...prev.filter((user) => user !== trimmedUser)];
      return updatedUser.slice(0, 5);
    });
  };

  useEffect(() => {
    localStorage.setItem('recentUsers', JSON.stringify(recentUsers));
  }, [recentUsers]);

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div className='dropdown-wrapper'>
          <input
            type='text'
            value={username}
            onChange={(e) => {
              const val = e.target.value;
              setUsername(val);
              setShowSuggestions(val.trim().length > 1)
            }}
            placeholder='Enter GitHub username'
          />
          {showSuggestions && suggestions?.length > 0 && (
            <ul className='suggestions'>
              {suggestions.slice(0, 5).map((user: GitHubUser) => (
                <li
                  key={user.login}
                  onClick={() => {
                    setUsername(user.login);
                    setShowSuggestions(false);

                    if (submittedUsername !== user.login) {
                      setSubmittedUsername(user.login);
                    } else {
                      refetch();
                    };

                    setRecentUsers((prev) => {
                      const updated = [
                        user.login,
                        ...prev.filter((prevUsername) => prevUsername !== user.login),
                      ];
                      return updated.slice(0, 5);
                    });
                  }}
                >
                  <img
                    src={user.avatar_url}
                    alt={user.login}
                    className='avatar-xs'
                  />
                  <span>
                    {user.login}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <button type='submit'>Search</button>
      </form>

      {isLoading && <p className='status'>Loading...</p>}

      {isError && <p className='status error'>{error.message}</p>}

      {data && data && <UserCard user={data} />}

      {recentUsers.length > 0 && (
        <RecentSearches
          users={recentUsers}
          onSelect={(username) => {
            setUsername(username);
            setSubmittedUsername(username);
          }}
        />
      )}
    </>
  );
};

export default UserSearch;