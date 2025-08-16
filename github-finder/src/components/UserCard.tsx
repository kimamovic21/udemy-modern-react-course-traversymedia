import { useMutation, useQuery } from '@tanstack/react-query';
import {
  checkIfFollowingGitHubUser
} from '../api/github';
import { FaGithub, FaUserMinus, FaUserPlus } from 'react-icons/fa';
import type { GitHubUser } from '../types';

const UserCard = ({ user }: { user: GitHubUser }) => {
  const { data: isFollowing, refetch } = useQuery({
    queryKey: ['follow-status', user.login],
    queryFn: () => checkIfFollowingGitHubUser(user.login),
    enabled: !!user.login,
  });

  return (
    <div className='user-card'>
      <img
        src={user.avatar_url}
        alt={user.name}
        className='avatar'
      />

      <h2>
        {user.name || user.login}
      </h2>

      <p className='bio'>
        {user.bio}
      </p>

      <div className='user-card-buttons'>
        <button
          className={`follow-btn ${isFollowing ? 'following' : ''}`}
        >
          {isFollowing ? (
            <>
              <FaUserMinus className='follow-icon' />
              <span>Unfollow user</span>
            </>
          ) : (
            <>
              <FaUserPlus className='follow-icon' />
              <span>Follow user</span>
            </>
          )}
        </button>
        <a
          href={user.html_url}
          target='_blank'
          rel='noopener noreferrer'
          className='profile-btn'
        >
          <FaGithub />
          View GitHub Profile
        </a>
      </div>
    </div>
  );
};

export default UserCard;