import { data } from "autoprefixer";
import React, { useEffect } from "react";
import { useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./Dashboard.css";

const Dashboard = () => {
  const [investments, setInvestments] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setInvestments(data));
  }, []);

  return (
    <LineChart
      width={730}
      height={250}
      data={investments}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="month" stroke="#8884d8" />
      <Line type="monotone" dataKey="investment" stroke="#82ca9d" />
    </LineChart>
  );
};

export default Dashboard;
