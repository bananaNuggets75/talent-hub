"use client";  

import Image from "next/image";
import { useState } from "react";

export default function PerformanceReview() {
  const [review, setReview] = useState({
    employeeId: "",
    employeeName: "",
    performance: "",
    rating: 0,
    reviewDate: "",
  });

  const handleReviewChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "rating") {
      setReview({
        ...review,
        [name]: value ? Number(value) : 0, // Convert to number
      });
    } else {
      setReview({
        ...review,
        [name]: value,
      });
    }
  };

  return (
    <div className="performance-review">
      <h1>Performance Review</h1>
      <form>
        <div>
          <label>Employee ID:</label>
          <input
            type="text"
            name="employeeId"
            value={review.employeeId}
            onChange={handleReviewChange}
          />
        </div>
        <div>
          <label>Employee Name:</label>
          <input
            type="text"
            name="employeeName"
            value={review.employeeName}
            onChange={handleReviewChange}
          />
        </div>
        <div>
          <label>Performance:</label>
          <input
            type="text"
            name="performance"
            value={review.performance}
            onChange={handleReviewChange}
          />
        </div>
        <div>
          <label>Rating (1 to 5):</label>
          <input
            type="number"
            name="rating"
            value={review.rating}
            onChange={handleReviewChange}
            min="1"
            max="5"
          />
        </div>
        <div>
          <label>Review Date:</label>
          <input
            type="date"
            name="reviewDate"
            value={review.reviewDate}
            onChange={handleReviewChange}
          />
        </div>
      </form>
    </div>
  );
}
