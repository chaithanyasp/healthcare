import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid,
  BarChart, Bar
} from "recharts";

function Analytics() {

  //  Dummy Data
  const userGrowthData = [
    { day: "Mon", users: 30 },
    { day: "Tue", users: 45 },
    { day: "Wed", users: 60 },
    { day: "Thu", users: 40 },
    { day: "Fri", users: 80 },
    { day: "Sat", users: 100 },
    { day: "Sun", users: 90 }
  ];

  const videoViewsData = [
    { name: "Dr Suresh", OT: 400 },
    { name: "Dr Bassy", OT: 300 },
    { name: "Dr Chaithanya", OT: 500 },
    { name: "Dr hamy", OT: 200 }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1> Analytics Dashboard</h1>

       {/* Line */}
      <h3>User Growth</h3>
      <LineChart width={500} height={300} data={userGrowthData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="users" stroke="#8884d8" />
      </LineChart>
{/* Bar */}
      <h3 style={{ marginTop: "40px" }}>Top Doctors</h3>
      <BarChart width={500} height={300} data={videoViewsData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="OT" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}

export default Analytics;