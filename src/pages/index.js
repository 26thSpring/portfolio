import withSplitting from 'lib/withSplitting';

export const Home = withSplitting(() => import('./Home'));
export const Portfolio = withSplitting(() => import('./Portfolio'));
