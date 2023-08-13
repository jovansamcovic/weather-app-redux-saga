import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // Define typings for HTML elements here
      div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
      // You can add more elements as needed
    }
  }
}
