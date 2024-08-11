import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import Receta from './Receta';

// Mock axios to prevent actual API calls during testing
jest.mock('axios');

describe('Receta Component', () => {
    it('displays the loading message and then renders receta data', async () => {
        // Mock the API response
        const mockData = [
            {
                recetaNumber: 12345678,
                fechaEmision: '2024-08-11',
                nombreDoctor: 'Dr. Juan Pérez',
                especialidadDoctor: 'Cardiología',
                codigoNumber: '123456',
            },
        ];
        axios.get.mockResolvedValueOnce({ data: mockData });

        // Render the component
        render(<Receta />);

        // Check if the loading message is displayed
        expect(screen.getByText('Loading...')).toBeInTheDocument();

        // Wait for the component to finish loading and render data
        await waitFor(() => expect(screen.getByText(/Receta #12345678/i)).toBeInTheDocument());

        // Check if the receta data is displayed correctly
        expect(screen.getByText('Receta #12345678')).toBeInTheDocument();
        expect(screen.getByText('Fecha de Emisión: 2024-08-11')).toBeInTheDocument();
        expect(screen.getByText('Doctor: Dr. Juan Pérez')).toBeInTheDocument();
        expect(screen.getByText('Especialidad: Cardiología')).toBeInTheDocument();
        expect(screen.getByText('Código: 123456')).toBeInTheDocument();
        expect(screen.getByText('Ver')).toBeInTheDocument();
    });
});
