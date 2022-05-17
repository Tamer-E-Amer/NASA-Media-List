/**
 * @description This component show the srach bar division under the banner
 */
import React from "react";
import { colors } from "../../themes/appTheme";
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
const SearchBar = () => {
  return (
    <>
      <SearchBarContainer>
        <SearchBarForm>
          <SearchInput />
          <SearchInputButtonWrapper>
            <IconButton size="large">
              <SearchIcon fontSize="large" sx={{ color: "white" }} />
            </IconButton>
          </SearchInputButtonWrapper>
        </SearchBarForm>
      </SearchBarContainer>
    </>
  );
};

export default SearchBar;
