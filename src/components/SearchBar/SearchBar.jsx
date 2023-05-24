import PropTypes from 'prop-types';
import { useState } from 'react';
import { Box, Icon, Input, Button, Form } from './SearchBar.styled';

const SearchBar = ({ onChange }) => {
  const [movieValue, setMovieValue] = useState('');
  const nameChange = e => setMovieValue(e.currentTarget.value.toLowerCase());
  const handleSubmit = e => {
    e.preventDefault();
    if (movieValue.trim() !== '') {
      onChange(movieValue);
      setMovieValue('');
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
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
