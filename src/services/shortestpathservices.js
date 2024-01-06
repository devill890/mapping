// services/ShortestPathService.js
import { AStarFinder } from 'pathfinding';

const findShortestPath = (grid, start, end) => {
  const finder = new AStarFinder();
  const path = finder.findPath(start.x, start.y, end.x, end.y, grid);
  return path;
};

export default findShortestPath;
