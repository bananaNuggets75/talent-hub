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
        
      </form>
    </div>
  );
}
