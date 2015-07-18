import { PropTypes } from 'react';

export default PropTypes.shape({
  id: PropTypes.string.isRequired,
  companyId: PropTypes.string.isRequired,
  full: PropTypes.bool.isRequired,
  position: PropTypes.shape({
    depth: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    position: PropTypes.number.isRequired,
    rack: PropTypes.number.isRequired,
    shelf: PropTypes.number.isRequired
  }).isRequired
});
