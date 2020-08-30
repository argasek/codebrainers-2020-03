import PropTypes from "prop-types";
import moment from "moment-es6";
import Category from "models/Category";
import Plant from "models/Plant";
import Room from "models/Room";

const categoryPropType = PropTypes.instanceOf(Category).isRequired;

const categoriesPropTypes = PropTypes.arrayOf(categoryPropType).isRequired;

const fasIconPropType = PropTypes.shape({
  icon: PropTypes.arrayOf(PropTypes.any).isRequired,
  iconName: PropTypes.string.isRequired,
  prefix: PropTypes.string.isRequired,
});

const plantPropTypes = PropTypes.instanceOf(Plant).isRequired;

const plantsPropTypes = PropTypes.arrayOf(plantPropTypes).isRequired;

const roomPropType = PropTypes.instanceOf(Room).isRequired;

const roomsPropTypes = PropTypes.arrayOf(roomPropType).isRequired;

export {
  categoryPropType,
  categoriesPropTypes,
  fasIconPropType,
  plantPropTypes,
  plantsPropTypes,
  roomPropType,
  roomsPropTypes,
};
