
import React from 'react';
import { PriceRange as PriceRangeType } from '@/data/places';

interface PriceRangeProps {
  range: PriceRangeType;
}

const PriceRange: React.FC<PriceRangeProps> = ({ range }) => {
  const renderPriceTag = () => {
    switch (range) {
      case '$':
        return (
          <div className="price-tag">
            <span className="price-tag-active">$</span>
            <span className="price-tag-inactive">$</span>
            <span className="price-tag-inactive">$</span>
          </div>
        );
      case '$$':
        return (
          <div className="price-tag">
            <span className="price-tag-active">$</span>
            <span className="price-tag-active">$</span>
            <span className="price-tag-inactive">$</span>
          </div>
        );
      case '$$$':
        return (
          <div className="price-tag">
            <span className="price-tag-active">$</span>
            <span className="price-tag-active">$</span>
            <span className="price-tag-active">$</span>
          </div>
        );
      default:
        return null;
    }
  };

  return renderPriceTag();
};

export default PriceRange;
