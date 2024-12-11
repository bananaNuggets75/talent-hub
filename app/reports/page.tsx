import React from 'react';

interface ReportPageProps {
  title: string;
  subtitle: string;
  description: string;
  keyHighlights: string[];
  financialSummary: string;
  generatedDate: string;
}

const ReportPage: React.FC<ReportPageProps> = ({
  title,
  subtitle,
  description,
  keyHighlights,
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

      {/* Footer Section */}
      <div className="report-footer">
        <p>Report generated on {generatedDate}</p>
      </div>
    </div>
  );
};

export default ReportPage;
