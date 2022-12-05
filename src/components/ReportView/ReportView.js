import React from 'react';
import { ReportHeader } from '../ReporHeader/ReportHeader';
import data from '../../data/dumydata.json';

// Styles
import './ReportView.css';

export const ReportView = () => {
  return (
    <div className='report'>
      <div className='report--card'>
        <ReportHeader data={data}></ReportHeader>
      </div>
    </div>
  )
}
