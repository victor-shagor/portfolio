import styled from "styled-components";

export const Cardiv = styled.div`
  overflow: hidden;
  .card {
    transition: transform 0.6s;
  }

  .card:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
