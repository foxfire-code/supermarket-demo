import React from 'react';
import { Star } from 'lucide-react';

export default function ReviewCard({ review }) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
      <div className="flex items-start justify-between">
        <div>
          <h4 className="font-bold text-sm">{review.author}</h4>
          <p className="text-xs text-gray-600">{new Date(review.date).toLocaleDateString()}</p>
        </div>
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
            />
          ))}
        </div>
      </div>
      <p className="text-sm mt-2 text-gray-700">{review.text}</p>
    </div>
  );
}
