import { StyledCopyright } from "./styles";

function Copyright() {
  const year = new Date().getFullYear();
  return (
    <StyledCopyright>
      © {year} Loopstudios. All rights reserved.
    </StyledCopyright>
  );
}

export default Copyright;
