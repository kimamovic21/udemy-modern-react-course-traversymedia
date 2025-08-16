import { useMutation, useQuery } from '@tanstack/react-query';
import { FaGithub, FaUserMinus, FaUserPlus } from 'react-icons/fa';
import type { GitHubUser } from '../types';
import {
  checkIfFollowingGitHubUser,
  followGitHubUser
} from '../api/github';

const UserCard = ({ user }: { user: GitHubUser }) => {
  // Query to check if user is following
  const { data: isFollowing, refetch } = useQuery({
    queryKey: ['follow-status', user.login],
    queryFn: () => checkIfFollowingGitHubUser(user.login),
    enabled: !!user.login,
  });

  // Mutation to follow the user
  const followMutation = useMutation({
    mutationFn: () => followGitHubUser(user.login),
    onSuccess: () => {
      console.log(`You have followed ${user.login}`);
      refetch();
    },
    onError: (err: any) => {
      console.error(err);
    },
  });

  const handleFollow = () => {
    if (isFollowing) {
      // @todo Unfollow
    } else {
      followMutation.mutate();
    };
  };

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
          onClick={handleFollow}
          disabled={followMutation.isPending}
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
    </div >
  );
};

export default UserCard;