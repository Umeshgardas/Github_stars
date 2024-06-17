// src/components/RepoDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { CircularProgress } from '@mui/material';

const RepoDetails = () => {
  const { owner, repo } = useParams();
  const [commitActivity, setCommitActivity] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCommitActivity = async () => {
      try {
        const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/stats/commit_activity`);
        setCommitActivity(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchCommitActivity();
  }, [owner, repo]);

  if (loading) return <CircularProgress />;

  const options = {
    title: {
      text: 'Weekly Commit Activity',
    },
    xAxis: {
      categories: commitActivity.map((week) => new Date(week.week * 1000).toLocaleDateString()),
    },
    series: [
      {
        name: 'Commits',
        data: commitActivity.map((week) => week.total),
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default RepoDetails;
