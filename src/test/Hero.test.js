import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // ✅ Modern import
import Hero from "../landing_page/home/Hero";

describe('Hero Component', () => {
  test('renders hero', () => {
    render(<Hero />);
    
    const heroImage = screen.getByAltText("Hero Image"); // ✅ Match actual alt text
    
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute('src', 'media/images/homeHero.png');
  });
});
