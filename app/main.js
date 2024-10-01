import Grid from './components/grid.js';
import { Board } from './models/board.js';

window.addEventListener('load', () => {
    const tbody = document.querySelector('tbody');
    const board = new Board();
    const grid = new Grid(tbody);
    
    board.onChange.push(() => grid.render(board));
    
    // Initial rendering
    grid.render(board);
    
}); 