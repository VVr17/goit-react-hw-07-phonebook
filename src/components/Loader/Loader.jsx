import { theme } from 'constants/theme';
import PropTypes from 'prop-types';
import BarLoader from 'react-spinners/BarLoader';

const override = {
  display: 'block',
  margin: `${theme.space[3]}px auto`,
};

const color = theme.colors.accentTextColor;

export const Loader = ({ isLoading }) => (
  <BarLoader
    color={color}
    loading={isLoading}
    cssOverride={override}
    width={160}
    aria-label="Loading Spinner"
  />
);

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
