import React from 'react';
import PropTypes from 'prop-types';

const UserRepos = ({ userRepos }) => (
    <table className="table">
    <tbody>
      {userRepos.map((repo) => (
        <tr key={repo.id}>
          <td>{repo.name}</td>
        </tr>
      ))}
    </tbody>
    </table>
);

//ovo sam napravila u obliku tablice a ne liste jer mi je bolje tako izgledalo :) 


UserRepos.propTypes = {
  userRepos: PropTypes.array.isRequired,
};

export default UserRepos;

