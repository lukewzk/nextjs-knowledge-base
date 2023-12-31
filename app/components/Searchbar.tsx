"use client";

import {
  ContainerStyled,
  TextFieldStyled,
  BoxStyled,
  ButtonStyled,
  FontAwesomeIconStyled,
} from "./styles/Searchbar.styles";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Searchbar() {

  return (
    <ContainerStyled>
      <BoxStyled>
        <TextFieldStyled
          id="search-bar"
          label="Search for answers"
          variant="outlined"
        />
        <ButtonStyled>
          <FontAwesomeIconStyled icon={faMagnifyingGlass} />
        </ButtonStyled>
      </BoxStyled>
    </ContainerStyled>
  );
}
