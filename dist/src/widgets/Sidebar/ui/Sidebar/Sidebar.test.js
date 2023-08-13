import { jsx as _jsx } from "react/jsx-runtime";
import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';
describe('Sidebar', function () {
    test('Sidebar test', function () {
        renderWithTranslation(_jsx(Sidebar, {}, void 0));
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('Sidebar toggle test', function () {
        renderWithTranslation(_jsx(Sidebar, {}, void 0));
        var toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar-toggle')).toHaveClass('burgerNotCollapsed');
    });
});
