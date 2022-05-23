/**
 * @description This component show the srach bar division under the banner
 */
import React from "react";
// styled Components
import {
  SearchBarContainer,
  SearchBarForm,
  SearchInput,
  SearchInputButtonWrapper,
} from "../../styles/SearchBar/index";
// mui components
import { IconButton } from "@mui/material";
// mui icons
import SearchIcon from "@mui/icons-material/Search";
// redux
import { useSelector, useDispatch } from "react-redux";
import { searchNasaMedia, getAllMedia } from "../../redux/actions/mediaActions";
const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchWord, setSearchWord] = React.useState("");
  // search function -- submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    if (searchWord !== "") {
      dispatch(searchNasaMedia(searchWord));
    } else {
      dispatch(getAllMedia());
    }
  };

  return (
    <>
      <SearchBarContainer>
        <SearchBarForm onSubmit={submitHandler}>
          <SearchInput
            onChange={(e) => {
              setSearchWord(e.target.value);
            }}
            value={searchWord}
            name="searchWord"
          />
          <SearchInputButtonWrapper>
            <IconButton size="large" type="submit">
              <SearchIcon fontSize="large" sx={{ color: "white" }} />
            </IconButton>
          </SearchInputButtonWrapper>
        </SearchBarForm>
      </SearchBarContainer>
    </>
  );
};

export default SearchBar;
