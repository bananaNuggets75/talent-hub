'use client';

import React from 'react';

interface ReportPageProps {
  title: string;
  subtitle: string;
  description: string;
  keyHighlights?: string[]; // Optional prop
  financialSummary: string;
  generatedDate: string;
}

const ReportPage: React.FC<ReportPageProps> = ({
  title,
  subtitle,
  description,
  keyHighlights = [], // Default to an empty array if undefined
  financialSummary,
  generatedDate,
}) => {

  const handleDownload = () => {
    console.log('Download PDF');
    // Add functionality to download PDF
  };

  const handleEdit = () => {
    console.log('Edit Report');
    // Add functionality for editing the report
  };

  return (
    <div className="report-page">
      {/* Header Section */}
      <div className="report-header">
        <h1 className="report-title">{title}</h1>
        <p className="report-subtitle">{subtitle}</p>
      </div>

      {/* Description Section */}
      <p className="report-description">{description}</p>

      {/* Report Content */}
      <div className="report-main-content">
        <h3>Key Highlights</h3>
        <ul>
          {keyHighlights.length > 0 ? (
            keyHighlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))
          ) : (
            <li>No key highlights available.</li>
          )}
        </ul>

        <h3>Financial Summary</h3>
        <p>{financialSummary}</p>
      </div>

      {/* Action Buttons */}
      <div className="report-actions">
        <button className="report-btn" onClick={handleDownload}>Download PDF</button>
        <button className="report-btn" onClick={handleEdit}>Edit Report</button>
      </div>

      {/* Footer Section */}
      <div className="report-footer">
        <p>Report generated on {generatedDate}</p>
      </div>
    </div>
  );
};

export default ReportPage;
