import PropTypes from 'prop-types';

const AssignmentModel = PropTypes.shape({
  name: PropTypes.string,
  course: PropTypes.shape({ name: PropTypes.string, id: PropTypes.string }),
  topic: PropTypes.string,
  due_to: PropTypes.string,
});
export default AssignmentModel;
