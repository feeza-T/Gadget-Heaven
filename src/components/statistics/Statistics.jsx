import  { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
     fetch('/gadgetsData.json')
      .then((response) => response.json())
      .then((data) => {
        const chartData = data.map(item => ({
          name: item.product_title,
          price: item.price,
          rating: item.rating
        }));

        setChartData(chartData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className='mb-20'>
        <div className="bg-purple-600 text-white text-center py-10 pb-30">
        <h1 className="text-4xl font-bold">Statistics</h1>
        <p className="mt-2 text-lg">
        Explore the latest gadgets that will take your experience to <br></br>the next level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      <h1 className="text-center text-black text-2xl font-semibold m-8">Statistics</h1>
      
      {/* Bar Chart for Product Price */}
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="price" fill="#8884d8" name="Price" />
          <Bar dataKey="rating" fill="#82ca9d" name="Rating" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
