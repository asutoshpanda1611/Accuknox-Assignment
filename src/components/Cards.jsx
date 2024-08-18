// Cards.js
import React from 'react';
import Card from './Card';
import Addwidget from './Addwidget';
import NoGraph from './NoGraph';
import dashboardData from '../data/dashboardConfig.json';

const Cards = () => {
  return (
    <div >
      {dashboardData.map(category => (
        <div key={category.id}>
          <h1 className='mt-5 ml-10 text-lg'>{category.name}</h1>
          <div className='ml-12 mt-2 flex gap-1 mr-5'>
            {category.widgets.map(widget => {
              const data = widget.type === 'chart' ? {
                labels: ['Connected', 'Not Connected'],
                datasets: [{
                  label: 'Poll',
                  data: [5, 5],
                  backgroundColor: ['#4299f4', '#4200f4'],
                  borderColor: ['#4299f4', '#4200f4'],
                }]
              } : {};

              return widget.type === 'chart' ? (
                <Card
                  key={widget.id}
                  title={widget.name}
                  data={data} 
                />
              ) : widget.type === 'nograph' ? (
                <NoGraph key={widget.id} />
              ) : widget.type === 'addwidget' ? (
                <Addwidget key={widget.id} />
              ) : null;
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
