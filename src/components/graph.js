import React from 'react';
import { AreaChart, Area, YAxis, CartesianGrid, Tooltip,Text } from 'recharts';
import { data } from '../data/data';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const value = payload[0].value;

    return (
      <div style={{ fontWeight: 'bold',fontSize:'25px' }}>
        <p>{value}</p>
      </div>
    );
  }

  return null;
};

const formatValue = (value) => {
  if (value >= 1000) {
    return `${Math.round(value / 1000)}k`;
  }
  return value;
};


const Graph = () => {

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
    <div>
      <h1 style={{ textAlign: 'left',marginLeft:'60px', fontSize: '20px', marginBottom: '30px' }}>Current Market Valuation</h1>
    <AreaChart
          legendType="none"
      width={600}
      height={300}
      data={data.categories.map((_, index) => ({
        time: data.categories[index],
        thisMonth1: data.datasets[0].data[index],
        lastMonth: data.datasets[1].data[index],
      }))}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="gradientThisMonth" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="rgb(0, 120, 215)" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="rgb(0, 120, 215)" stopOpacity={0}/>
        </linearGradient>
        <linearGradient id="gradientLastMonth" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="rgba(0, 120, 215, 0.5)" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="rgba(0, 120, 215, 0.5)" stopOpacity={0}/>
        </linearGradient>
      </defs>
      <YAxis axisLine={false} tickFormatter={formatValue}  dx={-20}/>

      <CartesianGrid vertical={false} />
      <Tooltip content={<CustomTooltip />} />
      <Area type="monotone" strokeWidth={3} dataKey="thisMonth1" stroke="rgb(0, 120, 215)" fillOpacity={0.2} fill="url(#gradientThisMonth)" />
      <Area type="monotone" strokeWidth={2} strokeDasharray="4 5" dataKey="lastMonth" stroke="green" fillOpacity={0} fill="url(#gradientLastMonth)" />
    </AreaChart>
    <div style={{ display: 'flex', justifyContent: 'center', marginLeft: '40px', marginTop: '20px' }}>
          <span style={{ backgroundColor: 'blue', borderRadius: '50%', display: 'inline-block', width: '20px', height: '20px', marginRight: '-5px' }}></span>
          <Text style={{ color: 'black', padding: '5px 15px', fontSize: '18px', marginRight:'20px' }}>This Month</Text>
          <span style={{ backgroundColor: 'lightgreen', borderRadius: '50%', display: 'inline-block', width: '20px', height: '20px', marginRight: '-5px' }}></span>
          <Text style={{ color: 'black', padding: '5px 15px', fontSize: '18px' }}>Last Month</Text>
        </div>
    </div>
    </div>
  );
};

export default Graph;