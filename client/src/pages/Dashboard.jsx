import React from "react";
import styled from "styled-components";
import CountsCard from "../utils/CountsCard";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";

// Dummy static data
const dashboardData = {
  totalWorkouts: 45,
  averageCaloriesBurned: 650.34,
  totalCaloriesBurned: 15000.56,
  weeklyCalories: [600, 750, 800, 900, 700, 820, 880],
};

const counts = [
  { key: "totalWorkouts", label: "Total Workouts" },
  { key: "averageCaloriesBurned", label: "Avg Calories Burned" },
  { key: "totalCaloriesBurned", label: "Total Calories Burned" },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

// Styled Components
const Container = styled.div`
  padding: 24px;
  font-family: 'Segoe UI', sans-serif;
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  margin-bottom: 24px;
  color: #333;
`;

const CountsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 40px;
`;

const ChartSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 32px;
`;

const ChartBox = styled.div`
  background: #fff;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  height: 350px;
`;

const ChartTitle = styled.h3`
  text-align: center;
  margin-bottom: 12px;
  color: #444;
`;

// Component
const Dashboard = () => {
  const pieData = [
    { name: "Avg Burned", value: dashboardData.averageCaloriesBurned },
    { name: "Remaining", value: 1000 - dashboardData.averageCaloriesBurned },
  ];

  const barData = dashboardData.weeklyCalories.map((val, i) => ({
    name: `Day ${i + 1}`,
    calories: val,
  }));

  const Container = styled.div`
  padding: 24px;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
`;

  return (
    <Container>
      <Title>Dashboard (Static Data)</Title>

      <CountsGrid>
        {counts.map((item) => (
          <CountsCard key={item.key} item={item} data={dashboardData} />
        ))}
      </CountsGrid>

      <ChartSection>
        <ChartBox>
          <ChartTitle>Average Calories Burned</ChartTitle>
          <ResponsiveContainer width="100%" height="90%">
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {pieData.map((entry, i) => (
                  <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </ChartBox>

        <ChartBox>
          <ChartTitle>Weekly Calories Burned</ChartTitle>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="calories" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </ChartBox>
      </ChartSection>
    </Container>
  );
};

export default Dashboard;
