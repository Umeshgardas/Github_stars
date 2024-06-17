// src/components/RepoList.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReposRequest } from '../reducers/reposSlice'; // Correct path
import RepoItem from './RepoItem';
import { CircularProgress, Button } from '@mui/material';

const RepoList = () => {
  const dispatch = useDispatch();
  const { repos, loading, error } = useSelector((state) => state.repos);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const date = new Date();
    date.setDate(date.getDate() - 30);
    dispatch(fetchReposRequest({ date: date.toISOString().split('T')[0], page }));
  }, [dispatch, page]);

  if (loading) return <CircularProgress />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
      <Button onClick={() => setPage(page + 1)}>Load More</Button>
    </div>
  );
};

export default RepoList;
