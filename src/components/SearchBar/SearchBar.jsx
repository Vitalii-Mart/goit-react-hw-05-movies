import PropTypes from 'prop-types';
import { useState } from 'react';
import { Box, Icon, Input, Button, Form } from './SearchBar.styled';

const SearchBar = ({value, onChange }) => {
  const [movieValue, setMovieValue] = useState(value);
  const nameChange = e => setMovieValue(e.currentTarget.value.toLowerCase());
  const handleSubmit = e => {
    e.preventDefault();
    if (movieValue.trim() !== '') {
      onChange(movieValue);
    }
  };
  return (
    <Box>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={movieValue}
          onChange={nameChange}
          placeholder="search movie by name..."
        />
        <Button>
          <Icon />
        </Button>
      </Form>
    </Box>
  );
};
SearchBar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
