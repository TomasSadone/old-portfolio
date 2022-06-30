import styled from "styled-components";

export const StyledMainPage = styled.div`
  height: calc(100vh - 90px);
  position: relative;

  /* utility */
  .flex-max-width {
      display:flex;
      > * {
          max-width: 70%;
          border: solid 1px blue;
        }
    }

    /* text section */
    
    .container :first-child {
      font-size: 1.25rem;
      line-height: 1.86rem;
    }
    
    #text {
      padding-top: 4.68rem;
    }

    #tomas-sadone {
        color: #0000FF;
        font-size: 4.68rem;
    }

 /* vertical line and logos */

  div.vertical-line {
    border-left: 1px solid #fff;
    height: 38vh;
    position: absolute;
    bottom: -20px;
    
    * {
      cursor: pointer;
    }
  }
  .vertical-line :first-child {
    //linkedin
    position: relative;
    left: -0.875rem;
    top: -6em;
  }
  .vertical-line :last-child {
    //linkedin
    position: relative;
    left: -3rem;
    top: -3rem;
  }
  img {
    width: 2rem;
    aspect-ratio: 1;
  }

  /* mail */

  #mail {
    color: white;
    text-decoration: none;
    position: absolute;
    transform: rotate(90deg);
    font-size: 1.125rem;
    bottom: 0px;
    right: 0; /* same as height */
    /* height: 40px; */
    transform-origin: 100% 0;
    position: absolute;
    /* line-height: 40px; same as height, for vertical centering */
  }
`;
