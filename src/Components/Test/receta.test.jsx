import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import Receta from './Receta';

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

        render(<Receta />);

        expect(screen.getByText('Loading...')).toBeInTheDocument();

        await waitFor(() => expect(screen.getByText(/Receta #12345678/i)).toBeInTheDocument());

        expect(screen.getByText('Receta #12345678')).toBeInTheDocument();
        expect(screen.getByText('Fecha de Emisión: 2024-08-11')).toBeInTheDocument();
        expect(screen.getByText('Doctor: Dr. Juan Pérez')).toBeInTheDocument();
        expect(screen.getByText('Especialidad: Cardiología')).toBeInTheDocument();
        expect(screen.getByText('Código: 123456')).toBeInTheDocument();
        expect(screen.getByText('Ver')).toBeInTheDocument();
    });
});
