// src/components/RepoItem.js
import React from 'react';
import { Card, CardContent, Typography, Avatar } from '@mui/material';

const RepoItem = ({ repo }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{repo.name}</Typography>
        <Typography variant="body2">{repo.description}</Typography>
        <Typography variant="body2">Stars: {repo.stargazers_count}</Typography>
        <Typography variant="body2">Issues: {repo.open_issues_count}</Typography>
        <div>
          <Avatar src={repo.owner.avatar_url} />
          <Typography variant="body2">{repo.owner.login}</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default RepoItem;
