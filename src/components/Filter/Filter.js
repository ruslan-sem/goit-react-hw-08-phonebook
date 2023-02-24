import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { Label } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <Label>
      Find contacts by name
      <input type="text" name="filter" onChange={handleChange} />
    </Label>
  );
};
